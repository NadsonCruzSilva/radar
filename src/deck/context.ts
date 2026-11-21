import { createContext, useContext } from 'react'
import type { DeckApi } from './reveal'

export type DeckState = {
  index: number
  total: number
  paused: boolean
  overview: boolean
  reveal: DeckApi | null
  indexOf: (id: string) => number
}

export const DeckContext = createContext<DeckState | null>(null)

export function useDeck(): DeckState {
  const ctx = useContext(DeckContext)
  if (!ctx) throw new Error('useDeck precisa estar dentro de <Deck>')
  return ctx
}
