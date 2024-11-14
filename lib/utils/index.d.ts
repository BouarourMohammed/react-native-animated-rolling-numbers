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
export declare function formatCompactNumber(value: number, fixedDecimal?: number, fixedOnlyForCompact?: boolean, useGrouping?: boolean, locales?: Intl.LocalesArgument): string;
