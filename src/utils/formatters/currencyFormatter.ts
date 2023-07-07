import { FormatInputValueFunction } from 'react-number-format';

export const currencyFormatter: FormatInputValueFunction = (value: string) => {
  if (!Number(value)) return '';

  const amount = new Intl.NumberFormat('pt-BR', {
    style: 'decimal',
    currency: 'BRL',
    minimumFractionDigits: 2,
  }).format(Number(value) / 100);

  return `${amount}`;
};
