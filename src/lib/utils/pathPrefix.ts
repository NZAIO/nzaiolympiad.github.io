import config from "@/config/config.json";

const { base_path } = config.site;

export const withBasePath = (path: string): string => {
  if (!path || path.startsWith("http") || path.startsWith("mailto:")) {
    return path;
  }

  if (base_path === "/") {
    return path;
  }

  if (path === "/") {
    return base_path;
  }

  return `${base_path}${path}`;
};

export const withoutBasePath = (path: string): string => {
  if (base_path !== "/" && path.startsWith(base_path)) {
    const stripped = path.slice(base_path.length);
    return stripped || "/";
  }

  return path || "/";
};
