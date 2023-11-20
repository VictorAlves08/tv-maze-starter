import React, { useMemo } from "react";

import { Pressable, useWindowDimensions } from "react-native";
import { useTheme } from "styled-components/native";
import Icon from "../Icon";
import Spacer from "../Spacer";
import Text from "../Text";

import {
    Container,
    AbsoluteIcon,
    CenterIconAndImage,
    ShowCoverImage,
} from "./styles";
import { ShowCoverProps } from "./types";

//Para conseguir o aspect ratio de determinada imagem basta dividir a altura pela largura.
const aspectRatio = 9 / 12.5;
const widthPercentage = 0.45;

const ShowCover = ({ onPress, title, url }: ShowCoverProps) => {
    const { width } = useWindowDimensions();
    const { spacing, colors } = useTheme();

    // Armazena um calculo na memoria, nesse caso quando o tamanho da tela mudar (width)
    const widthShowCover = useMemo(() => width * widthPercentage, [width]);

    return (
        <Pressable
            onPress={onPress}
            accessibilityLabel={title}
            accessibilityRole="button"
        >
            <Container width={widthShowCover}>
                <CenterIconAndImage>
                    <ShowCoverImage
                        hasBackground={!url}
                        source={{ uri: url }}
                        resizeMode="contain"
                        style={{
                            aspectRatio,
                            width: widthShowCover,
                        }}
                    />
                    {!url && (
                        <AbsoluteIcon>
                            <Icon icon="picture" size={40} color={colors.caption} />
                        </AbsoluteIcon>
                    )}
                </CenterIconAndImage>
                {!!title && (
                    <>
                        <Spacer height={spacing.sm} />
                        <Text numberOfLines={1} color="caption">
                            {title}
                        </Text>
                    </>
                )}
            </Container>
        </Pressable>
    );
};

export default React.memo(ShowCover); // memo, verifica as props do componente, para atualizar ou não. é um HOC