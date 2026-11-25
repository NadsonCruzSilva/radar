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
        title="Da informação ao alerta"
        lead="O Radar organiza os registros em uma sequência simples: encontra diferenças, explica os sinais e facilita a conferência."
      />

      <div className="mt-8 flex flex-1 flex-col justify-center">
        <PipelineFlow />
      </div>

      <Footnote source="Anteprojeto, Metodologia">Visão simplificada da experiência proposta.</Footnote>
    </Slide>
  )
}
