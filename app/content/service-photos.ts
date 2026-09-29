// Fallback photos for services whose Wix listing has no photo of its own (or only Wix's generic stock picture).
// Rules run top to bottom; the first match wins, and a hash of the service id picks between its photos.

const RULES: [RegExp, string[]][] = [
  [/take ?down|comb out|reattach|repair/i, ['locs-top-view', 'locs-twisted-top-view']],
  [/starter|2 strand start|two strand start|half shaved/i, ['starter-locs-side-view', 'locs-twists-top-view']],
  [/goddess|butterfly|faux|invisible|nu locs|soft locs|individual locs|crochet loose|artificial/i, ['long-locs-ponytail', 'locs-updo-purple']],
  [/instant|extension/i, ['long-locs-ponytail', 'locs-twisted-top-view']],
  [/micro/i, ['locs-twists-top-view', 'locs-top-view']],
  [/interlock|retwist|palm|\bloc\b|\blocs\b/i, ['locs-top-view', 'locs-twisted-top-view', 'locs-updo-purple']],
  [/silk|wand|curl|flexi|perm rod|thermal|bantu|pipe cleaner/i, ['curls-clips-install', 'curls-highlights-updo', 'bantu-curls-top-view']],
  [/twist/i, ['two-strand-twists', 'locs-twists-top-view']],
  [/\bman\b|\bmen\b|bund/i, ['braids-men-top-view', 'braids-men-cross-parts']],
  [/feed|lemonade|straight back|zig zag|stitch|tribal|fulani|cornrow|plait|braid/i, ['feed-in-braids-long', 'box-braids-long', 'cornrow-design-top-view', 'kids-stitch-braids']],
  [/consult/i, ['results-collage']],
];

const DEFAULT = ['locs-top-view', 'locs-twisted-top-view'];

const hash = (s: string) => [...s].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7);

export function fallbackPhoto(name: string, category: string, id: string): string {
  const text = `${name} ${category}`;
  const files = RULES.find(([re]) => re.test(text))?.[1] ?? DEFAULT;
  return files[hash(id) % files.length];
}

export const serviceThumb = (file: string) => `/images/jae/thumb/${file}.jpg`;
export const servicePhoto = (file: string) => `/images/jae/${file}.jpg`;
