import React from 'react'
import Typist from 'react-typist'
import Navbar from '../home/nav'
class Contact extends React.Component {
    render() {
        return (
            <div className="App-container">
                <Navbar className={'not-home'}></Navbar>
                <h1>
                    <img
                        className="contact-icon"
                        src="../images/Gmail_Icon.png"
                        alt=""
                    />
                    <img
                        className="contact-icon"
                        src="../images/github-icon.png"
                        alt=""
                    />
                    <img
                        className="contact-icon"
                        src="../images/linkedin-icon.png"
                        alt=""
                    />
                </h1>
            </div>
        )
    }
}
export default Contact
