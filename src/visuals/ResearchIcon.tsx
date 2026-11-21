const paths = {
  valor: 'M3 20h18 M6 16v-4 M12 16V8 M18 16V4',
  concentracao: 'M4 5l14 7L4 19 M4 12h14 M4 5v0 M4 19v0 M18 12v0',
  repeticao: 'M5 8h14l-3-3 M19 8l-3 3 M19 16H5l3-3 M5 16l3 3',
  historico: 'M3 4v16h18 M6 15l4-3 4 2 6-8',
  coleta: 'M6 3h8l4 4v14H6z M14 3v5h4 M9 12h6 M9 16h6',
  tratamento: 'M3 5h18l-7 8v5l-4 2v-7z',
  atributos: 'M4 4h16v16H4z M4 9h16 M4 14h16 M9 4v16',
  deteccao: 'M21 21l-5-5 M18 11a7 7 0 1 1-14 0 7 7 0 1 1 14 0 M11 8v6 M8 11h6',
  contexto: 'M10 11l-3-4 M14 11l3-4 M12 14v4 M7 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0 M21 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0 M14 20a2 2 0 1 1-4 0 2 2 0 0 1 4 0 M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0',
  exploracao: 'M3 5h18v14H3z M3 9h18 M9 9v10 M12 16v-2 M15 16v-4 M18 16v-5',
}

export function ResearchIcon({ name, className }: { name: keyof typeof paths; className: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d={paths[name]} />
    </svg>
  )
}
