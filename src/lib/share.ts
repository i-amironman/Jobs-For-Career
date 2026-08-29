/** Share or copy text; ignores user canceling the native share sheet. */
export async function shareOrCopy(title: string, text: string): Promise<void> {
  try {
    if (navigator.share) {
      await navigator.share({ title, text });
      return;
    }
    await navigator.clipboard.writeText(text);
  } catch (err) {
    if (err instanceof DOMException && err.name === 'AbortError') return;
    if (err instanceof Error && err.name === 'AbortError') return;
    throw err;
  }
}
