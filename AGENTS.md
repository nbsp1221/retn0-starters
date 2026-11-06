# Repository Guidance

## Repository purpose

- This repository manages independent, copyable project baselines. It is not
  itself an application or a project template that must be runnable as one
  unit.
- Evaluate each baseline as it will exist after its directory is copied to a
  new repository root. Do not require repository-level CI, workspace
  orchestration, or shared runtime commands unless explicitly requested.

## Baseline design principle

- Prefer the ordinary, widely recognized convention as the default.
- Evaluate tooling against the expected range of projects derived from a
  baseline, not only against the baseline's deliberately small example. A lack
  of current example features is not evidence that a tool is unnecessary.
- Keep established tooling when its cost is low for small projects, it remains
  useful as projects grow, and removing it would create a predictable migration
  later. Judge dependencies by their cost and constraints across that range,
  not by dependency count alone.
- Omit nonstandard scripts, dependencies, configuration, abstractions, and
  workflows by default. Plausible usefulness is not sufficient reason to add
  them.
- Depart from convention only after identifying a concrete, recurring need and
  evidence that the conventional approach is insufficient. Keep an accepted
  exception as narrow as possible.
- Treat existing implementation and local documentation as choices to audit,
  not as evidence that those choices belong in the baseline.
- When reviewing a choice, first determine the common practice from
  authoritative documentation and representative ecosystem usage. Classify it
  as a common default, a justified exception, or something to remove.
- When evidence is unclear, choose the smaller and more conventional baseline.

## Intentional choices

- The centralized `@retn0` lint and formatter configurations are intentional.
- The declared Node.js engine policy is intentional. Do not flag either choice
  merely for being project-specific.
- CAC, Vitest, and tsdown are intentional baseline tooling. They impose little
  cost on small derived projects and provide a supported path as those projects
  grow.
