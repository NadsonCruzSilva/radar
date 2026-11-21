import Reveal from 'reveal.js'

type RevealModule = typeof Reveal

export type DeckEvent = {
  indexh: number
  indexv: number
  indexf: number
}

type RevealOn = (event: string, cb: (event?: DeckEvent) => void) => void

export type DeckApi = RevealModule & {
  on: RevealOn
  indexh: number
  indexv: number
}

export function deckApi(): DeckApi {
  return Reveal as unknown as DeckApi
}

export default Reveal
