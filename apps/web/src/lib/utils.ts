export function createSectionId(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}
