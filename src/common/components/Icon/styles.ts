import styled from "styled-components/native";
import { IconProps } from "./types";

export const Container = styled.Image<Partial<IconProps>>`
  max-width: ${({ size }) => size}px;
  min-width: ${({ size }) => size}px;
  
  max-height: ${({ size }) => size}px;
  min-height: ${({ size }) => size}px;
`;