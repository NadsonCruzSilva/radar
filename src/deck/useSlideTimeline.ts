import { useEffect, useRef, type DependencyList, type RefObject } from 'react'
import gsap from 'gsap'
import { useDeck } from '@/deck/context'

type TimelineFactory = (root: HTMLElement) => gsap.core.Timeline | void

/**
 * Dispara a timeline de conteúdo de um slide somente quando ele está ativo.
 * A entrada do slide (transição) é responsabilidade do Deck, em
 * enterTransition.ts, para acontecer antes do primeiro paint.
 */
export function useSlideTimeline(
  rootRef: RefObject<HTMLElement | null>,
  active: boolean,
  factory: TimelineFactory,
  deps: DependencyList = [],
) {
  const { paused, overview } = useDeck()
  const factoryRef = useRef(factory)
  factoryRef.current = factory

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    if (paused) {
      gsap.set(root.querySelectorAll('[data-anim]'), { clearProps: 'all', opacity: 1, x: 0, y: 0 })
      return
    }

    if (!active || overview) return

    const ctx = gsap.context(() => {
      const tl = factoryRef.current(root)
      if (tl && typeof tl.play === 'function') {
        tl.delay(0.12)
        tl.play()
        return () => tl.kill()
      }
    }, root)

    return () => ctx.revert()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, paused, overview, ...deps])
}
