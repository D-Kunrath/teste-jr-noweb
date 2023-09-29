const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
})

export function formatCurrencyString(value) {
  return currencyFormatter.format(value / 100);
}
