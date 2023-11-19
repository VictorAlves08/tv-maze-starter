import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { defaultTheme } from "./src/common/constants/styles/theme/defaultTheme";

import Text from "./src/common/components/Text/index";
import Spacer from "./src/common/components/Spacer";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <View style={styles.container}>
        <Text size={24} color="brand">
          Running Text Component!
        </Text>
        <Spacer height={20} />
        <Text size={24} color="primary">
          Running Text Component!
        </Text>
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});