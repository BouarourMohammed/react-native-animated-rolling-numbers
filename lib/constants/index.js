"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DIGIT_VARIANTS = exports.COMPACT_NOTATIONS = exports.NUMBER_ARRAY = void 0;
exports.NUMBER_ARRAY = new Array(10).fill(0);
exports.COMPACT_NOTATIONS = ["K", "M", "B", "T"];
exports.DIGIT_VARIANTS = {
    ".": "dot",
    ",": "comma",
    "-": "sign",
    "+": "sign",
    "0": "number",
    "1": "number",
    "2": "number",
    "3": "number",
    "4": "number",
    "5": "number",
    "6": "number",
    "7": "number",
    "8": "number",
    "9": "number",
    K: "compact",
    M: "compact",
    B: "compact",
    T: "compact",
};
