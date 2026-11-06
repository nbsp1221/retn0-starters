import { type CAC, cac } from 'cac';
import pkg from '../package.json' with { type: 'json' };

export interface HelloOptions {
  name: string;
  punctuation: string;
}

export function sayHello(options: HelloOptions): string {
  const name = options.name.trim() || 'world';
  return `Hello, ${name}${options.punctuation}`;
}

export function createCli(): CAC {
  const cli = cac('typescript-cli');

  cli
    .command('[name]', 'Print a greeting')
    .option('--excited', 'Add an exclamation mark')
    .action((name: string | undefined, options: { excited?: boolean }) => {
      const punctuation = options.excited ? '!' : '.';
      process.stdout.write(sayHello({ name: name ?? 'world', punctuation }) + '\n');
    });

  cli.help().version(pkg.version);
  return cli;
}
