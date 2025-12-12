export const enum Path {
  Not = "!",
  Directory = "/",
  Flat = "*",
  Recurse = Flat + Flat,
}
