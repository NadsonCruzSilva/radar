import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import Reveal, { deckApi, type DeckApi } from './reveal'
import { DeckContext } from './context'
import { playEnterTransition } from './enterTransition'
import gsap from 'gsap'
import 'reveal.js/reveal.css'

type DeckProps = {
  ids: string[]
  children: ReactNode
  chrome?: ReactNode
}

function prefersReducedMotion(): boolean {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

export function Deck({ ids, children, chrome }: DeckProps) {
  const slidesRef = useRef<HTMLDivElement>(null)
  const [reveal, setReveal] = useState<DeckApi | null>(null)
  const [index, setIndex] = useState(0)
  const [overview, setOverview] = useState(false)
  const previousIndex = useRef(0)
  const paused = prefersReducedMotion()

  useEffect(() => {
    const slides = slidesRef.current
    if (!slides) return
    let cancelled = false

    const updateIndex = () => {
      const sections = Array.from(slides.children) as HTMLElement[]
      const present = sections.findIndex((el) => el.classList.contains('present'))
      const current = sections[present >= 0 ? present : 0]
      const next = present >= 0 ? present : 0
      if (current && !paused) playEnterTransition(current, next - previousIndex.current)
      previousIndex.current = next
      setIndex(next)
    }

    Reveal.initialize({
      hash: true,
      history: false,
      controls: false,
      progress: false,
      center: false,
      width: 1920,
      height: 1080,
      margin: 0,
      minScale: 0.2,
      maxScale: 1,
      transition: paused ? 'none' : 'slide',
      transitionSpeed: 'default',
      backgroundTransition: paused ? 'none' : 'fade',
      keyboard: true,
      touch: true,
      overview: true,
      embedded: false,
    }).then(() => {
      if (cancelled) return
      const api = deckApi()
      api.on('slidechanged', updateIndex)
      api.on('overviewshown', () => {
        setOverview(true)
        const stages = slides.querySelectorAll<HTMLElement>('.stage')
        gsap.killTweensOf(stages)
        gsap.set(stages, { clearProps: 'opacity,filter,transform,clipPath' })
      })
      api.on('overviewhidden', () => setOverview(false))
      setReveal(api)
      updateIndex()
    })

    return () => {
      cancelled = true
      void Reveal.destroy()
    }
    // deck é montado uma única vez
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const indexOf = useCallback((id: string) => ids.indexOf(id), [ids])

  return (
    <DeckContext.Provider value={{ index, total: ids.length, paused, overview, reveal, indexOf }}>
      <div className="reveal">
        <div className="slides" ref={slidesRef}>
          {children}
        </div>
      </div>
      {chrome}
    </DeckContext.Provider>
  )
}
