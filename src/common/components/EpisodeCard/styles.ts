import styled from "styled-components/native";
import Text from "../Text";

export const Container = styled.View`
  margin-bottom: ${({ theme }) => theme.spacing.md}px;
`;

export const RowEpisode = styled.Pressable`
  flex-direction: row;
  align-items: center;
`;

export const TitleEpisode = styled(Text)`
  font-weight: bold;
`;

export const ContainerTitleEpisode = styled.View`
  flex: 1;
`;