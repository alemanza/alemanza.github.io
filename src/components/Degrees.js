import React from 'react'
import styled from 'styled-components'
import { ParallaxLayer } from 'react-spring/renderprops-addons'
import { Container } from '../components'
import { TitleLine } from '../components/TitleLine'
import { DEGREES } from '../data'
import { MQ } from '../theme/mediaqueries'
import { useMediaQuerie } from '../hooks/useMediaQuerie'

const StyledContainer = styled(Container)`
    display: flex;
`

const Title = styled(TitleLine)`
    max-width: 508px;
    font-size: 64px;
    &::before {
        margin-bottom: 40px;
    }
    @media ${MQ.md} {
        max-width: 360px;
        font-size: 42px;
        &::before {
            margin-bottom: 32px;
        }
    }
    @media ${MQ.sm} {
        font-size: 36px;
        &::before {
            margin-bottom: 24px;
        }
    }
`

const CardContainer = styled.div`
    position: relative;
    padding: 32px;
    box-sizing: border-box;
    max-width: 413px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.gray0};
    @media ${MQ.md} {
        max-width: 330px;
    }
    @media ${MQ.sm} {
        max-width: 100%;
        padding: 24px;
    }
`

const CardDate = styled.span`
    font-size: 18px;
    margin-bottom: 16px;
    color: ${({ theme }) => theme.colors.gray3};
`

const CardTitle = styled.h4`
    font-size: 34px;
    color: ${({ theme }) => theme.colors.white};
    @media ${MQ.md} {
        font-size: 24px;
    }
    @media ${MQ.sm} {
        font-size: 20px;
    }
`

const CardPlace = styled.span`
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray2};
`

export const Degrees = () => {
    const querie = useMediaQuerie()
    const titleOffset = () => {
        const sizes = { sm: 8, md: 6.6, lg: 5.9 }
        return sizes[querie]
    }
    const listOffset = () => {
        const sizes = { sm: 8.3, md: 6.6, lg: 5.99 }
        return sizes[querie]
    }
    return (
        <>
            <ParallaxLayer offset={titleOffset()} speed={0.2}>
                <StyledContainer>
                    <Title>Un resúmen de mis estudios</Title>
                </StyledContainer>
            </ParallaxLayer>

            <ParallaxLayer offset={listOffset()} speed={0.4}>
                {DEGREES.map(({ year, name, place }, index) => (
                    <StyledContainer
                        key={index}
                        style={{
                            flexDirection: 'row-reverse',
                            marginBottom: '20px',
                        }}>
                        <CardContainer>
                            <CardDate>{year}</CardDate>
                            <CardTitle>{name}</CardTitle>
                            <CardPlace>{place}</CardPlace>
                        </CardContainer>
                    </StyledContainer>
                ))}
            </ParallaxLayer>
        </>
    )
}
