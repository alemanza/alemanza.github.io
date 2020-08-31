import React from 'react'
import styled from 'styled-components'
import { ParallaxLayer } from 'react-spring/renderprops-addons'
import { TitleLine, Container } from '.'
import { Icon } from './Icon'
import { WORKS, WORKS_TITLE } from '../data'
import Line from '../assets/images/line.svg'
import { MQ } from '../theme/mediaqueries'
import { useMediaQuerie } from '../hooks/useMediaQuerie'

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
const WorkOutherContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 180px;
    @media ${MQ.sm} {
        margin-bottom: 80px;
    }
`

const WorkContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    ${({ reverse }) => reverse && 'flex-direction: row-reverse'};
    @media ${MQ.sm} {
        flex-direction: column;
        ${({ reverse }) => reverse && 'flex-direction: column'};
    }
`

const CardContainer = styled.figure`
    position: relative;
    padding: 48px;
    height: fit-content;
    box-sizing: border-box;
    width: calc(50% - 4px);
    background-color: ${({ theme }) => theme.colors.gray0};
    @media ${MQ.md} {
        padding: 32px;
    }
    @media ${MQ.sm} {
        padding: 24px;
        width: 100%;
    }
`

const CardImage = styled.img`
    background-color: ${({ theme }) => theme.colors.gray0};
`

const CardLogo = styled.img`
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0 80px 40px rgba(${({ theme }) => theme.colors.blackRGBA}, 0.3);
    width: 120px;
    position: absolute;
    bottom: 24px;
    ${({ left }) => (left ? 'left: 24px;' : 'right: 24px;')}
    @media ${MQ.sm} {
        bottom: 12px;
        ${({ left }) => left && 'right: 24px; left: auto;'}
        right: 12px;
    }
`

const DatesAndLinkContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Dates = styled.h6`
    color: ${({ theme }) => theme.colors.gray3};
    font-size: 20px;
    line-height: 28px;
    font-weight: 400;
`

const LinkContainer = styled.a`
    transition: color 0.2s ease-out;
    text-decoration: none;
    display: inline-block;
    padding: 4px;
    color: ${({ theme }) => theme.colors.gray3};
    &:hover {
        color: ${({ theme }) => theme.colors.gray5};
    }
`

const WorkTitle = styled.h3`
    color: ${({ theme }) => theme.colors.gray5};
    margin-bottom: 8px;
    font-size: 42px;
    @media ${MQ.md} {
        font-size: 36px;
    }
    @media ${MQ.sm} {
        font-size: 32px;
    }
`

const WorkPosition = styled.h4`
    color: ${({ theme }) => theme.colors.gray4};
    margin-bottom: 32px;
    font-size: 20px;
    line-height: 28px;
    @media ${MQ.sm} {
        font-size: 20px;
    }
`

const Description = styled.p`
    color: ${({ theme }) => theme.colors.gray4};
    margin-bottom: 14px;
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
`

const LineBg = styled.div`
    background-image: url(${Line});
    background-position: center;
    background-size: cover;
    min-height: 150vh;
    width: 100%;
    opacity: 0.5;
`

const isEven = (n) => n % 2 === 0

const Work = (
    { img, logo, dates, name, position, description, link, y },
    index
) => (
    <WorkOutherContainer key={index}>
        <WorkContainer reverse={!isEven(index)} index={index}>
            <CardContainer>
                <CardImage src={img} />
                <CardLogo src={logo} left={!isEven(index)} />
            </CardContainer>
            <CardContainer>
                <DatesAndLinkContainer>
                    <Dates>{dates}</Dates>
                    <LinkContainer href={link} target="_blank">
                        <Icon name="link" />
                    </LinkContainer>
                </DatesAndLinkContainer>
                <WorkTitle>{name}</WorkTitle>
                <WorkPosition>{position}</WorkPosition>
                {description.map((item, index) => (
                    <Description key={`desc-${index}`}>{item}</Description>
                ))}
            </CardContainer>
        </WorkContainer>
    </WorkOutherContainer>
)

export const Works = () => {
    const querie = useMediaQuerie()
    const offset = () => {
        const sizes = { sm: 3.3, md: 3.2, lg: 3.1 }
        return sizes[querie]
    }
    return (
        <>
            <ParallaxLayer offset={offset()} speed={0}>
                <Container>
                    <Title>{WORKS_TITLE}</Title>
                </Container>
            </ParallaxLayer>
            <ParallaxLayer offset={offset() + 0.2} speed={-0.3} factor={4}>
                <LineBg />
            </ParallaxLayer>
            <ParallaxLayer offset={offset() + 0.6} speed={0.7} factor={3}>
                {WORKS.map((props, index) => Work(props, index))}
            </ParallaxLayer>
        </>
    )
}
