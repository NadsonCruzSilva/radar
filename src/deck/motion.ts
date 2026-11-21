export type RevealTransition = 'none' | 'fade' | 'slide' | 'convex' | 'concave' | 'zoom'
export type EntryMotion = 'lift' | 'drift' | 'focus' | 'reveal' | 'iris' | 'sweep' | 'morph'

type Motion = { transition: RevealTransition; entry: EntryMotion; speed?: 'fast' | 'default' | 'slow' }

// Divisórias têm mais presença; slides de conteúdo alternam entradas discretas.
export const slideMotion: Record<string, Motion> = {
  capa: { transition: 'fade', entry: 'focus' },
  'parte-1': { transition: 'zoom', entry: 'morph' },
  problema: { transition: 'slide', entry: 'drift' },
  delimitacao: { transition: 'fade', entry: 'reveal' },
  'parte-2': { transition: 'convex', entry: 'lift' },
  pipeline: { transition: 'slide', entry: 'sweep' },
  atributos: { transition: 'fade', entry: 'lift' },
  deteccao: { transition: 'concave', entry: 'focus' },
  explicacao: { transition: 'slide', entry: 'drift' },
  contexto: { transition: 'fade', entry: 'reveal' },
  interface: { transition: 'fade', entry: 'iris' },
  'parte-3': { transition: 'convex', entry: 'morph' },
  avaliacao: { transition: 'slide', entry: 'lift' },
  limites: { transition: 'fade', entry: 'drift' },
  cronograma: { transition: 'fade', entry: 'sweep' },
  obrigado: { transition: 'fade', entry: 'sweep' },
}
