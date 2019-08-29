import React from 'react'
import Typist from 'react-typist'
import Navbar from '../home/nav'
import { Link } from 'react-router-dom'
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
                            <Link to="/movie-search">
                                <img
                                    className="portfolio-pic hvr-grow"
                                    src="../images/moviesearchpic.png"
                                ></img>
                            </Link>
                        </div>
                        <div className="col-sm-4">
                            <Link to="/tictactoe">
                                <img
                                    className="portfolio-pic hvr-grow"
                                    src="../images/tictacpic.png"
                                ></img>
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <Link to="/hearthstonecards">
                                <img
                                    className="portfolio-pic hvr-grow"
                                    src="../images/moviesearchpic.png"
                                ></img>
                            </Link>
                        </div>
                        <div className="col-sm-4">
                            <a href="http://hearthstonetierlist.com">
                                <img
                                    className="portfolio-pic hvr-grow"
                                    src="../images/htlpic.png"
                                ></img>
                            </a>
                        </div>
                        <div className="col-sm-4">
                            <a href="http://lvddslab.com">
                                <img
                                    className="portfolio-pic hvr-grow"
                                    src="../images/lvdds.png"
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
