import { Slide } from '@/deck/Slide'
import { SectionDivider } from '@/visuals/SectionDivider'

export function SlidePart2() {
  return (
    <Slide
      id="parte-2"
      tone="green">
      <SectionDivider
        index="2"
        kicker="a ideia"
        title="Como o Radar ajudaria"
        note="Uma ferramenta de apoio que mostra o que chamou atenção, por que isso aconteceu e onde conferir os dados."
      />
    </Slide>
  )
}
