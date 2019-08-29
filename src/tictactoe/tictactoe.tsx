import React from 'react'
import Navbar from '../home/nav'
class TicTacToe extends React.Component {
    render() {
        return (
            <div className="App-container">
                <Navbar className={'not-home'}></Navbar>
                <h1>
                    <img
                        className="contact-icon hvr-grow"
                        src="../images/Gmail_Icon.png"
                        alt=""
                    />
                    <img
                        className="contact-icon hvr-grow"
                        src="../images/github-icon.png"
                        alt=""
                    />
                    <img
                        className="contact-icon hvr-grow"
                        src="../images/linkedin-icon.png"
                        alt=""
                    />
                </h1>
            </div>
        )
    }
}
export default TicTacToe
