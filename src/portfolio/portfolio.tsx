import React from 'react'
import Typist from 'react-typist'
import Navbar from '../home/nav'
class Portfolio extends React.Component {
    render() {
        return (
            <div className="App-container">
                <Navbar className={'not-home'}></Navbar>
                <Typist cursor={{ hideWhenDone: true }}>
                    <h1>Portfolio</h1>
                </Typist>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <a href="http://myaccount.glidewelldental.com">
                                <img
                                    className="portfolio-pic hvr-grow"
                                    src="../images/myaccount.png"
                                ></img>
                            </a>
                        </div>
                        <div className="col-sm-4">
                            <a href="http://myaccount.glidewelldental.com">
                                <img
                                    className="portfolio-pic hvr-grow"
                                    src="../images/htlpic.png"
                                ></img>
                            </a>
                        </div>
                        <div className="col-sm-4">
                            <a href="http://myaccount.glidewelldental.com">
                                <img
                                    className="portfolio-pic hvr-grow"
                                    src="../images/myaccount.png"
                                ></img>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Portfolio
