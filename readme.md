# React Native Animated Digits

✨ `react-native-animated-rolling-numbers` is a React Native component that animates numbers and compact notations (K, M, B, T) with customizable styles and animations. It's designed to create smooth, eye-catching transitions between numeric values.

[![React Native Animated rolling numbers Example](https://github.com/user-attachments/assets/48b10447-5978-4a51-9715-229631a939d5)](https://github.com/user-attachments/assets/48b10447-5978-4a51-9715-229631a939d5)

## Features

- ✨ Supports animated transitions for numeric values and symbols (e.g., commas, dots).
- 🎨 Customizable digit styles and animation configurations.
- 📏 Handles compact number formatting (e.g., 1K, 1M, etc.).
- 🔧 Easily customizable via props.
- 🌀 Supports reduce-motion and easing functions for animations.
- 🔢 Designed for both regular numbers and formatted numbers with signs (positive/negative) and commas.

## Installation

```bash
npm install react-native-animated-rolling-numbers
# or
yarn add react-native-animated-rolling-numbers
```

Make sure you have `react-native-reanimated` installed in your project. Follow the official installation guide here: [react-native-reanimated installation](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started/#installation).

## Usage

Basic Example

```javascript
import React, { useState } from "react";
import { View, StyleSheet, Button } from "react-native";
import { AnimatedRollingNumber } from "react-native-animated-rolling-numbers";
import { Easing } from "react-native-reanimated";

const App = () => {
  const [value, setValue] = useState(1200);
  return (
    <View style={styles.container}>
      <AnimatedRollingNumber
        value={value}
        showPlusSign
        showMinusSign
        useGrouping
        enableCompactNotation
        compactToFixed={2}
        textStyle={styles.digits}
        spinningAnimationConfig={{ duration: 500, easing: Easing.bounce }}
      />
      <Button
        onPress={() => setValue(value + Math.floor(Math.random() * 1000))}
        title="Increase"
      />
      <Button
        onPress={() => setValue(value - Math.floor(Math.random() * 1000))}
        title="Decrease"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  digits: {
    fontSize: 32,
    fontWeight: "bold",
    paddingHorizontal: 2,
    color: "#4A90E2",
  },
});

export default App;
```

## Props

### `value: number`

The numeric value to be displayed and animated.

### `showSign?: boolean`

Whether to show the sign of the number (e.g., "+" or "-"). Defaults to `false`.

### `showMinusSign?: boolean`

Whether to show the minus sign for negative numbers. Defaults to `true`.

### `showPlusSign?: boolean`

Whether to show the plus sign for positive numbers. Defaults to `false`.

### `toFixed?: number`

Number of decimal places to show in normal notation. defaults to `undefined`.

### `useGrouping?: boolean`

Whether to include commas/points in the number formatting (e.g.,1000987 -> 1,000,987). Defaults to `false`.

### `formattedText?: string`

Custom formatted text to display instead of the numeric value.

### `locale?: Intl.LocalesArgument`

The locale to use for number formatting. Defaults to `"en-US"`.

### `enableCompactNotation?: boolean`

Enable compact notation for large numbers (e.g., 1K, 1M, 1B, 1T). Defaults to `false`.

### `compactToFixed?: number`

Number of decimal places to show in compact notation. Defaults to `undefined`.

### `fixedOnlyForCompact?: boolean`

If true, only applies decimal precision for compact notation (K/M/B/T). Defaults to `true`.

Example:

- If `fixedOnlyForCompact` is `true` and `compactToFixed` is `2`, the number `1500` will be displayed as `1.50K`, but the number `999` will be displayed as `999` (no decimal places).
- If `fixedOnlyForCompact` is `false` and `compactToFixed` is `2`, the number `1500` will be displayed as `1.50K`, and the number `999` will be displayed as `999.00`.

### `containerStyle?: StyleProp<ViewStyle>`

Style for the container wrapping the animated digits.

### `digitContainerStyle?: StyleProp<ViewStyle>`

Style for the container wrapping each animated digit.

### `textProps?: React.ComponentProps<typeof Text>`

Props for the main text component.

### `numberTextProps?: React.ComponentProps<typeof Text>`

Props for the numeric text components.

### `commaTextProps?: React.ComponentProps<typeof Text>`

Props for the comma text component.

### `dotTextProps?: React.ComponentProps<typeof Text>`

Props for the decimal point text component.

### `compactNotationTextProps?: React.ComponentProps<typeof Text>`

Props for the compact notation text components (K, M, B, T).

### `signTextProps?: React.ComponentProps<typeof Text>`

Props for the sign text component (if used).

### `textStyle?: StyleProp<TextStyle>`

Style for the main text component.

### `numberStyle?: StyleProp<TextStyle>`

Style for the numeric text components.

### `commaStyle?: StyleProp<TextStyle>`

Style for the comma text component.

### `dotStyle?: StyleProp<TextStyle>`

Style for the decimal point text component.

### `compactNotationStyle?: StyleProp<TextStyle>`

Style for the compact notation text components.

### `signStyle?: StyleProp<TextStyle>`

Style for the sign text component.

### `spinningAnimationConfig?: object`

Configuration for the digit animation. Supports:

- `duration: number`: Duration of the animation in milliseconds.
- `reduceMotion: boolean`: Whether to reduce motion for accessibility.
- `easing: EasingFunction`: Custom easing function for the animation.

### `animationCallback?: AnimationCallback`

Callback function that is invoked when the animation completes.

### `animateToNewValue?: (newValue: number, variant?: DigitVariant) => number`

Custom function to animate the value change. Defaults to a bounce animation.

If you find this project useful and would like to support its ongoing development, consider buying me a coffee! Your support helps keep the creativity brewing and allows me to continue improving and maintaining this project. Thank you! ☕💖

<a href="https://buymeacoffee.com/bouarourmohammed" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>
