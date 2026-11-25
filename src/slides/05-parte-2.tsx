import { Slide } from '@/deck/Slide'
import { SectionDivider } from '@/visuals/SectionDivider'

export function SlidePart2() {
  return (
    <Slide
      id="parte-2"
      tone="green">
      <SectionDivider
        index="2"
        kicker="a proposta"
        title="Como o Radar funciona"
        note="O protótipo transforma registros oficiais em alertas priorizados com evidências para conferência."
      />
    </Slide>
  )
}
