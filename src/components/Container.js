import styled from 'styled-components'
import { MQ } from '../theme/mediaqueries'

export const Container = styled.div`
    padding: 0 40px;
    box-sizing: content-box;
    max-width: 1024px;
    margin: auto;
    @media ${MQ.md} {
        padding: 0 32px;
    }
    @media ${MQ.sm} {
        padding: 0 24px;
    }
`
