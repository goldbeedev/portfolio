import React from 'react'
import Typist from 'react-typist'
import Navbar from '../home/nav'
class Portfolio extends React.Component {
    render() {
        return (
            <div className="App-container">
                <Navbar className={'not-home'}></Navbar>
                <Typist cursor={{ hideWhenDone: true }}>
                    <h1>Skills</h1>
                </Typist>
                <div className="container">
                    <div className="row">
                        <div className="col-md">
                            <Typist cursor={{ hideWhenDone: true }}>
                                <Typist.Delay ms={1000} />
                                <ul>
                                    <h2>Experienced</h2>
                                    <li>JavaScript</li>
                                    <li>jQuery</li>
                                    <li>HTML</li>
                                    <li>S/CSS</li>
                                </ul>
                            </Typist>
                        </div>
                        <div className="col-md">
                            <Typist cursor={{ hideWhenDone: true }}>
                                <Typist.Delay ms={4000} />
                                <ul>
                                    <h2>Competent</h2>
                                    <li>Angular</li>
                                    <li>React</li>
                                    <li>Git</li>
                                    <li>Node</li>
                                    <li>GraphQL</li>
                                    <li>TypeScript</li>
                                    <li>Test Suites</li>
                                    <li>PHP</li>
                                </ul>
                            </Typist>
                        </div>
                        <div className="col-md">
                            <Typist cursor={{ hideWhenDone: true }}>
                                <Typist.Delay ms={8000} />
                                <ul>
                                    <h2>Some Exposure</h2>
                                    <li>C# - Microservices</li>
                                    <li>AWS</li>
                                    <li>Express</li>
                                    <li>MongoDB/DynamoDB</li>
                                </ul>
                            </Typist>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Portfolio
