import React, { useRef } from 'react'
import './App.css'
import { Parallax } from 'react-spring/renderprops-addons'
import {
    Header,
    Hero,
    Hello,
    Works,
    Degrees,
    Skills,
    Footer,
} from './components'
import { useMediaQuerie } from './hooks/useMediaQuerie'

function App() {
    const parallax = useRef()
    const querie = useMediaQuerie()
    const pages = () => {
        const sizes = { sm: 11.5, md: 9.1, lg: 8.1 }
        return sizes[querie]
    }
    return (
        <div>
            <Parallax pages={pages()} ref={parallax}>
                <Hero />
                <Header parallax={parallax} />
                <Hello />
                <Works />
                <Degrees />
                <Skills />
                <Footer />
            </Parallax>
        </div>
    )
}

export default App
