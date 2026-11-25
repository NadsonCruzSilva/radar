import { useCallback } from 'react'
import gsap from 'gsap'
import { Slide } from '@/deck/Slide'
import { SlideHeader, Footnote } from '@/deck/chrome'
import EvaluationGrid from '@/visuals/EvaluationGrid'

export function SlideEvaluation() {
  const build = useCallback((root: HTMLElement) => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })
    tl.from(root.querySelectorAll('[data-criterion]'), { opacity: 0, duration: 0.3, stagger: 0.12 })
    return tl
  }, [])

  return (
    <Slide
      id="avaliacao"
      tone="paper"
      animate={build}>
      <SlideHeader
        index="10"
        section="avaliação"
        title="Avaliação dos alertas"
        lead="Estudo de caso documental com 40 registros de um mesmo exercício financeiro."
      />

      <div className="mt-8 flex flex-1 items-start">
        <EvaluationGrid />
      </div>

      <Footnote source="Anteprojeto, seção Avaliação">Figura 7. Composição da amostra e critérios de análise.</Footnote>
    </Slide>
  )
}
