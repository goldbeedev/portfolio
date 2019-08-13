import React, { ReactNode } from 'react'
import logo from '../images/headshotpencil.png'
import Navbar from './nav'

class Header extends React.Component<ReactNode> {
    logo: any = logo
    // constructor(props: any) {
    //     super(props)
    // }

    render() {
        return (
            <header className="App-header">
                <img src={this.logo} className="App-logo" alt="logo" />
                <p>
                    <h1>Hi I'm Justin, I code things.</h1>
                </p>
                <Navbar></Navbar>
            </header>
        )
    }
}

export default Header
