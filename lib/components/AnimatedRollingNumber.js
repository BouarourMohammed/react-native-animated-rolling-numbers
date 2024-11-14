"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimatedRollingNumber = void 0;
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var react_native_reanimated_1 = __importStar(require("react-native-reanimated"));
var AnimatedDigit_1 = require("./AnimatedDigit");
var utils_1 = require("../utils");
/**
 * AnimatedDigits is a React component that formats and animates numeric values,
 * optionally using compact notation (K, M, B, T) and custom styling.
 */
var AnimatedRollingNumber = function (_a) {
    var value = _a.value, _b = _a.showMinusSign, showMinusSign = _b === void 0 ? true : _b, _c = _a.showPlusSign, showPlusSign = _c === void 0 ? false : _c, toFixed = _a.toFixed, _d = _a.useGrouping, useGrouping = _d === void 0 ? false : _d, formattedText = _a.formattedText, _e = _a.locale, locale = _e === void 0 ? "en-US" : _e, enableCompactNotation = _a.enableCompactNotation, compactToFixed = _a.compactToFixed, containerStyle = _a.containerStyle, _f = _a.fixedOnlyForCompact, fixedOnlyForCompact = _f === void 0 ? true : _f, digitContainerStyle = _a.digitContainerStyle, numberTextProps = _a.numberTextProps, commaTextProps = _a.commaTextProps, dotTextProps = _a.dotTextProps, compactNotationTextProps = _a.compactNotationTextProps, signTextProps = _a.signTextProps, textStyle = _a.textStyle, numberStyle = _a.numberStyle, commaStyle = _a.commaStyle, dotStyle = _a.dotStyle, compactNotationStyle = _a.compactNotationStyle, signStyle = _a.signStyle, textProps = _a.textProps, spinningAnimationConfig = _a.spinningAnimationConfig, animationCallback = _a.animationCallback, animateToNewValue = _a.animateToNewValue, rest = __rest(_a, ["value", "showMinusSign", "showPlusSign", "toFixed", "useGrouping", "formattedText", "locale", "enableCompactNotation", "compactToFixed", "containerStyle", "fixedOnlyForCompact", "digitContainerStyle", "numberTextProps", "commaTextProps", "dotTextProps", "compactNotationTextProps", "signTextProps", "textStyle", "numberStyle", "commaStyle", "dotStyle", "compactNotationStyle", "signStyle", "textProps", "spinningAnimationConfig", "animationCallback", "animateToNewValue"]);
    var _g = (0, react_1.useState)(0), height = _g[0], setHeight = _g[1];
    var numberValue = value < 0 && !showMinusSign ? Math.abs(value) : value;
    var formattedNumber = (0, react_1.useMemo)(function () {
        return formattedText ||
            (enableCompactNotation &&
                (0, utils_1.formatCompactNumber)(numberValue, compactToFixed || toFixed, fixedOnlyForCompact, useGrouping, locale)) ||
            numberValue.toLocaleString(locale, {
                useGrouping: useGrouping,
                minimumFractionDigits: toFixed,
                maximumFractionDigits: toFixed,
            });
    }, [
        formattedText,
        useGrouping,
        value,
        compactToFixed,
        enableCompactNotation,
        showMinusSign,
        showPlusSign,
        fixedOnlyForCompact,
        locale,
        toFixed,
    ]);
    var number = (0, react_1.useMemo)(function () {
        var numberWithSign = ((showPlusSign && value >= 0 ? "+" : "") + formattedNumber).split("");
        if (react_native_1.I18nManager.isRTL) {
            return numberWithSign.reverse();
        }
        return numberWithSign;
    }, [formattedNumber, value, showPlusSign]);
    var handleLayout = (0, react_1.useCallback)(function (e) {
        if (e.nativeEvent.layout.height !== height) {
            setHeight(e.nativeEvent.layout.height);
        }
    }, [height]);
    return (react_1.default.createElement(react_native_reanimated_1.default.View, __assign({ layout: react_native_reanimated_1.LinearTransition, style: [styles.container, containerStyle] }, rest),
        react_1.default.createElement(react_native_1.View, { style: styles.innerContainer, onLayout: handleLayout }, number.map(function (char, index) { return (react_1.default.createElement(AnimatedDigit_1.AnimatedDigit, { key: formattedNumber.length - index - 1, value: char, height: height, containerStyle: digitContainerStyle, textStyle: textStyle, numberTextProps: numberTextProps, commaTextProps: commaTextProps, dotTextProps: dotTextProps, compactNotationTextProps: compactNotationTextProps, signTextProps: signTextProps, numberStyle: numberStyle, commaStyle: commaStyle, dotStyle: dotStyle, compactNotationStyle: compactNotationStyle, signStyle: signStyle, spinningAnimationConfig: spinningAnimationConfig, animationCallback: animationCallback, animateToNewValue: animateToNewValue })); }))));
};
exports.AnimatedRollingNumber = AnimatedRollingNumber;
var styles = react_native_1.StyleSheet.create({
    container: {
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
    },
    innerContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
});
