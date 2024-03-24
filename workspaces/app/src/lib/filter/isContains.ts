type Params = {
  query: string;
  target: string;
};

// ひらがな・カタカナ・半角・全角を区別せずに文字列が含まれているかを調べる
export function isContains({ query, target }: Params): boolean {
  const normalizedQuery = query.normalize('NFKC');
  const normalizedTarget = target.normalize('NFKC');
  const kanaQuery = hiraToKana(normalizedQuery);
  const kanaTarget = hiraToKana(normalizedTarget);
  return kanaTarget.includes(kanaQuery);
}

function hiraToKana(str: string): string {
  return str.replace(/[\u3041-\u3096]/g, function (match) {
    const chr = match.charCodeAt(0) + 0x60;
    return String.fromCharCode(chr);
  });
}
