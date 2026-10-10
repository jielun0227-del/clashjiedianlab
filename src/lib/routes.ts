export function cleanId(id: string) {
  return id.replace(/\.(md|mdx)$/i, '').replace(/\\/g, '/');
}

export function entryPath(entry: { id: string; data: { slug?: string; section?: string }; filePath?: string }) {
  if (entry.data.section && entry.data.slug) return `${entry.data.section}/${entry.data.slug}`;
  const sourcePath = entry.filePath?.replace(/\\/g, '/');
  const fromFile = sourcePath?.split('/src/content/blog/')[1];
  const id = cleanId(fromFile ?? entry.id);
  const parts = id.split('/');
  if (parts.length === 1) return entry.data.slug ?? parts[0];
  const section = parts[0];
  return `${section}/${entry.data.slug ?? parts.slice(1).join('/')}`;
}

export function isSectionIndex(id: string) {
  return cleanId(id).endsWith('/_index');
}
