import React from 'react'
import styled from 'styled-components'
import { ParallaxLayer } from 'react-spring/renderprops-addons'
import { Container } from './Container'
import { Icon } from './Icon'
import { MQ } from '../theme/mediaqueries'
import { FOOTER_ITEMS, FOOTER_LINKS } from '../data'
import { useMediaQuerie } from '../hooks/useMediaQuerie'

const FooterContainer = styled(Container)`
    height: auto;
    width: 100%;
    align-items: flex-end;
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
`

const FooterContent = styled.footer`
    border-top: solid 1px ${({ theme }) => theme.colors.gray1};
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 16px 0;
    font-size: 16px;
    @media ${MQ.md} {
        padding: 8px 0;
        font-size: 14px;
    }
    @media ${MQ.sm} {
        align-items: flex-start;
        flex-direction: column;
        padding: 8px 0;
        font-size: 12px;
    }
`

const ItemsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    color: ${({ theme }) => theme.colors.gray3};
`

const ItemContainer = styled.a`
    display: flex;
    flex-wrap: wrap;
    padding: 16px 0;
    margin-right: 32px;
    color: ${({ theme }) => theme.colors.gray3};
    text-decoration: none;
    @media ${MQ.sm} {
        padding: 8px 0;
    }
`

const ItemText = styled.div`
    margin-left: 4px;
    white-space: nowrap;
`

const LinksContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const LinkContainer = styled.a`
    display: flex;
    padding: 16px 0;
    color: white;
    margin-right: 32px;
    text-decoration: none;
    @media ${MQ.sm} {
        padding: 8px 0;
    }
    &:last-child {
        margin-right: 0;
    }
`

export const Footer = () => {
    const querie = useMediaQuerie()
    const offset = () => {
        const sizes = { sm: 10.5, md: 8.1, lg: 7.1 }
        return sizes[querie]
    }
    return (
        <>
            <ParallaxLayer offset={offset()} speed={0}>
                <FooterContainer>
                    <FooterContent>
                        <ItemsContainer>
                            {FOOTER_ITEMS.map(({ text, icon, tel }) => {
                                if (tel)
                                    return (
                                        <ItemContainer href={`tel:${text}`}>
                                            <Icon
                                                name={icon}
                                                size={16}
                                                color="gray3"
                                            />
                                            <ItemText>{text}</ItemText>
                                        </ItemContainer>
                                    )
                                return (
                                    <ItemContainer>
                                        <Icon
                                            name={icon}
                                            size={16}
                                            color="gray3"
                                        />
                                        <ItemText>{text}</ItemText>
                                    </ItemContainer>
                                )
                            })}
                        </ItemsContainer>
                        <LinksContainer>
                            {FOOTER_LINKS.map(({ text, icon, url }) => (
                                <LinkContainer href={url} target="_blank">
                                    <Icon
                                        name={icon}
                                        size={querie === 'sm' ? 16 : 20}
                                        color="white"
                                    />
                                    <ItemText>{text}</ItemText>
                                </LinkContainer>
                            ))}
                        </LinksContainer>
                    </FooterContent>
                </FooterContainer>
            </ParallaxLayer>
        </>
    )
}
