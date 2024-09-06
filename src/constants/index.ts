export const NUMBER_ARRAY = new Array(10).fill(0);
export const COMPACT_NOTATIONS = ["K", "M", "B", "T"];
export const DIGIT_VARIANTS: {
  [key: string]: "dot" | "comma" | "sign" | "number" | "compact";
} = {
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
