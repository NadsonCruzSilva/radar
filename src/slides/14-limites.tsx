import { useCallback } from 'react'
import gsap from 'gsap'
import { Slide } from '@/deck/Slide'
import { SlideHeader, Footnote } from '@/deck/chrome'
import RiskList from '@/visuals/RiskList'

export function SlideLimits() {
  const build = useCallback((root: HTMLElement) => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })
    tl.from(root.querySelectorAll('[data-card]'), {
      opacity: 0,
      y: 26,
      duration: 0.5,
      stagger: 0.1,
    })
    return tl
  }, [])

  return (
    <Slide
      id="limites"
      tone="white"
      animate={build}>
      <SlideHeader
        index="14"
        section="viabilidade"
        title="Limites e riscos"
        lead="Assumir os limites é parte do método: cada risco tem origem declarada, e cada decisão evita aumentar a complexidade sem necessidade."
      />

      <div className="mt-8 flex flex-1 items-start">
        <RiskList />
      </div>

      <Footnote source="Anteprojeto, seção de riscos e mitigação" />
    </Slide>
  )
}
