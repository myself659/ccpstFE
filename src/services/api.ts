// Thin HTTP client wrapper. Replace with your actual base URL / auth handling.

export async function apiRequest<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${process.env.API_BASE_URL ?? ""}${path}`, init);
  if (!res.ok) {
    throw new Error(`API request failed: ${res.status} ${res.statusText}`);
  }
  return res.json() as Promise<T>;
}
