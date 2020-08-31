import React from 'react'
import { animated, useSpring } from 'react-spring'
import styled from 'styled-components'
import { MQ } from '../theme/mediaqueries'

const Container = styled.div`
    padding: 24px 16px;
    text-align: center;
    max-width: 112px;
    background-color: ${({ theme }) => theme.colors.gray0};
    @media ${MQ.sm} {
        padding: 16px 8px;
    }
`

const Circle = styled.div`
    position: relative;
    margin-bottom: 14px;
`

const Title = styled.h4`
    font-size: 12px;
    color: white;
`

const Image = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -54%);
    @media ${MQ.sm} {
        transform: translate(-50%, -67%);
    }
`

const circlePath = `M18 2.0845
a 15.9155 15.9155 0 0 1 0 31.831
a 15.9155 15.9155 0 0 1 0 -31.831`

export const Donut = ({ title, value, img }) => {
    const stroke = useSpring({ value: `${value},100` })
    return (
        <Container>
            <Circle>
                <svg viewBox="0 0 36 36" width="68">
                    <animated.path
                        fill="none"
                        strokeWidth={1}
                        stroke="white"
                        strokeDasharray={stroke.value}
                        d={circlePath}
                    />
                </svg>
                <Image src={img} />
            </Circle>
            <Title>{title}</Title>
        </Container>
    )
}
