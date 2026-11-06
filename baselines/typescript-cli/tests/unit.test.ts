import { describe, expect, it } from 'vitest';
import { sayHello } from '../src/cli.ts';

describe('sayHello', () => {
  it('greets the given name', () => {
    expect(sayHello({ name: 'Codex', punctuation: '.' })).toBe('Hello, Codex.');
  });

  it('falls back to world for empty names', () => {
    expect(sayHello({ name: '   ', punctuation: '!' })).toBe('Hello, world!');
  });
});
