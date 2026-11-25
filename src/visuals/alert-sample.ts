type Reason = {
  label: string
  detail: string
}

export const ALERT_SAMPLE = {
  id: 'ALT-2 391',
  valor: 'R$ 182.400,00',
  mediana: 'R$ 25.300,00',
  favorecido: 'Empresa X · 3 despesas no recorte',
  orgao: 'Unidade gestora A',
  categoria: 'Locação de veículos',
  periodo: 'março de 2025',
}

export const ALERT_REASONS: Reason[] = [
  {
    label: 'valor fora da faixa comparável',
    detail: 'R$ 182,4 mil, 7,2 × a mediana dos registros da mesma categoria.',
  },
  {
    label: 'frequência do favorecido',
    detail: 'O favorecido aparece em três despesas no exercício.',
  },
  {
    label: 'concentração de gastos',
    detail: 'As três despesas somam 8% do total registrado no órgão.',
  },
]
