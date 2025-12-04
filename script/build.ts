// script/build.ts
import { spawnSync } from "child_process";
import fs from "fs";
import path from "path";

function run(cmd: string, args: string[], cwd?: string) {
  console.log(`> ${cmd} ${args.join(" ")} ${cwd ? `(cwd=${cwd})` : ""}`);
  const res = spawnSync(cmd, args, { stdio: "inherit", cwd: cwd || process.cwd() });
  if (res.status !== 0) {
    console.error(`Command failed: ${cmd} ${args.join(" ")} (cwd=${cwd})`);
    process.exit(res.status ?? 1);
  }
}

function copyDir(src: string, dest: string) {
  if (!fs.existsSync(src)) return;
  fs.rmSync(dest, { recursive: true, force: true });
  fs.mkdirSync(dest, { recursive: true });
  for (const ent of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, ent.name);
    const destPath = path.join(dest, ent.name);
    if (ent.isDirectory()) copyDir(srcPath, destPath);
    else fs.copyFileSync(srcPath, destPath);
  }
}

async function main() {
  const projectRoot = process.cwd();
  const clientDir = path.join(projectRoot, "client");
  const publicDir = path.join(projectRoot, "public");

  if (fs.existsSync(clientDir) && fs.statSync(clientDir).isDirectory()) {
    console.log("Client folder detected. Building client...");
    run("npm", ["ci"], clientDir);
    run("npm", ["run", "build"], clientDir);

    const possibleDist = [path.join(clientDir, "dist"), path.join(clientDir, "build"), path.join(clientDir, "out")];
    let built = false;
    for (const d of possibleDist) {
      if (fs.existsSync(d)) {
        console.log(`Found build output at ${d} — copying to /public`);
        copyDir(d, publicDir);
        built = true;
        break;
      }
    }
    if (!built) console.warn("Couldn't find client build output (client/dist or client/build).");
  } else {
    console.log("No client folder found — skipping client build.");
  }
  console.log("Build script finished.");
}

main().catch((err) => { console.error(err); process.exit(1); });
