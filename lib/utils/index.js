"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatCompactNumber = formatCompactNumber;
function formatCompactNumber(value, fixedDecimal, fixedOnlyForCompact, useGrouping, locales) {
    if (fixedDecimal === void 0) { fixedDecimal = 1; }
    if (fixedOnlyForCompact === void 0) { fixedOnlyForCompact = false; }
    if (useGrouping === void 0) { useGrouping = false; }
    if (locales === void 0) { locales = "en-US"; }
    var absValue = Math.abs(value);
    if (absValue >= 1000000000000) {
        return ((value / 1000000000000).toLocaleString(locales, {
            maximumFractionDigits: fixedDecimal,
            minimumFractionDigits: fixedDecimal,
            useGrouping: useGrouping,
        }) + "T");
    }
    else if (absValue >= 1000000000) {
        return ((value / 1000000000).toLocaleString(locales, {
            maximumFractionDigits: fixedDecimal,
            minimumFractionDigits: fixedDecimal,
            useGrouping: useGrouping,
        }) + "B");
    }
    else if (absValue >= 1000000) {
        return ((value / 1000000).toLocaleString(locales, {
            maximumFractionDigits: fixedDecimal,
            minimumFractionDigits: fixedDecimal,
            useGrouping: useGrouping,
        }) + "M");
    }
    else if (absValue >= 1000) {
        return ((value / 1000).toLocaleString(locales, {
            maximumFractionDigits: fixedDecimal,
            minimumFractionDigits: fixedDecimal,
            useGrouping: useGrouping,
        }) + "K");
    }
    else {
        return value.toFixed(fixedOnlyForCompact ? 0 : fixedDecimal);
    }
}
