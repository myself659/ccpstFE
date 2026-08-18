// Database client placeholder — replace with your real client
// (Prisma, Drizzle, node-postgres, etc).

export interface DbClient {
  query<T>(sql: string, params?: unknown[]): Promise<T[]>;
}

export function createDbClient(_connectionString: string): DbClient {
  throw new Error("createDbClient not implemented — wire up your real client");
}
