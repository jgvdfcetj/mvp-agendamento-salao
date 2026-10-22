
import { describe, it, expect } from 'vitest';
import { existsSync, readFileSync } from 'node:fs';

describe('MVP de Agendamento do Salão', () => {
  it('deve possuir os arquivos principais', () => {
    expect(existsSync('index.html')).toBe(true);
    expect(existsSync('agendamentos.html')).toBe(true);
    expect(existsSync('resultado.html')).toBe(true);
    expect(existsSync('style.css')).toBe(true);
  });

  it('deve apresentar o conteúdo da página inicial', () => {
    const html = readFileSync('index.html', 'utf8');

    expect(html.length).toBeGreaterThan(0);
    expect(html).toContain('<html');
  });

  it('deve ter um formulário de agendamento', () => {
    const html = readFileSync('agendamentos.html', 'utf8');

    expect(html).toContain('<form');
  });
});
