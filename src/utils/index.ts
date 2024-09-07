/**
 * Formats a number into a compact string representation (e.g., 1K, 1.5M).
 *
 * @param value - The numeric value to format.
 * @param fixedDecimal - Number of decimal places to show in compact notation. Defaults to 1.
 * @param fixedOnlyForCompact - If true, only applies decimal fixing for compact notation. Defaults to false.
 * @param useGrouping - Whether to include separator for thousands separators .
 * @param locales - The locale to use for number formatting. Defaults to "en-US".
 * @returns The formatted string representation of the number.
 */

export function formatCompactNumber(
  value: number,
  fixedDecimal: number = 1,
  fixedOnlyForCompact: boolean = false,
  useGrouping: boolean = false,
  locales: Intl.LocalesArgument = "en-US"
): string {
  const absValue = Math.abs(value);
  if (absValue >= 1_000_000_000_000) {
    return (
      (value / 1_000_000_000_000).toLocaleString(locales, {
        maximumFractionDigits: fixedDecimal,
        minimumFractionDigits: fixedDecimal,
        useGrouping,
      }) + "T"
    );
  } else if (absValue >= 1_000_000_000) {
    return (
      (value / 1_000_000_000).toLocaleString(locales, {
        maximumFractionDigits: fixedDecimal,
        minimumFractionDigits: fixedDecimal,
        useGrouping,
      }) + "B"
    );
  } else if (absValue >= 1_000_000) {
    return (
      (value / 1_000_000).toLocaleString(locales, {
        maximumFractionDigits: fixedDecimal,
        minimumFractionDigits: fixedDecimal,
        useGrouping,
      }) + "M"
    );
  } else if (absValue >= 1_000) {
    return (
      (value / 1_000).toLocaleString(locales, {
        maximumFractionDigits: fixedDecimal,
        minimumFractionDigits: fixedDecimal,
        useGrouping,
      }) + "K"
    );
  } else {
    return value.toFixed(fixedOnlyForCompact ? 0 : fixedDecimal);
  }
}
