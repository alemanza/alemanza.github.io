import React from 'react'
import Proptypes from 'prop-types'
import styled from 'styled-components'

const StyledIcon = styled.i`
    font-size: ${({ size }) => `${size}px`};
    color: ${({ theme, color }) => theme.colors[color]};
`

export const Icon = ({ name, size = 24, color }) => {
    return <StyledIcon className={`icon-${name}`} size={size} color={color} />
}

Icon.propTypes = {
    name: Proptypes.string.isRequired,
    size: Proptypes.number,
    color: Proptypes.string,
}
