```javascript
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import { useState } from "react";
import { AnimatedRollingNumber } from "react-native-animated-rolling-numbers";

interface ButtonProps extends TouchableOpacityProps {
  variant?: "primary" | "secondary";
  title?: string;
  onPress?: () => void;
}
const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = "primary",
  ...rest
}) => {
  const { style, ...props } = rest;
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: variant === "primary" ? "#2077E0" : "white",
          borderWidth: 1,
          borderColor: variant === "primary" ? "white" : "#2077E0",
        },
        style,
      ]}
      onPress={onPress}
      {...props}
    >
      <Text
        style={[
          styles.buttonText,
          {
            color: variant === "primary" ? "white" : "#2077E0",
          },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default function App() {
  const [count, setCount] = useState(142347);
  const [showMinusSign, setShowMinusSign] = useState(true);
  const [showPlusSign, setShowPlusSign] = useState(false);
  const [includeComma, setIncludeComma] = useState(false);
  const [enableCompactNotation, setEnableCompactNotation] = useState(false);
  const [compactToFixed, setCompactToFixed] = useState(1);
  const [toFixed, setToFixed] = useState(2);
  const [fixedOnlyForCompact, setFixedOnlyForCompact] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ backgroundColor: "", alignItems: "center" }}>
        <View style={{ flexDirection: "row" }}>
          <Button
            variant="secondary"
            title="-3461997.234"
            onPress={() => setCount(-3461997.234)}
          />
          <Button
            variant="secondary"
            title="+3461997.234"
            onPress={() => setCount(3461997.234)}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Button
            variant="secondary"
            title=" + "
            onPress={() => setCount(count + Math.round(Math.random() * count))}
            style={{ minWidth: 100 }}
          />
          <Button
            variant="secondary"
            title=" - "
            onPress={() => setCount(count - Math.round(Math.random() * count))}
            style={{ minWidth: 100 }}
          />
        </View>
        <AnimatedRollingNumber
          containerStyle={{
            backgroundColor: "rgba(0,0,0,0.2)",
            borderRadius: 10,
            padding: 32,
            marginVertical: 24,
          }}
          value={Number(count.toFixed(toFixed))}
          includeComma={includeComma}
          // formattedText={customFormatCompactNumber(count)}
          enableCompactNotation={enableCompactNotation}
          compactToFixed={compactToFixed}
          fixedOnlyForCompact={fixedOnlyForCompact}
          showPlusSign={showPlusSign}
          showMinusSign={showMinusSign}
          textStyle={{
            color: "black",
            fontWeight: "bold",
            paddingHorizontal: 1,
            fontSize: 28,
          }}
        />
        <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 24 }}>
          Props Enabled / Disabled
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Button
            variant={showMinusSign ? "primary" : "secondary"}
            title="Show -"
            onPress={() => setShowMinusSign(!showMinusSign)}
            style={{ minWidth: 100 }}
          />
          <Button
            variant={showPlusSign ? "primary" : "secondary"}
            title="Show +"
            onPress={() => setShowPlusSign(!showPlusSign)}
            style={{ minWidth: 100 }}
          />
          <Button
            variant={includeComma ? "primary" : "secondary"}
            title="show ,"
            onPress={() => setIncludeComma(!includeComma)}
            style={{ minWidth: 100 }}
          />
        </View>
        <Button
          variant={enableCompactNotation ? "primary" : "secondary"}
          title="Enable Compact Notation"
          onPress={() => setEnableCompactNotation(!enableCompactNotation)}
          style={{ minWidth: 100 }}
        />
        <Button
          variant={fixedOnlyForCompact ? "primary" : "secondary"}
          title="Fixed Only For Compact"
          onPress={() => setFixedOnlyForCompact(!fixedOnlyForCompact)}
          style={{ minWidth: 100 }}
        />
        <Button
          variant={enableCompactNotation ? "primary" : "secondary"}
          disabled={!enableCompactNotation}
          title={`Increase Compact toFixed : ${compactToFixed}`}
          onPress={() => setCompactToFixed(Math.max(compactToFixed + 1, 0))}
          style={{ minWidth: 100 }}
        />
        <Button
          variant={!enableCompactNotation ? "secondary" : "primary"}
          disabled={!enableCompactNotation}
          title={`Decrease Compact toFixed : ${compactToFixed}`}
          onPress={() => setCompactToFixed(Math.max(compactToFixed - 1, 0))}
          style={{ minWidth: 100 }}
        />
        <Button
          variant={!enableCompactNotation ? "primary" : "secondary"}
          disabled={enableCompactNotation}
          title={`Increase toFixed : ${toFixed}`}
          onPress={() => setToFixed(Math.max(toFixed + 1, 0))}
          style={{ minWidth: 100 }}
        />
        <Button
          variant={!enableCompactNotation ? "primary" : "secondary"}
          disabled={enableCompactNotation}
          title={`Decrease toFixed : ${toFixed}`}
          onPress={() => setToFixed(Math.max(toFixed - 1, 0))}
          style={{ minWidth: 100 }}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#2077E0",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
```
