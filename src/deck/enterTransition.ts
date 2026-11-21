import gsap from 'gsap'
import type { EntryMotion } from './motion'

const DURATION = 0.62
const CLEAR = 'opacity,filter,transform,clipPath'

/** A seção já está visível quando Reveal emite slidechanged. */
export function playEnterTransition(section: HTMLElement, direction: number) {
  const stage = section.querySelector<HTMLElement>('.stage')
  if (!stage) return

  gsap.killTweensOf(stage)
  gsap.set(stage, { clearProps: CLEAR })

  const sign = direction < 0 ? -1 : 1
  const entry = section.dataset.entry as EntryMotion | undefined
  const from: gsap.TweenVars = { opacity: 0 }
  const to: gsap.TweenVars = { opacity: 1, duration: DURATION, ease: 'power3.out', clearProps: CLEAR }

  switch (entry) {
    case 'drift':
      from.x = 70 * sign
      from.rotateY = 2 * sign
      to.x = 0
      to.rotateY = 0
      break
    case 'lift':
      from.y = 48
      to.y = 0
      break
    case 'focus':
      from.scale = 1.035
      from.filter = 'blur(9px)'
      to.scale = 1
      to.filter = 'blur(0px)'
      break
    case 'morph':
      from.scale = 0.91
      from.y = 32
      from.filter = 'blur(10px)'
      to.scale = 1
      to.y = 0
      to.filter = 'blur(0px)'
      to.duration = 0.72
      break
    case 'iris':
      from.clipPath = 'circle(8% at 50% 50%)'
      to.clipPath = 'circle(75% at 50% 50%)'
      to.duration = 0.7
      break
    case 'sweep':
      from.clipPath = sign > 0 ? 'inset(0 100% 0 0)' : 'inset(0 0 0 100%)'
      to.clipPath = 'inset(0 0% 0 0%)'
      to.ease = 'power2.inOut'
      break
    case 'reveal':
      from.clipPath = sign > 0 ? 'inset(0 0 100% 0)' : 'inset(100% 0 0 0)'
      to.clipPath = 'inset(0 0 0% 0)'
      break
    default:
      from.y = 24
      to.y = 0
  }

  gsap.fromTo(stage, from, to)
}
