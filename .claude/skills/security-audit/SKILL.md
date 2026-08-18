---
name: security-audit
description: Audits code for security vulnerabilities — injection, auth gaps, secrets, unsafe deserialization. Use for security-focused reviews, not routine code review.
---

Audit the given scope (diff, file, or directory) for:

1. Injection — SQL, command, template, path traversal
2. AuthN/AuthZ — missing checks, privilege escalation paths, insecure defaults
3. Secrets — hardcoded credentials, tokens, keys
4. Unsafe deserialization or unsanitized `eval`/`exec`-style calls
5. Dependency risk — recently added packages with known CVEs

Rate each finding (critical / high / medium / low) and give a concrete fix.
Don't flag purely stylistic issues here — that's `code-review`'s job.
