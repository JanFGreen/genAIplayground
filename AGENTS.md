# Repository Guidelines

This is a GenAI playground: a collection of experiments, prototypes, and demos exploring generative AI. Contributions should stay small, self-contained, and easy to run.

## Project Structure & Module Organization

The repository is currently empty and will grow by experiment. When adding work:

- Place each experiment in its own top-level directory, e.g. `experiments/prompt-tuning/`.
- Keep source code under `src/` within each experiment; assets (prompts, sample data, generated outputs) under `assets/` or `data/`.
- Put tests next to the code they cover or in a `tests/` directory per experiment.
- Include a short `README.md` in every experiment directory explaining what it does and how to run it.

## Build, Test, and Development Commands

Commands depend on the experiment's stack — document them in that experiment's `README.md`. Common patterns:

- `npm install && npm run dev` — install deps and start a JS/TS project locally.
- `npm test` or `pytest` — run the test suite.
- `npm run build` — produce a production build (TypeScript/Next.js projects).

Always verify the documented commands work before submitting.

## Coding Style & Naming Conventions

- Use 2-space indentation for JavaScript/TypeScript/JSON; 4 spaces for Python.
- Prefer TypeScript for new JS code; type all public functions.
- Name files `kebab-case.ts` for modules, `PascalCase.tsx` for React components, `snake_case.py` for Python.
- Run the project's configured formatter/linter (e.g. `npm run lint`, `ruff check .`) before committing. If none exists, follow the style of nearby code.

## Testing Guidelines

- Use the stack's standard framework: Vitest/Jest for TypeScript, pytest for Python.
- Name test files `*.test.ts` / `test_*.py`; keep one behavior per test.
- New features need tests; bug fixes need a failing test that reproduces the bug first.

## Commit & Pull Request Guidelines

- No git history exists yet; use Conventional Commits (`feat:`, `fix:`, `docs:`, `chore:`) going forward.
- Keep commits atomic — one logical change each.
- PRs should include a short description, reproduction/usage steps for new experiments, and screenshots for UI changes. Link related issues.

## Security & Configuration Tips

- Never commit API keys or secrets. Use `.env` files (git-ignored) and commit a `.env.example` with placeholder values.
- Sanitize prompts/outputs before committing sample data that may contain personal information.
