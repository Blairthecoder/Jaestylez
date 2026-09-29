// Helpers for Wix media URLs. No client/server marker so both can import them.

/**
 * Wix stores images as wix:image://v1/<file id>/<name>#...; the public URL is built from the file id. Some uploads
 * put the original file name first (IMG_1.HEIC/<id>~mv2.jpg), in which case the id is the ~mv2 one.
 */
export function wixImageUrl(uri: string | null | undefined, width: number, height: number): string | null {
  const match = uri?.match(/^wix:image:\/\/v1\/([^/#]+)(?:\/([^#]+))?/);
  if (!match) return null;
  const id = match[1].includes('~mv2') || !match[2]?.includes('~mv2') ? match[1] : match[2];
  return `https://static.wixstatic.com/media/${id}/v1/fill/w_${width},h_${height},al_c,q_80/file.jpg`;
}

/** True for pictures the owner uploaded to Wix; Wix's built-in stock pictures have ids without "~mv2". */
export function isOwnUpload(uri: string | null | undefined): boolean {
  return !!uri && /~mv2/.test(uri);
}
