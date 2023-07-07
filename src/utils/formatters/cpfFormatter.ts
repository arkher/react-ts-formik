export default function formatCPF(value: string) {
  return value
    .replace(/\D/g, '') // Remove tudo que não é número
    .replace(/(\d{3})(\d{1,2})?(\d{1,2})?(\d{1,2})?/, '$1.$2.$3-$4') // Formata o CPF
    .substr(0, 14); // Limita o tamanho máximo do CPF
}
