import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components/native";

import { defaultTheme } from "./src/common/constants/styles/theme/defaultTheme";

import BottomTabNavigator from "./src/navigation/BottomTabNavigator/index";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
};
