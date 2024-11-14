import React from "react";
import { type StyleProp, Text, type TextStyle, type ViewStyle } from "react-native";
import Animated, { type AnimationCallback, type EasingFunction, type EasingFunctionFactory, ReduceMotion } from "react-native-reanimated";
export type DigitVariant = "sign" | "number" | "compact" | "dot" | "comma";
/**
 * Properties for the AnimatedDigit component.
 */
export interface AnimatedDigitProps extends Omit<React.ComponentProps<typeof Animated.View>, "style"> {
    /** The string value to be displayed and animated. */
    value: string;
    /** The height of each digit or notation, used for animation calculations. */
    height: number;
    /** Style for the container wrapping the animated text. */
    containerStyle?: StyleProp<ViewStyle>;
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
 * AnimatedDigit is a React component that animates numbers and compact notations (K, M, B, T)
 * with customizable styles and animations.
 */
export declare const AnimatedDigit: React.FC<AnimatedDigitProps>;
