import React from 'react'
import styled from 'styled-components'
import { ParallaxLayer } from 'react-spring/renderprops-addons'
import { Container } from '../components'
import { TitleLine } from '../components/TitleLine'
import { MQ } from '../theme/mediaqueries'
import { useMediaQuerie } from '../hooks/useMediaQuerie'

const TitleContainer = styled(ParallaxLayer)`
    z-index: 1;
    min-height: 100vh;
`

const BgFirstText = styled.h3`
    font-size: 540px;
    line-height: 130%;
    font-family: 'Oswald', sans-serif;
    color: ${({ theme }) => theme.colors.gray0};
    text-align: center;
    @media ${MQ.md} {
        font-size: 400px;
    }
    @media ${MQ.sm} {
        font-size: 170px;
    }
`

const FirstText = styled.h6`
    font-size: 42px;
    max-width: 850px;
    line-height: 1.4;
    margin: auto;
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
    @media ${MQ.md} {
        font-size: 32px;
    }
    @media ${MQ.sm} {
        font-size: 20px;
        /* padding: 0 24px; */
    }
`

const SecondContainer = styled(Container)`
    display: flex;
    max-width: 850px;
`

const SecondContainerText = styled.div`
    max-width: 413px;
    @media ${MQ.sm} {
        max-width: 100%;
    }
`

const SecondTitle = styled(TitleLine)`
    font-size: 24px;
    flex: 1;
    &::before {
        width: 36px;
        margin-bottom: 16px;
    }
`
const SecondText = styled.p`
    flex: 1;
    font-size: 20px;
    line-height: 32px;
    margin-bottom: 48px;
    color: ${({ theme }) => theme.colors.gray4};
    @media ${MQ.sm} {
        font-size: 18px;
    }
`

export const Hello = () => {
    const querie = useMediaQuerie()
    const hiOffset = () => {
        const sizes = { sm: 1, md: 1.1, lg: 1.2 }
        return sizes[querie]
    }
    const moreOffsetTitle = () => {
        const sizes = { sm: 2, md: 2, lg: 2.05 }
        return sizes[querie]
    }
    const moreOffsetText = () => {
        const sizes = { sm: 2.2, md: 2, lg: 2 }
        return sizes[querie]
    }
    return (
        <>
            <TitleContainer offset={1} speed={0.1}>
                <BgFirstText>HOLA</BgFirstText>
            </TitleContainer>
            <TitleContainer offset={hiOffset()} speed={0.8}>
                <Container>
                    <FirstText>
                        Mi nombre es <strong>Alejandro Manza</strong>, nací en
                        Argentina, llevo 6 años de experiencia en frontend y mi
                        objectivo como profesional sigue siendo aprender
                        constantemente, manteniéndome actualizado a las últimas
                        tecnologías.
                    </FirstText>
                </Container>
            </TitleContainer>

            <ParallaxLayer offset={moreOffsetTitle()} speed={0.2}>
                <SecondContainer>
                    <SecondTitle>Más sobre mi</SecondTitle>
                </SecondContainer>
            </ParallaxLayer>
            <ParallaxLayer offset={moreOffsetText()} speed={0.6}>
                <SecondContainer
                    style={
                        querie !== 'sm' ? { flexDirection: 'row-reverse' } : {}
                    }>
                    <SecondContainerText>
                        <SecondText>
                            Me considero un apasionado en lo que hago, una
                            persona muy detallista que piensa como usuario cada
                            diseño, buscando el mejor resultado en una UI pixel
                            perfect con un plus en transiciones y animaciones.
                        </SecondText>
                        <SecondText>
                            Soy muy sociable, me gusta el trabajo en equipo y
                            también disfrutar de mi tiempo libre. Ya sea con
                            proyectos personales (donde se aprende
                            constantemente) como tocando la guitarra y viajando
                            con mi pareja.
                        </SecondText>
                    </SecondContainerText>
                </SecondContainer>
            </ParallaxLayer>
        </>
    )
}
