import { ThemeProvider } from "styled-components/native";
import { defaultTheme } from "./src/common/constants/styles/theme/defaultTheme";
import { View } from "react-native";

import Text from "./src/common/components/Text/index";
import Spacer from "./src/common/components/Spacer";
import Container from "./src/common/components/Container";
import Content from "./src/common/components/Content";
import Icon from "./src/common/components/Icon";
import BackButton from "./src/common/components/BackButton";
import Avatar from "./src/common/components/Avatar";
import NotFound from "./src/common/components/NotFound";
import Input from "./src/common/components/Input";
import ShowCover from "./src/common/components/ShowCover";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>
        <Content>
          <BackButton
            onPress={() => {
              console.log("Clicked!");
            }}
          />
          <Text size={30} color="alert">
            Running Text Component 1!
          </Text>
          <Input />
          <Icon icon="home" size={40} color="#fff" />
          <Avatar size="large" url="https://i.pravatar.cc/300" />
          <NotFound />
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <ShowCover
              onPress={() => { }}
              url="https://static.tvmaze.com/uploads/images/medium_portrait/1/4600.jpg"
              title="The Flash"
            />
            <ShowCover
              onPress={() => { }}
              url="https://static.tvmaze.com/uploads/images/medium_portrait/1/4600.jpg"
              title="The Flash"
            />
          </View>
        </Content>
      </Container>
    </ThemeProvider>
  );
};
