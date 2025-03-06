const MIMETYPE = "text/plain";

export const copyToClipboard = async (content: string): Promise<void> => {
  try {
    if (navigator.clipboard.write) {
      const clipboardItem = new ClipboardItem({
        [MIMETYPE]: new Blob([content], { type: MIMETYPE }),
      });
      await navigator.clipboard.write([clipboardItem]);
      return;
    }
    await navigator.clipboard.writeText(content);
  } catch (error) {
    console.error("Failed to copy to clipboard:", error);
    throw new Error("Failed to copy content to clipboard");
  }
};
