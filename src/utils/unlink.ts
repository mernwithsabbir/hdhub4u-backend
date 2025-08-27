import fs from "fs/promises";

export async function safeUnlink(path: string | undefined) {
  if (!path) return;
  try {
    await fs.unlink(path);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    if (err.code !== "ENOENT") throw err; // শুধু ফাইল না থাকলে ignore করো
  }
}
