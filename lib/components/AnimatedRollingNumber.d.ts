import React from "react";
import { type StyleProp, type ViewStyle, type TextStyle, Text } from "react-native";
import Animated, { type AnimationCallback, type EasingFunction, type EasingFunctionFactory, ReduceMotion } from "react-native-reanimated";
import { type DigitVariant } from "./AnimatedDigit";
/**
 * Properties for the AnimatedRollingNumber component.
 */
export interface AnimatedRollingNumberProps extends Omit<React.ComponentProps<typeof Animated.View>, "style"> {
    /** The numeric value to be displayed and animated. */
    value: number;
    /** Whether to show the minus sign. */
    showMinusSign?: boolean;
    /** Whether to show the plus sign. */
    showPlusSign?: boolean;
    /** Number of decimal places to show in normal notation. */
    toFixed?: number;
    /** Whether to include commas in the number formatting (e.g., 1,000). */
    useGrouping?: boolean;
    /** Custom formatted text to display instead of the numeric value. */
    formattedText?: string;
    /** The locale to use for number formatting. Defaults to "en-US". */
    locale?: Intl.LocalesArgument;
    /** Whether to enable compact notation (e.g., 1K, 1M). */
    enableCompactNotation?: boolean;
    /** Number of decimal places to show in compact notation. */
    compactToFixed?: number;
    /** If true, only applies decimal fixing for compact notation. only for the notation that has M/K/B/T. in the end */
    fixedOnlyForCompact?: boolean;
    /** Style for the container wrapping the digits. */
    containerStyle?: StyleProp<ViewStyle>;
    /** Style for the container wrapping the animated text. */
    digitContainerStyle?: StyleProp<ViewStyle>;
    /** Props for the primary text component used in the component. */
    textProps?: Omit<React.ComponentProps<typeof Text>, "style">;
    /** Props for the number text components. */
    numberTextProps?: Omit<React.ComponentProps<typeof Text>, "style">;
    /** Props for the comma text component, if used. */
    commaTextProps?: Omit<React.ComponentProps<typeof Text>, "style">;
    /** Props for the dot (decimal point) text component, if used. */
    dotTextProps?: Omit<React.ComponentProps<typeof Text>, "style">;
    /** Props for the compact notation text components (K, M, B, T). */
    compactNotationTextProps?: Omit<React.ComponentProps<typeof Text>, "style">;
    /** Props for the sign text component, if used. */
    signTextProps?: Omit<React.ComponentProps<typeof Text>, "style">;
    /** Style for the primary text component. */
    textStyle?: StyleProp<TextStyle>;
    /** Style for the number text components. */
    numberStyle?: StyleProp<TextStyle>;
    /** Style for the comma text component, if used. */
    commaStyle?: StyleProp<TextStyle>;
    /** Style for the dot (decimal point) text component, if used. */
    dotStyle?: StyleProp<TextStyle>;
    /** Style for the compact notation text components (K, M, B, T). */
    compactNotationStyle?: StyleProp<TextStyle>;
    /** Style for the sign text component, if used. */
    signStyle?: StyleProp<TextStyle>;
    /** Configuration for the animation moving the digits up and down. Defaults to a bounce animation with 500ms duration. */
    spinningAnimationConfig?: {
        duration?: number;
        reduceMotion?: ReduceMotion;
        easing?: EasingFunction | EasingFunctionFactory;
    };
    /** Callback function invoked when the animation completes. */
    animationCallback?: AnimationCallback;
    /** Custom function to animate the value change. Defaults to a bounce animation. */
    animateToNewValue?: (newValue: number, variant?: DigitVariant) => number;
}
/**
 * AnimatedDigits is a React component that formats and animates numeric values,
 * optionally using compact notation (K, M, B, T) and custom styling.
 */
export declare const AnimatedRollingNumber: React.FC<AnimatedRollingNumberProps>;
