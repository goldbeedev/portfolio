import React from 'react'
import Typist from 'react-typist'
import Navbar from '../home/nav'
class Contact extends React.Component {
    render() {
        return (
            <div className="App-container">
                <Navbar className={'not-home'}></Navbar>
                <h1>
                    <a href="mailto:goldbee500@gmail.com?subject=Hi Justin!">
                        <img
                            className="contact-icon hvr-grow"
                            src="../images/Gmail_Icon.png"
                            alt=""
                        />
                    </a>
                    <a href="https://github.com/goldbeedev">
                        <img
                            className="contact-icon hvr-grow"
                            src="../images/github-icon.png"
                            alt=""
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/justin-goldby-b0885b39/">
                        <img
                            className="contact-icon hvr-grow"
                            src="../images/linkedin-icon.png"
                            alt=""
                        />
                    </a>
                </h1>
            </div>
        )
    }
}
export default Contact
