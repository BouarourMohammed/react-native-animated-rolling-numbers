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
exports.AnimatedDigit = void 0;
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var react_native_reanimated_1 = __importStar(require("react-native-reanimated"));
var constants_1 = require("../constants");
/**
 * AnimatedDigit is a React component that animates numbers and compact notations (K, M, B, T)
 * with customizable styles and animations.
 */
var AnimatedDigit = function (_a) {
    var value = _a.value, height = _a.height, containerStyle = _a.containerStyle, spinningAnimationConfig = _a.spinningAnimationConfig, _b = _a.animationCallback, animationCallback = _b === void 0 ? function () { } : _b, _c = _a.animateToNewValue, animateToNewValue = _c === void 0 ? function (newValue, variant) {
        return (0, react_native_reanimated_1.withTiming)(-newValue, spinningAnimationConfig || {
            duration: variant === "number" ? 600 : 100,
            easing: react_native_reanimated_1.Easing.elastic(1),
        }, function (finished, current) { var _a; return (_a = (0, react_native_reanimated_1.runOnJS)(animationCallback)) === null || _a === void 0 ? void 0 : _a(finished, current); });
    } : _c, textProps = _a.textProps, commaTextProps = _a.commaTextProps, dotTextProps = _a.dotTextProps, compactNotationTextProps = _a.compactNotationTextProps, signTextProps = _a.signTextProps, textStyle = _a.textStyle, numberStyle = _a.numberStyle, commaStyle = _a.commaStyle, dotStyle = _a.dotStyle, signStyle = _a.signStyle, compactNotationStyle = _a.compactNotationStyle, numberTextProps = _a.numberTextProps, rest = __rest(_a, ["value", "height", "containerStyle", "spinningAnimationConfig", "animationCallback", "animateToNewValue", "textProps", "commaTextProps", "dotTextProps", "compactNotationTextProps", "signTextProps", "textStyle", "numberStyle", "commaStyle", "dotStyle", "signStyle", "compactNotationStyle", "numberTextProps"]);
    var isNumeric = !isNaN(Number(value));
    var animatedValue = (0, react_native_reanimated_1.useSharedValue)(isNumeric ? Number(value) : 0);
    var animatedStyle = (0, react_native_reanimated_1.useAnimatedStyle)(function () { return ({
        transform: [{ translateY: animatedValue.value * (height || 0) }],
    }); }, [height]);
    var othersTextStyle = (0, react_1.useMemo)(function () { return ({
        ".": dotStyle,
        ",": commaStyle,
        "-": signStyle,
        "+": signStyle,
    }); }, [signStyle, dotStyle, commaStyle]);
    var othersTextProps = (0, react_1.useMemo)(function () { return ({
        ".": dotTextProps,
        ",": commaTextProps,
        "-": signTextProps,
        "+": signTextProps,
    }); }, [signTextProps, dotTextProps, commaTextProps]);
    (0, react_1.useEffect)(function () {
        var newValue = !isNumeric
            ? constants_1.COMPACT_NOTATIONS.includes(value.toUpperCase())
                ? constants_1.COMPACT_NOTATIONS.indexOf(value.toUpperCase())
                : 0
            : Number(value);
        animatedValue.value = animateToNewValue(newValue, constants_1.DIGIT_VARIANTS[value]);
    }, [value]);
    return (0, react_1.useMemo)(function () { return (react_1.default.createElement(react_native_reanimated_1.default.View, __assign({ layout: react_native_reanimated_1.LinearTransition, entering: react_native_reanimated_1.FadeIn, style: [
            { alignItems: "center", justifyContent: "center" },
            containerStyle,
            { overflow: "hidden" },
        ] }, rest),
        react_1.default.createElement(react_native_reanimated_1.default.View, { style: [styles.digitContainer, animatedStyle] }, isNumeric ? (constants_1.NUMBER_ARRAY.map(function (_, index) { return (react_1.default.createElement(react_native_1.Text, __assign({ key: index, style: [
                textStyle,
                numberStyle,
                {
                    position: index === 0 ? "relative" : "absolute",
                    transform: [{ translateY: height * index }],
                },
            ] }, textProps, numberTextProps), index)); })) : constants_1.COMPACT_NOTATIONS.includes(value.toUpperCase()) ? (constants_1.COMPACT_NOTATIONS.map(function (char, index) { return (react_1.default.createElement(react_native_1.Text, __assign({ key: index, style: [
                textStyle,
                compactNotationStyle,
                {
                    paddingHorizontal: index === 0 ? 1.5 : 0,
                    position: index === 0 ? "relative" : "absolute",
                    transform: [{ translateY: height * index }],
                },
            ] }, textProps, compactNotationTextProps), char)); })) : (react_1.default.createElement(react_native_1.Text, __assign({ style: [
                textStyle,
                othersTextStyle === null || othersTextStyle === void 0 ? void 0 : othersTextStyle[value],
            ] }, textProps, othersTextProps === null || othersTextProps === void 0 ? void 0 : othersTextProps[value]), value))))); }, [height, value]);
};
exports.AnimatedDigit = AnimatedDigit;
var styles = react_native_1.StyleSheet.create({
    digitContainer: {
        alignItems: "center",
        overflow: "visible",
        justifyContent: "center",
    },
});
