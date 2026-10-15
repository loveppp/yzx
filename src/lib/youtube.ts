/** Parse a YouTube watch / share / embed URL into an 11-char video id. */
export function parseYoutubeVideoId(input: string | undefined): string | null {
  if (!input?.trim()) return null;
  const raw = input.trim();
  try {
    const url = raw.startsWith('http') ? new URL(raw) : new URL(`https://${raw}`);
    const host = url.hostname.replace(/^www\./, '');
    if (host === 'youtu.be') {
      const id = url.pathname.slice(1).split('/')[0];
      return id.length >= 11 ? id.slice(0, 11) : id || null;
    }
    if (host === 'youtube.com' || host === 'm.youtube.com') {
      const v = url.searchParams.get('v');
      if (v) return v.slice(0, 11);
      const embed = url.pathname.match(/\/embed\/([^/?]+)/);
      if (embed) return embed[1].slice(0, 11);
      const shorts = url.pathname.match(/\/shorts\/([^/?]+)/);
      if (shorts) return shorts[1].slice(0, 11);
    }
  } catch {
    if (/^[\w-]{11}$/.test(raw)) return raw;
  }
  return null;
}

export function factoryYoutubeVideoId(): string | null {
  return parseYoutubeVideoId(
    import.meta.env.PUBLIC_FACTORY_YOUTUBE_URL || 'https://www.youtube.com/watch?v=UEfZsKnCsBg'
  );
}
