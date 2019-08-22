import React from 'react'
import Navbar from './nav'
import Typist from 'react-typist'

type MyState = { letters: string[]; letter: any }
type MyProps = {}

class Header extends React.Component<MyProps, MyState> {
    lettersView: string[] = []
    constructor(props: any) {
        super(props)
        this.state = {
            letters: [
                'H',
                'i',
                ' ',
                'I',
                "'",
                'm',
                'J',
                'u',
                's',
                't',
                'i',
                'n',
                '\n',
                'b',
                'u',
                'i',
                'l',
                'd',
                ' ',
                't',
                'h',
                'i',
                'n',
                'g',
                's',
            ],
            letter: null,
        }
    }

    render() {
        return (
            <header className="App-header">
                {`${this.loopThroughLetters()}`}
                <Navbar></Navbar>
            </header>
        )
    }
}

export default Header
