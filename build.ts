import { ChemicalBuild } from "chemicaljs";

try {
  const build = new ChemicalBuild({
    path: "build",
    rammerhead: false,
  });

  await build.write();
  console.log("✅ Static build completed successfully");
} catch (err) {
  console.error("❌ Build error:", err);
  process.exit(1);
}