import { ThemeProvider } from "styled-components/native";
import { defaultTheme } from "./src/common/constants/styles/theme/defaultTheme";

import Text from "./src/common/components/Text/index";
import Spacer from "./src/common/components/Spacer";
import Container from "./src/common/components/Container";
import Content from "./src/common/components/Content";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>
        <Content>
          <Text size={30} color="alert">
            Running Text Component 1!
          </Text>
          <Spacer height={20} />
          <Text size={30} color="onSecondary">
            Running Text Component 2!
          </Text>
        </Content>
      </Container>
    </ThemeProvider>
  );
};
