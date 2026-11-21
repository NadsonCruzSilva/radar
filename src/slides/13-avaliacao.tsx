import { useCallback } from 'react'
import gsap from 'gsap'
import { Slide } from '@/deck/Slide'
import { SlideHeader, Footnote } from '@/deck/chrome'
import EvaluationGrid from '@/visuals/EvaluationGrid'

export function SlideEvaluation() {
  const build = useCallback((root: HTMLElement) => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })
    tl.from(root.querySelector('[data-sample="ranking"]'), { opacity: 0, duration: 0.35 })
      .from(root.querySelector('[data-sample="controle"]'), { opacity: 0, duration: 0.35 }, '+=0.1')
      .from(root.querySelectorAll('[data-criterion]'), { opacity: 0, duration: 0.3, stagger: 0.12 }, '+=0.1')
    return tl
  }, [])

  return (
    <Slide
      id="avaliacao"
      tone="paper"
      animate={build}>
      <SlideHeader
        index="13"
        section="avaliação"
        title="Protocolo de avaliação"
        lead="O estudo de caso documental examinará 40 registros de um mesmo exercício: os 30 primeiros do ranking e 10 sorteados fora desse grupo."
      />

      <div className="mt-8 flex flex-1 items-start">
        <EvaluationGrid />
      </div>

      <Footnote source="Anteprojeto, seção Avaliação">Figura 7. Composição da amostra e critérios de análise.</Footnote>
    </Slide>
  )
}
