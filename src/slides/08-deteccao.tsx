import { useCallback } from 'react'
import gsap from 'gsap'
import { Slide } from '@/deck/Slide'
import { SlideHeader, Footnote } from '@/deck/chrome'
import ForestDiagram from '@/visuals/ForestDiagram'

export function SlideDetection() {
  const build = useCallback((root: HTMLElement) => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })
    tl.from(root.querySelectorAll('[data-tree-edge]'), {
      opacity: 0,
      scaleY: 0,
      transformOrigin: 'top',
      duration: 0.3,
      stagger: 0.01,
    }).from(
      root.querySelectorAll('[data-tree-node]'),
      { scale: 0, transformOrigin: '50% 50%', opacity: 0, duration: 0.3, stagger: 0.01 },
      '-=0.5',
    )
    return tl
  }, [])

  return (
    <Slide
      id="deteccao"
      tone="paper"
      animate={build}>
      <SlideHeader
        index="08"
        section="detecção"
        title="Detecção com Isolation Forest"
        lead="O modelo usa poucos cortes para isolar registros atípicos. A prioridade de inspeção combina a pontuação de anomalia com o impacto financeiro."
      />

      <div className="mt-8 flex flex-1 items-center">
        <ForestDiagram />
      </div>

      <Footnote source="Liu, Ting e Zhou (2008)">Figura 3. Exemplo de isolamento em árvores.</Footnote>
    </Slide>
  )
}
