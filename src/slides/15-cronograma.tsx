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
        title="Cronograma do TCC"
        lead="TCC I concentra fundamentação, preparação dos dados e o primeiro relatório. TCC II produz explicação, estudo de caso, redação e defesa."
      />

      <div className="mt-8 flex flex-1 flex-col justify-center">
        <Timeline />
      </div>

      <Footnote source="Cronograma do anteprojeto. Datas sujeitas ao calendário do Ifes">Figura 8. Atividades planejadas por mês, de TCC I (2026/2) a TCC II (2027/1).</Footnote>
    </Slide>
  )
}
