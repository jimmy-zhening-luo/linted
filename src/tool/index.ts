import { Path } from "./path";

export function directory(
  path: string,
  subpath?: string,
) {
  return subpath === undefined
    ? path
    : path + (
      path.endsWith(Path.Directory)
        ? subpath.startsWith(Path.Directory)
          ? subpath.slice(1)
          : subpath
        : subpath.startsWith(Path.Directory)
          ? subpath
          : Path.Directory + subpath
    );
}

export function not(
  path: string,
  subpath?: string,
) {
  return Path.Not + directory(path, subpath);
}

export function flat(
  path: string,
  subpath?: string,
) {
  return directory(
    directory(path, subpath),
    Path.Flat,
  );
}

export function recurse(
  path: string,
  subpath?: string,
) {
  return flat(path, subpath) + Path.Flat;
}

export function file(
  extension: string,
  name: string = Path.Flat,
) {
  return Path.Recurse
    + Path.Directory
    + name
    + "."
    + extension;
}
