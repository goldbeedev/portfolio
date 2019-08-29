import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './main.scss'
import App from './App'
import * as serviceWorker from './serviceWorker'
import Contact from './contact/contact'
import Skills from './skills/skills'
import Portfolio from './portfolio/portfolio'
import Movies from './movies/movies'
import TicTacToe from './tictactoe/tictactoe'
import HearthstoneCards from './hearthstonecards/hearthstonecards'

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/contact" component={Contact} />
            <Route path="/skills" component={Skills} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/movie-search" component={Movies} />
            <Route path="/tictactoe" component={TicTacToe} />
            <Route path="/hearthstonecards" component={HearthstoneCards} />
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
