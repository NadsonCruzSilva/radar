import { useCallback } from 'react'
import gsap from 'gsap'
import { Slide } from '@/deck/Slide'
import { SlideHeader, Footnote } from '@/deck/chrome'
import FeatureMatrix from '@/visuals/FeatureMatrix'

export function SlideFeatures() {
  const build = useCallback((root: HTMLElement) => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.from(root.querySelectorAll('[data-column]'), {
      opacity: 0,
      y: 24,
      duration: 0.6,
      stagger: 0.15,
    }).from(
      root.querySelectorAll('[data-feature]'),
      { opacity: 0, x: -12, duration: 0.4, stagger: 0.05 },
      '-=0.4',
    )
    return tl
  }, [])

  return (
    <Slide
      id="atributos"
      tone="white"
      animate={build}>
      <SlideHeader
        index="07"
        section="engenharia de atributos"
        title="Atributos das despesas"
        lead="O mesmo registro é descrito por três dimensões complementares, usadas tanto para detectar quanto para explicar o que chamou atenção."
      />

      <div className="mt-12 flex flex-1 flex-col">
        <FeatureMatrix />
      </div>

      <Footnote source="Anteprojeto, seção Dados e preparação">Figura 2. Dimensões dos atributos das despesas.</Footnote>
    </Slide>
  )
}
