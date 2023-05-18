async function setupServerMocks() {
  if (typeof window === 'undefined') {
    const { server } = await import('./server');
    server.listen();
  }
}

setupServerMocks();

export {};
