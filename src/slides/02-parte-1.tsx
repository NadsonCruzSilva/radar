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
        note="Os portais publicam milhares de registros. Quais despesas merecem ser conferidas primeiro?"
      />
    </Slide>
  )
}
