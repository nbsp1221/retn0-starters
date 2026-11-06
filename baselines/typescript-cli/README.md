# TypeScript CLI baseline

A minimal, runnable baseline for a TypeScript CLI package.
Copy this directory as a complete project, then adapt the name and example code.

## Requirements

- Node.js `^24.0.0 || >=26.0.0`
- pnpm (version pinned by `packageManager` in `package.json`)

## Getting started

Run these commands from the copied project root:

```bash
pnpm install
node src/index.ts Codex
# Hello, Codex.

pnpm check
```

Node.js runs the TypeScript source directly.
To see the available CLI options:

```bash
node src/index.ts --help
```

## Customize

1. Update `name`, `description`, and the `bin` command name in `package.json`.
2. Change the name passed to `cac('typescript-cli')` in `src/cli.ts`, then replace the greeting command and options with your CLI's behavior.
3. Update the tests in `tests/` for the new behavior, including the version assertion if you change the package version.
4. Replace this README's baseline instructions with your project's description, installation steps, and usage examples.

Keep the `bin` command name and the name passed to `cac` consistent.
Run `pnpm check` after making changes.

## Commands

| Command             | Purpose                                               |
| ------------------- | ----------------------------------------------------- |
| `pnpm check`        | Check formatting, lint, types, and tests, then build. |
| `pnpm build`        | Produce the distributable `dist/` output.             |
| `pnpm test`         | Run the test suite once and exit.                     |
| `pnpm test:watch`   | Run tests in watch mode.                              |
| `pnpm typecheck`    | Report type errors without modifying files.           |
| `pnpm lint`         | Report lint violations without modifying files.       |
| `pnpm lint:fix`     | Apply automatically fixable lint changes.             |
| `pnpm format`       | Format files in place.                                |
| `pnpm format:check` | Check formatting without modifying files.             |

## Tooling

CAC handles CLI arguments, tsdown builds the package, and Vitest runs the tests.
Linting (Oxlint + ESLint) and formatting (Oxfmt) use the shared [`@retn0` configurations](https://github.com/nbsp1221/retn0-lint-configs).
