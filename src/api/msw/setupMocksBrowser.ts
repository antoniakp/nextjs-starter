export async function setupBrowserMocks() {
  const { worker } = await import('./browser');
  worker.start();
}
