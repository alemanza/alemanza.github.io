import styled from 'styled-components'

export const TitleLine = styled.h3`
    &::before {
        content: '';
        display: block;
        background-color: ${({ theme }) => theme.colors.white};
        height: 1px;
        width: 72px;
    }
`
