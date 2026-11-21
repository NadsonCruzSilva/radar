type Reason = {
  label: string
  detail: string
  weight: number
}

export const ALERT_SAMPLE = {
  id: 'ALT-2 391',
  valor: 'R$ 182.400,00',
  mediana: 'R$ 25.300,00',
  favorecido: 'Empresa X · 3 despesas no recorte',
  orgao: 'Unidade gestora A',
  categoria: 'Serviços de manutenção predial',
  periodo: 'março de 2025',
  severidade: 'alta',
}

export const ALERT_REASONS: Reason[] = [
  {
    label: 'valor fora da faixa comparável',
    detail: 'R$ 182,4 mil, 7,2 × a mediana dos registros da mesma categoria.',
    weight: 0.46,
  },
  {
    label: 'favorecido com baixa frequência',
    detail: 'Apenas 3 despesas no exercício, nenhuma acima de R$ 40 mil.',
    weight: 0.31,
  },
  {
    label: 'repetição de valores semelhantes',
    detail: 'Quatro despesas em intervalo inferior a dez dias, com valores próximos.',
    weight: 0.23,
  },
]
