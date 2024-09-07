import React, { useEffect, useMemo } from "react";
import {
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
  StyleSheet,
} from "react-native";
import Animated, {
  AnimationCallback,
  Easing,
  EasingFunction,
  EasingFunctionFactory,
  FadeIn,
  LinearTransition,
  ReduceMotion,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { COMPACT_NOTATIONS, DIGIT_VARIANTS, NUMBER_ARRAY } from "../constants";

export type DigitVariant = "sign" | "number" | "compact" | "dot" | "comma";

/**
 * Properties for the AnimatedDigit component.
 */
export interface AnimatedDigitProps
  extends Omit<React.ComponentProps<typeof Animated.View>, "style"> {
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
export const AnimatedDigit: React.FC<AnimatedDigitProps> = ({
  value,
  height,
  containerStyle,
  spinningAnimationConfig,
  animationCallback = () => {},
  animateToNewValue = (newValue, variant) =>
    withTiming(
      -newValue,
      spinningAnimationConfig || {
        duration: variant === "number" ? 600 : 100,
        easing: Easing.elastic(1),
      },
      (finished, current) => runOnJS(animationCallback)?.(finished, current)
    ),
  textProps,
  commaTextProps,
  dotTextProps,
  compactNotationTextProps,
  signTextProps,
  textStyle,
  numberStyle,
  commaStyle,
  dotStyle,
  signStyle,
  compactNotationStyle,
  numberTextProps,
  ...rest
}) => {
  const isNumeric = !isNaN(Number(value));
  const animatedValue = useSharedValue(isNumeric ? Number(value) : 0);
  const animatedStyle = useAnimatedStyle(
    () => ({
      transform: [{ translateY: animatedValue.value * (height || 0) }],
    }),
    [height]
  );

  const othersTextStyle = useMemo(
    () => ({
      ".": dotStyle,
      ",": commaStyle,
      "-": signStyle,
      "+": signStyle,
    }),
    [signStyle, dotStyle, commaStyle]
  );

  const othersTextProps = useMemo(
    () => ({
      ".": dotTextProps,
      ",": commaTextProps,
      "-": signTextProps,
      "+": signTextProps,
    }),
    [signTextProps, dotTextProps, commaTextProps]
  );

  useEffect(() => {
    const newValue = !isNumeric
      ? COMPACT_NOTATIONS.includes(value.toUpperCase())
        ? COMPACT_NOTATIONS.indexOf(value.toUpperCase())
        : 0
      : Number(value);
    animatedValue.value = animateToNewValue(newValue, DIGIT_VARIANTS[value]);
  }, [value]);

  return useMemo(
    () => (
      <Animated.View
        layout={LinearTransition}
        entering={FadeIn}
        style={[
          { alignItems: "center", justifyContent: "center" },
          containerStyle,
          { overflow: "hidden" },
        ]}
        {...rest}
      >
        <Animated.View style={[styles.digitContainer, animatedStyle]}>
          {isNumeric ? (
            NUMBER_ARRAY.map((_, index) => (
              <Text
                key={index}
                style={[
                  textStyle,
                  numberStyle,
                  {
                    position: index === 0 ? "relative" : "absolute",
                    transform: [{ translateY: height * index }],
                  },
                ]}
                {...textProps}
                {...numberTextProps}
              >
                {index}
              </Text>
            ))
          ) : COMPACT_NOTATIONS.includes(value.toUpperCase()) ? (
            COMPACT_NOTATIONS.map((char, index) => (
              <Text
                key={index}
                style={[
                  textStyle,
                  compactNotationStyle,
                  {
                    paddingHorizontal: index === 0 ? 1.5 : 0,
                    position: index === 0 ? "relative" : "absolute",
                    transform: [{ translateY: height * index }],
                  },
                ]}
                {...textProps}
                {...compactNotationTextProps}
              >
                {char}
              </Text>
            ))
          ) : (
            <Text
              style={[
                textStyle,
                othersTextStyle?.[value as keyof typeof othersTextStyle],
              ]}
              {...textProps}
              {...othersTextProps?.[value as keyof typeof othersTextProps]}
            >
              {value}
            </Text>
          )}
        </Animated.View>
      </Animated.View>
    ),
    [height, value]
  );
};

const styles = StyleSheet.create({
  digitContainer: {
    alignItems: "center",
    overflow: "visible",
    justifyContent: "center",
  },
});
