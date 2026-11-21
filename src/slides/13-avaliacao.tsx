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
        lead="A amostra reúne 30 alertas do topo do ranking e 10 registros de controle sorteados fora dele. Cada um é conferido manualmente e registrado em diário de coleta."
      />

      <div className="mt-8 flex flex-1 items-start">
        <EvaluationGrid />
      </div>

      <Footnote source="Protocolo do anteprojeto. Referencial metodológico em Hevner et al. (2004) e Peffers et al. (2007)">Figura 7. Composição da amostra e critérios de análise.</Footnote>
    </Slide>
  )
}
