import { useCallback } from 'react'
import gsap from 'gsap'
import { Slide } from '@/deck/Slide'
import { SlideHeader, Footnote } from '@/deck/chrome'
import Timeline from '@/visuals/Timeline'

export function SlideSchedule() {
  const build = useCallback((root: HTMLElement) => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })
    tl.from(root.querySelectorAll('[data-row]'), {
      opacity: 0,
      x: -20,
      duration: 0.4,
      stagger: 0.06,
    }).from(
      root.querySelectorAll('[data-bar]'),
      { scaleX: 0, transformOrigin: 'left', duration: 0.65, stagger: 0.07, ease: 'power3.out' },
      '-=0.5',
    )
    return tl
  }, [])

  return (
    <Slide
      id="cronograma"
      tone="paper"
      animate={build}>
      <SlideHeader
        index="15"
        section="planejamento"
        title="Cronograma do TCC em 2027"
        lead="Início em fevereiro, apresentação dos resultados preliminares na JACITEC em outubro e defesa final em dezembro."
      />

      <div className="mt-8 flex flex-1 flex-col justify-center">
        <Timeline />
      </div>

      <Footnote source="Anteprojeto, Cronograma">Figura 8. Atividades planejadas de fevereiro a dezembro de 2027.</Footnote>
    </Slide>
  )
}
