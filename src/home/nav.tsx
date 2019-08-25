import React from 'react'
import Typist from 'react-typist'

const Navbar: React.FC = () => {
    return (
        <nav>
            <ul>
                <Typist cursor={{ hideWhenDone: true }}>
                    <Typist.Delay ms={1000} />
                    <li>Portfolio</li>
                    <Typist.Backspace count={5} delay={200} />
                    <li>Skills</li>
                    <li>Contact</li>
                </Typist>
            </ul>
        </nav>
    )
}

export default Navbar
