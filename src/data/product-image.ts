/** Raster paths under /public — SVG catalog illustrations skip display watermark. */
export function isRasterPublicImage(src: string): boolean {
  return /\.(jpe?g|png|webp)$/i.test(src.split('?')[0] ?? '');
}

/** Infer catalog product id from public filename (catalog + details paths). */
export function productIdFromPublicImagePath(src: string): string | null {
  const path = src.split('?')[0] ?? '';
  const name = path.split('/').pop() ?? '';
  if (path.includes('/products/details/')) {
    const m = name.match(/^([a-z0-9]+(?:-[a-z0-9]+)*)--/);
    return m?.[1] ?? null;
  }
  if (path.includes('/products/catalog/')) {
    const m = name.match(/^([a-z0-9]+(?:-[a-z0-9]+)*)-20\d{2}-/);
    return m?.[1] ?? null;
  }
  return null;
}

/**
 * Site-wide display watermark (BrandedImage). Product files stay clean — no baked logo in PNG/JPG.
 */
export function shouldShowDisplayWatermark(src: string): boolean {
  return isRasterPublicImage(src);
}

/** @deprecated All rasters use CSS overlay; kept for callers passing options. */
export function hasBakedProductWatermark(_src: string): boolean {
  return false;
}
