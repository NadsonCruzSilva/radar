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
        note="O volume de despesas dificulta a triagem manual. O Radar propõe priorizar registros atípicos para conferência."
      />
    </Slide>
  )
}
