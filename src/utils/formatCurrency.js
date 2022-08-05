export const formatCurrency = ( value ) => {
  const currency = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value)
  return currency;
}
