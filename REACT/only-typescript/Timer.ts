async function retry<T>(
  fn: () => Promise<T> | T,
  retries: number,
  retryIntervalMs: number
): Promise<T> {
  try {
    return await fn();
  } catch (error) {
    if (retries <= 0) {
      throw error;
    }
    await sleep(retryIntervalMs);
    return retry(fn, retries - 1, retryIntervalMs);
  }
}

const sleep = (ms = 0) => new Promise((resolve) => setTimeout(resolve, ms));

export { retry, sleep }