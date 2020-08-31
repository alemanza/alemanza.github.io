import React, { useState } from 'react'
import styled from 'styled-components'
import { ParallaxLayer } from 'react-spring/renderprops-addons'
import { Container } from '../components'
import { Donut } from './Donut'
import { TitleLine } from '../components/TitleLine'
import { SKILLS1, SKILLS2, SKILLS3 } from '../data'
import { Waypoint } from 'react-waypoint'
import { MQ } from '../theme/mediaqueries'
import { useMediaQuerie } from '../hooks/useMediaQuerie'

const SkillsContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

const Title = styled(TitleLine)`
    max-width: 508px;
    font-size: 64px;
    margin-bottom: 120px;
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
const SkillCategoryContainer = styled.div`
    @media ${MQ.sm} {
        width: 100%;
    }
`

const SkillCategory = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 112px);
    grid-gap: 8px;
    margin-bottom: 80px;
    @media ${MQ.sm} {
        grid-template-columns: repeat(3, 1fr);
        font-size: 36px;
    }
`

const SkillTitle = styled.h4`
    font-size: 24px;
    color: white;
    margin-bottom: 16px;
`

export const Skills = () => {
    const [newValue, setNewValue] = useState(false)
    const [newValue1, setNewValue1] = useState(false)
    const [newValue2, setNewValue2] = useState(false)
    const querie = useMediaQuerie()
    const offset = () => {
        const sizes = { sm: 9, md: 7.6, lg: 6.8 }
        return sizes[querie]
    }

    const BOTTOM_OFFSET = '200px'
    return (
        <ParallaxLayer offset={offset()} speed={0.2}>
            <Container>
                <Title>Mis Skills</Title>
            </Container>
            <SkillsContainer>
                <Waypoint
                    onEnter={() => {
                        setNewValue(true)
                    }}
                    bottomOffset={BOTTOM_OFFSET}>
                    <SkillCategoryContainer>
                        <SkillTitle>Frontend</SkillTitle>
                        <SkillCategory>
                            {SKILLS1.map(({ title, img, value }) => (
                                <Donut
                                    key={title}
                                    value={newValue ? value : 0}
                                    title={title}
                                    img={img}
                                />
                            ))}
                        </SkillCategory>
                    </SkillCategoryContainer>
                </Waypoint>
                <Waypoint
                    onEnter={() => {
                        setNewValue1(true)
                    }}
                    bottomOffset={BOTTOM_OFFSET}>
                    <SkillCategoryContainer>
                        <SkillTitle>Backend</SkillTitle>
                        <SkillCategory>
                            {SKILLS2.map(({ title, img, value }) => (
                                <Donut
                                    key={title}
                                    value={newValue1 ? value : 0}
                                    title={title}
                                    img={img}
                                />
                            ))}
                        </SkillCategory>
                    </SkillCategoryContainer>
                </Waypoint>
                <Waypoint
                    onEnter={() => {
                        setNewValue2(true)
                    }}
                    bottomOffset={BOTTOM_OFFSET}>
                    <SkillCategoryContainer>
                        <SkillTitle>Otros</SkillTitle>
                        <SkillCategory>
                            {SKILLS3.map(({ title, img, value }) => (
                                <Donut
                                    key={title}
                                    value={newValue2 ? value : 0}
                                    title={title}
                                    img={img}
                                />
                            ))}
                        </SkillCategory>
                    </SkillCategoryContainer>
                </Waypoint>
            </SkillsContainer>
        </ParallaxLayer>
    )
}
