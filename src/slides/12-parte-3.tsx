import { Slide } from '@/deck/Slide'
import { SectionDivider } from '@/visuals/SectionDivider'

export function SlidePart3() {
  return (
    <Slide
      id="parte-3"
      tone="green">
      <SectionDivider
        index="3"
        kicker="como avaliar"
        title="Avaliação e viabilidade"
        note="O estudo de caso verifica se as fichas são verificáveis, fiéis aos dados, acionáveis e livres de ruído evitável."
      />
    </Slide>
  )
}
