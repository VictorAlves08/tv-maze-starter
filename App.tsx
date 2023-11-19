import { ThemeProvider } from "styled-components/native";
import { defaultTheme } from "./src/common/constants/styles/theme/defaultTheme";

import Text from "./src/common/components/Text/index";
import Spacer from "./src/common/components/Spacer";
import Container from "./src/common/components/Container";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>
        <Text size={30} color="alert">
          Oi Leticia to criando um app!
        </Text>
        <Spacer height={20} />
        <Text size={30} color="onSecondary">
          Running Text Component!
        </Text>
      </Container>
    </ThemeProvider>
  );
};
