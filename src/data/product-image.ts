/** Raster paths under /public — SVG catalog illustrations skip display watermark. */
export function isRasterPublicImage(src: string): boolean {
  return /\.(jpe?g|png|webp)$/i.test(src.split('?')[0] ?? '');
}

/** Files already watermarked by publish scripts (see scripts/watermark/lib.mjs). */
const BAKED_WATERMARK_PREFIXES = [
  '/images/home/',
  '/images/products/family-sections/',
] as const;

function isPunchPublishedProductImage(path: string): boolean {
  return (
    path.startsWith('/images/products/catalog/') ||
    path.startsWith('/images/products/details/')
  );
}

export function hasBakedProductWatermark(
  src: string,
  options?: { catalogGroupId?: string },
): boolean {
  const path = src.split('?')[0] ?? '';
  if (BAKED_WATERMARK_PREFIXES.some((prefix) => path.startsWith(prefix))) return true;
  // Punch retouch publish bakes watermark into catalog + configuration images.
  if (
    options?.catalogGroupId === 'punch-components' &&
    isPunchPublishedProductImage(path)
  ) {
    return true;
  }
  return false;
}

/** CSS overlay only where the file on disk has no baked watermark. */
export function shouldShowDisplayWatermark(
  src: string,
  options?: { catalogGroupId?: string },
): boolean {
  return isRasterPublicImage(src) && !hasBakedProductWatermark(src, options);
}
