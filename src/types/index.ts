// Shared types used across modules. Keep this to genuinely shared shapes —
// module-local types belong next to the module that owns them.

export interface ApiResponse<T> {
  data: T;
  error?: string;
}
