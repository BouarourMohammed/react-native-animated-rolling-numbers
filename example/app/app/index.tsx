import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import { useState } from "react";
import AnimatedRollingNumber from "react-native-animated-rolling-numbers";

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
  const [useGrouping, setUseGrouping] = useState(false);
  const [enableCompactNotation, setEnableCompactNotation] = useState(false);
  const [compactToFixed, setCompactToFixed] = useState(1);
  const [toFixed, setToFixed] = useState(2);
  const [fixedOnlyForCompact, setFixedOnlyForCompact] = useState(true);
  const [locale, setLocale] = useState("en-US");

  return (
    <View style={styles.container}>
      <ScrollView
        style={{ width: Dimensions.get("screen").width }}
        contentContainerStyle={styles.contentContainer}
      >
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
          containerStyle={styles.numberContainer}
          value={count}
          toFixed={toFixed}
          useGrouping={useGrouping}
          locale={locale}
          // formattedText={customFormatCompactNumber(count)}
          enableCompactNotation={enableCompactNotation}
          compactToFixed={compactToFixed}
          fixedOnlyForCompact={fixedOnlyForCompact}
          showPlusSign={showPlusSign}
          showMinusSign={showMinusSign}
          textStyle={styles.textStyle}
          // (optional)  using the font-variant to avoid layout jumping when the number is updated
          numberStyle={{
            fontVariant: ["tabular-nums"],
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
            variant={useGrouping ? "primary" : "secondary"}
            title="useGrouping"
            onPress={() => setUseGrouping(!useGrouping)}
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
        <View style={{ flexDirection: "row" }}>
          <Button
            variant={locale === "en-US" ? "primary" : "secondary"}
            title="locale en-US"
            onPress={() => setLocale("en-US")}
          />
          <Button
            variant={locale === "de-DE" ? "primary" : "secondary"}
            title="locale de-DE"
            onPress={() => setLocale("de-DE")}
          />
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    flexGrow: 1,
    alignItems: "center",
    width: Dimensions.get("screen").width,
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
  textStyle: {
    color: "black",
    fontWeight: "bold",
    paddingHorizontal: 1,
    fontSize: 28,
  },
  numberContainer: {
    backgroundColor: "rgba(0,0,0,0.2)",
    borderRadius: 10,
    padding: 32,
    marginVertical: 24,
  },
});
