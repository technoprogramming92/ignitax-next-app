import { rule } from "postcss";

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
    styledJsx: true,
  },
  experimental: {
    nextScriptWorkers: true,
  },
};

export default nextConfig;
