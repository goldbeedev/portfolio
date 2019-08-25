import React from 'react'
import Navbar from './nav'
import Typist from 'react-typist'

type MyState = {}
type MyProps = {}

class Header extends React.Component<MyProps, MyState> {
    constructor(props: any) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <header className="App-header">
                <h1>
                    <Typist cursor={{ hideWhenDone: true }}>
                        Hi I'm Justin, I love to code.
                        <Typist.Backspace count={15} delay={500} />I build
                        things.
                    </Typist>
                </h1>

                <Navbar></Navbar>
            </header>
        )
    }
}

export default Header
