import { useCallback, useRef, type ReactNode } from 'react'
import { useDeck } from './context'
import { useSlideTimeline } from './useSlideTimeline'
import { slideMotion, type EntryMotion, type RevealTransition } from './motion'

type SlideTone = 'paper' | 'white' | 'green' | 'red'
export type SlideTransitionSpeed = 'default' | 'fast' | 'slow'

const TONE_BACKGROUND: Record<SlideTone, string> = {
  paper: '#F6F2E8',
  white: '#FFFCF5',
  green: '#123D2B',
  red: '#681E25',
}

type SlideProps = {
  id: string
  tone?: SlideTone
  pad?: boolean
  children: ReactNode
  className?: string
  animate?: (root: HTMLElement) => void
  transition?: RevealTransition
  entry?: EntryMotion
  backgroundTransition?: RevealTransition
  transitionSpeed?: SlideTransitionSpeed
}

export function Slide({
  id,
  tone = 'paper',
  pad = true,
  children,
  className = '',
  animate,
  transition,
  entry,
  backgroundTransition,
  transitionSpeed,
}: SlideProps) {
  const { indexOf, index, paused } = useDeck()
  const rootRef = useRef<HTMLDivElement>(null)
  const position = indexOf(id)
  const active = position >= 0 && index === position
  const motion = slideMotion[id]

  const build = useCallback(
    (root: HTMLElement) => (animate ? animate(root) : undefined),
    [animate],
  )

  useSlideTimeline(rootRef, active, build)

  return (
    <section
      id={id}
      className={`slide-${tone}`}
      data-slide-id={id}
      aria-label={id}
      data-background-color={TONE_BACKGROUND[tone]}
      data-transition={paused ? 'none' : transition ?? motion?.transition}
      data-entry={entry ?? motion?.entry}
      data-background-transition={paused ? 'none' : backgroundTransition ?? 'fade'}
      data-transition-speed={transitionSpeed ?? motion?.speed}
    >
      <div ref={rootRef} className={`stage ${pad ? 'stage-pad' : ''} ${className}`}>
        <span className="ifes-band" aria-hidden="true" />
        {children}
      </div>
    </section>
  )
}
