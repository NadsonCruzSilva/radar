import { Slide } from '@/deck/Slide'
import { SectionDivider } from '@/visuals/SectionDivider'

export function SlidePart1() {
  return (
    <Slide
      id="parte-1"
      tone="red">
      <SectionDivider
        index="1"
        kicker="o problema"
        title="Problema de pesquisa"
        note="Há muitos registros públicos e pouco tempo para analisar cada despesa. O Radar propõe ajudar a encontrar o que merece ser conferido."
      />
    </Slide>
  )
}
