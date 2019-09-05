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
                            <div>
                                <p>Glidewell My Account</p>
                                <ul className="portfolio-list">
                                    <li>Angular 7</li>
                                    <li>AWS</li>
                                    <li>C# Microservices</li>
                                    <li>TypeScript</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <Link to="/movie-search">
                                <img
                                    className="portfolio-pic hvr-grow"
                                    src="../images/moviesearchpic.png"
                                ></img>
                            </Link>
                            <div>
                                <p>Moviesearch Api</p>
                                <ul className="portfolio-list">
                                    <li>ReactJS</li>
                                    <li>Axios</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <a href="https://glidewell.io/roi-calculator/">
                                <img
                                    className="portfolio-pic hvr-grow"
                                    src="../images/roi-calc.png"
                                ></img>
                            </a>
                            <div>
                                <p>Glidewell.io ROI Calculator</p>
                                <ul className="portfolio-list">
                                    <li>JavaScript/jQuery</li>
                                    <li>AWS</li>
                                    <li>PHP</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <Link to="/hearthstonecards">
                                <img
                                    className="portfolio-pic hvr-grow"
                                    src="../images/hearthstonecard.png"
                                ></img>
                            </Link>
                            <div>
                                <p>Hearthstone Card Search</p>
                                <ul className="portfolio-list">
                                    <li>ReactJS</li>
                                    <li>AWS</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <a href="http://hearthstonetierlist.com">
                                <img
                                    className="portfolio-pic hvr-grow"
                                    src="../images/htlpic.png"
                                ></img>
                            </a>
                            <div>
                                <p>Hearthstone Tier List</p>
                                <ul className="portfolio-list">
                                    <li>AngularJS</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <a href="http://lvddslab.com">
                                <img
                                    className="portfolio-pic hvr-grow"
                                    src="../images/lvdds.png"
                                ></img>
                            </a>
                            <div>
                                <p>LVDDS Lab</p>
                                <ul className="portfolio-list">
                                    <li>Wordpress</li>
                                    <li>AWS</li>
                                    <li>PHP</li>
                                    <li>JavaScript</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <a href="https://github.com/goldbeedev/portfolio">
                                <img
                                    className="portfolio-pic hvr-grow"
                                    src="../images/portfolio.png"
                                ></img>
                            </a>
                            <div>
                                <p>This Site Repo</p>
                                <ul className="portfolio-list">
                                    <li>ReactJS</li>
                                    <li>TypeScript</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Portfolio
