import { fileURLToPath } from "node:url";
import path from "node:path";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // A package-lock.json on the Desktop makes Next.js treat the whole Desktop
  // as the workspace root. Pin it to this project.
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
