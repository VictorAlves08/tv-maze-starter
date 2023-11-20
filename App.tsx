import { ThemeProvider } from "styled-components/native";
import { defaultTheme } from "./src/common/constants/styles/theme/defaultTheme";

import Text from "./src/common/components/Text/index";
import Spacer from "./src/common/components/Spacer";
import Container from "./src/common/components/Container";
import Content from "./src/common/components/Content";
import Icon from "./src/common/components/Icon";
import Avatar from "./src/common/components/Avatar";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>
        <Content>
          <Text size={30} color="alert">
            Running Text Component 1!
          </Text>
          <Spacer height={20} />
          <Icon icon="home" size={40} color="#fff" />
          <Spacer height={20} />
          <Avatar size="large" url="https://i.pravatar.cc/300" />
        </Content>
      </Container>
    </ThemeProvider>
  );
};
