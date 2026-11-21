import { useCallback } from 'react'
import gsap from 'gsap'
import { Slide } from '@/deck/Slide'
import { SlideHeader, Footnote } from '@/deck/chrome'
import PipelineFlow from '@/visuals/PipelineFlow'

export function SlidePipeline() {
  const build = useCallback((root: HTMLElement) => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    const steps = root.querySelectorAll('[data-step]')
    steps.forEach((step, idx) => {
      const card = step.querySelector('[data-card]')
      const num = step.querySelector('[data-step-num]')
      const pulse = step.querySelector('[data-pulse]')

      tl.from([num, card], {
        opacity: 0,
        y: 20,
        duration: 0.4,
      }, idx === 0 ? 0 : '-=0.15')

      if (pulse) {
        tl.from(pulse, {
          scaleX: 0,
          duration: 0.25,
          ease: 'power2.inOut',
        }, '-=0.1')
      }
    })
    return tl
  }, [])

  return (
    <Slide
      id="pipeline"
      tone="paper"
      animate={build}>
      <SlideHeader
        index="06"
        section="funcionamento proposto"
        title="Fluxo de análise"
        lead="A fonte preferencial é o SIGEFES, com a API do Portal da Transparência federal como alternativa. A base tratada será armazenada para reproduzir a análise."
      />

      <div className="mt-8 flex flex-1 flex-col justify-center">
        <PipelineFlow />
      </div>

      <Footnote source="Anteprojeto, Metodologia">Figura 1. Etapas do fluxo de análise.</Footnote>
    </Slide>
  )
}
