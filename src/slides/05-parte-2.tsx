import { Slide } from '@/deck/Slide'
import { SectionDivider } from '@/visuals/SectionDivider'

export function SlidePart2() {
  return (
    <Slide
      id="parte-2"
      tone="green">
      <SectionDivider
        index="2"
        kicker="como funciona"
        title="Método proposto"
        note="Coleta, tratamento, atributos, detecção, contextualização e exploração — cada uma com escopo delimitado e reprodutível."
      />
    </Slide>
  )
}
