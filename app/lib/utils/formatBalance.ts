export default function formatBalance(
  balance: number,
  locale: string = "en-US"
): string {
  const absValue = Math.abs(balance);

  const formatted = new Intl.NumberFormat(locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(absValue);

  return balance < 0 ? `(${formatted})` : formatted;
}
