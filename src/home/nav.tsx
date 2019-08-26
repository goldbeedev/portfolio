import React from 'react'
import Typist from 'react-typist'
import { Link } from 'react-router-dom'
type MyProps = { className: string }

class Navbar extends React.Component<MyProps> {
    constructor(props: MyProps) {
        super(props)
        console.log(this.props)
    }
    render() {
        return (
            <nav className={this.props.className}>
                <ul>
                    <Typist cursor={{ hideWhenDone: true }}>
                        <Typist.Delay ms={1000} />
                        <li>
                            <Link to="/portfolio">Portfolio</Link>
                        </li>
                        <li>
                            <Link to="/skills">Skills</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </Typist>
                </ul>
            </nav>
        )
    }
}

export default Navbar
