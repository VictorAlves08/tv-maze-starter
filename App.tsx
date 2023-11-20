import { ThemeProvider } from "styled-components/native";
import { defaultTheme } from "./src/common/constants/styles/theme/defaultTheme";

import { episodeMocked } from "./src/common/constants/mocks/episode.mock";

import Container from "./src/common/components/Container";
import Content from "./src/common/components/Content";
import Text from "./src/common/components/Text/index";
import Spacer from "./src/common/components/Spacer";
import Icon from "./src/common/components/Icon";
import BackButton from "./src/common/components/BackButton";
import Avatar from "./src/common/components/Avatar";
import NotFound from "./src/common/components/NotFound";
import Input from "./src/common/components/Input";
import ShowCover from "./src/common/components/ShowCover";
import EpisodeCover from "./src/common/components/EpisodeCover";
import EpisodeCard from "./src/common/components/EpisodeCard";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>
        <Content>
          <EpisodeCover
            size="large"
            url="https://static.tvmaze.com/uploads/images/medium_landscape/15/38639.jpg"
          />
          <EpisodeCard episode={episodeMocked} />
        </Content>
      </Container>
    </ThemeProvider>
  );
};
