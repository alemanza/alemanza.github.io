import { useState, useEffect } from 'react'
import { WindowSize } from '../theme/mediaqueries'

const getMediaQuerie = () => {
    const { innerWidth: width } = window
    if (width < WindowSize.sm) return 'sm'
    if (width < WindowSize.md) return 'md'
    return 'lg'
}
export const useMediaQuerie = () => {
    const [windowWidth, setWindowWidth] = useState(getMediaQuerie())

    useEffect(() => {
        function handleResize() {
            setWindowWidth(getMediaQuerie())
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return windowWidth
}
