import React from 'react'
import styled from 'styled-components'
import { ParallaxLayer } from 'react-spring/renderprops-addons'
import { Container } from './'
import { SlideIn } from '../components/SlideIn'
import me from '../assets/images/me.jpg'
import { Icon } from './Icon'
import { SOCIAL } from '../data'
import { MQ } from '../theme/mediaqueries'

const Title = styled(SlideIn)`
    position: relative;
    z-index: 1;
    margin-top: 120px;
    font-size: 130px;
    font-weight: 500;
    line-height: 118px;
    text-align: center;
    animation-delay: 0.6s;
    text-shadow: 0 10px 20px rgba(${({ theme }) => theme.colors.blackRGBA}, 0.3);
    @media ${MQ.md} {
        font-size: 100px;
        line-height: 90px;
        margin-top: 90px;
    }
    @media ${MQ.sm} {
        font-size: 40px;
        line-height: 42px;
        max-width: 400px;
        margin: auto;
        margin-top: 33%;
    }
`

const SplashImg = styled.img`
    margin: auto;
    margin-top: 296px;
    padding: 0 40px;
    width: 100%;
    @media ${MQ.md} {
        margin-top: 230px;
    }
    @media ${MQ.sm} {
        margin-top: calc(33% + 76px);
    }
`

const SplashImgContainer = styled(SlideIn)`
    max-width: 610px;
    width: 100%;
    animation-delay: 1s;
    margin: auto;
    @media ${MQ.md} {
        max-width: 510px;
    }
    @media ${MQ.sm} {
        max-width: 290px;
    }
`

const ContainerReverse = styled(Container)`
    display: flex;
    flex-direction: row-reverse;
`

const SocialContainer = styled.div`
    display: flex;
    min-height: 100vh;
    justify-content: center;
    flex-direction: column;
`

const SocialIcon = styled.a`
    transition: color 0.2s ease-out;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.gray3};
    margin-bottom: 16px;
    &:hover {
        color: ${({ theme }) => theme.colors.white};
    }
`

export const Hero = () => {
    return (
        <>
            <ParallaxLayer
                offset={0}
                style={{ zIndex: 1, pointerEvents: 'none' }}>
                <Container>
                    <Title as="h1">FRONTEND DEVELOPER</Title>
                </Container>
            </ParallaxLayer>

            <ParallaxLayer offset={0} speed={1.2}>
                <SplashImgContainer as="figure">
                    <SplashImg src={me} />
                </SplashImgContainer>
            </ParallaxLayer>

            <ParallaxLayer offset={0} speed={-0.1}>
                <ContainerReverse>
                    <SocialContainer>
                        {SOCIAL.map(({ icon, url }) => (
                            <SocialIcon href={url} key={icon} target="_blank">
                                <Icon name={icon} color="white" />
                            </SocialIcon>
                        ))}
                    </SocialContainer>
                </ContainerReverse>
            </ParallaxLayer>
        </>
    )
}
