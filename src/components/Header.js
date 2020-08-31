import React from 'react'
import styled from 'styled-components'
import { Container } from '../components'
import { ParallaxLayer } from 'react-spring/renderprops-addons'
import Proptypes from 'prop-types'
import { MQ } from '../theme/mediaqueries'

const PContainer = styled(ParallaxLayer)`
    height: 120px !important;
`

const Nav = styled.nav`
    display: flex;
    height: 120px;
    align-items: center;
    justify-content: space-between;
    @media ${MQ.md} {
        height: 80px;
    }
    @media ${MQ.sm} {
        height: 60px;
    }
`

const Item = styled.a`
    transition: color 0.2s ease-out;
    text-decoration: none;
    font-size: 16px;
    padding: 0 4px;
    text-align: center;
    color: ${({ theme }) => theme.colors.gray3};
    ${({ bold }) => bold && 'font-weight: 600; color: white;'}
    &:hover {
        color: ${({ theme }) => theme.colors.white};
    }
    @media ${MQ.md} {
        font-size: 12px;
    }
    @media ${MQ.sm} {
        font-size: 10px;
    }
`

export const Header = ({ parallax }) => {
    return (
        <PContainer>
            <Container as="header">
                <Nav>
                    <Item onClick={() => parallax.current.scrollTo(3)}>
                        MI EXPERIENCIA
                    </Item>
                    <Item bold>ALEJANDRO MANZA</Item>
                    <Item
                        href="mailto:alejandromanza@gmail.com"
                        target="_blank">
                        HABLEMOS
                    </Item>
                </Nav>
            </Container>
        </PContainer>
    )
}

Header.propTypes = {
    parallax: Proptypes.object,
}
