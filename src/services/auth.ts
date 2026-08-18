// Auth service placeholder — wire up to your real auth provider.

export interface Session {
  userId: string;
  expiresAt: number;
}

export function isSessionValid(session: Session | null): session is Session {
  return session !== null && session.expiresAt > Date.now();
}
