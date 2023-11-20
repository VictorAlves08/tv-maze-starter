import { Platform } from "react-native";
import styled from "styled-components/native";

const typePlatform = {
    IOS: "ios",
    ANDROID: "android"
};

export const Content = styled.TextInput`
  font-size: 14px;
  padding: ${(props) => Platform.OS === typePlatform.IOS ? props.theme.spacing.sm : props.theme.spacing.md}px;
  border-radius: ${(props) => props.theme.borders.radius.small}px;
  background-color: ${(props) => props.theme.colors.surface};
  color: ${(props) => props.theme.colors.caption};
  padding-left: ${Platform.OS === typePlatform.IOS ? "35px" : "50px"};
  padding-right: ${Platform.OS === typePlatform.IOS ? "35px" : "50px"};
`;

export const Container = styled.View`
  justify-content: center;
`;

export const AbsoluteIcon = styled.View`
  position: absolute;
  left: ${(props) => Platform.OS === typePlatform.IOS ? props.theme.spacing.sm : props.theme.spacing.md}px;
`;

export const AbsoluteLoading = styled.View`
  position: absolute;
  right: ${(props) => Platform.OS === typePlatform.IOS ? props.theme.spacing.sm : props.theme.spacing.md}px;
`;