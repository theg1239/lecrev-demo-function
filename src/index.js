export async function handler(event, context) {
  const now = new Date().toISOString();

  return {
    ok: true,
    message: "Hello from the Lecrev demo repo ",
    repo: "theg1239/lecrev-demo-function",
    event,
    runtime: {
      region: context?.region ?? null,
      hostId: context?.hostId ?? null,
      invokedAt: now
    }
  };
}
