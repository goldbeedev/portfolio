import React from 'react'
import Navbar from './nav'
import Typist from 'react-typist'

interface MyState {}
interface MyProps {}

class Header extends React.Component<MyProps, MyState> {
    constructor(props: any) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                <header className="App-container">
                    <h1>
                        <Typist cursor={{ hideWhenDone: true }}>
                            Hi I'm Justin, I love to code.
                            <Typist.Backspace count={15} delay={500} />I build
                            things.
                        </Typist>
                    </h1>
                    <Navbar className={'home'}></Navbar>
                </header>
            </div>
        )
    }
}

export default Header
