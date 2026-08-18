# Code review checklist

## Correctness
- [ ] Edge cases handled (empty input, null/undefined, boundary values)
- [ ] No off-by-one errors in loops or slicing
- [ ] Async code handles rejected promises

## Security
- [ ] User input validated/sanitized before use in queries or shell commands
- [ ] No secrets or credentials in the diff
- [ ] Auth checks present on new endpoints

## Maintainability
- [ ] Names describe intent, not implementation
- [ ] No copy-pasted logic that should be a shared function
- [ ] New public functions have a docstring or comment explaining *why*

## Tests
- [ ] New behavior has a test
- [ ] Tests assert on behavior, not implementation details
