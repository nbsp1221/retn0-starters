# retn0-starters

Independent project baselines to copy into new repositories and adapt.
Each directory under `baselines/` is a complete project with its own dependencies, configuration, checks, and CI workflow.

## Baselines

- [TypeScript CLI](baselines/typescript-cli/README.md): a Node.js CLI with CAC, tsdown, Vitest, and shared `@retn0` lint and formatter configurations.

## Start a project

Check the baseline's README for its Node.js and package manager requirements.
From a clean checkout of this repository, copy the complete baseline directory, including hidden files, to a destination that does not already exist:

```bash
cp -R baselines/typescript-cli my-cli
cd my-cli
pnpm install
pnpm check
```

Run project commands from the copied directory.
Update the package name, executable name, CLI name, and documentation for the new project, then replace the example code and tests.

## Baseline principles

- Prefer familiar ecosystem conventions and minimal project-specific configuration.
- Keep tooling that supports both small projects and their expected growth.
- Keep each baseline independent so it works when copied to a new repository root.
