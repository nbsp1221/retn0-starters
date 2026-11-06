import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';

// Runs the CLI entry from source (Node native TypeScript) so that `pnpm test`
// stays independent of the build output.
const cliEntry = fileURLToPath(new URL('../src/index.ts', import.meta.url));

function runCli(args: string[]): { stdout: string; stderr: string; status: number } {
  try {
    const stdout = execFileSync(process.execPath, [cliEntry, ...args], {
      encoding: 'utf8',
    });
    return { stdout: stdout.trim(), stderr: '', status: 0 };
  } catch (error) {
    const err = error as { status?: number; stdout?: string; stderr?: string };
    return {
      stdout: (err.stdout ?? '').trim(),
      stderr: (err.stderr ?? '').trim(),
      status: err.status ?? -1,
    };
  }
}

describe('CLI entry', () => {
  it('prints a greeting for the given name', () => {
    expect(runCli(['Codex'])).toEqual({ stdout: 'Hello, Codex.', stderr: '', status: 0 });
  });

  it('supports --excited', () => {
    expect(runCli(['Codex', '--excited'])).toEqual({
      stdout: 'Hello, Codex!',
      stderr: '',
      status: 0,
    });
  });

  it('prints usage and exits 0 on --help', () => {
    const result = runCli(['--help']);
    expect(result.status).toBe(0);
    expect(result.stdout).toContain('Usage:');
  });

  it('prints the version and exits 0 on --version', () => {
    const result = runCli(['--version']);
    expect(result.status).toBe(0);
    expect(result.stdout).toContain('0.1.0');
  });

  it('fails on an unknown option', () => {
    const result = runCli(['--exciteed']);
    expect(result.status).not.toBe(0);
    expect(result.stderr).toContain('Unknown option');
  });
});
