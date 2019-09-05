import React from 'react'
import Navbar from '../home/nav'
import axios from 'axios'
import { hearthstoneApi } from '../interfaces'
import constants from '../constants'

type MyProps = {}
type MyState = {
    cards: [{ name: string; imgGold: string; flavor: string }]
    card: string
}

class HearthStoneCards extends React.Component<MyProps, MyState> {
    hsapi: hearthstoneApi['apiUrl'] = constants.HEARTHSTONE_URL
    config = {
        headers: {
            'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
            'x-rapidapi-key': process.env.REACT_APP_HEARTHSTONE_API_KEY,
        },
    }
    constructor(props: any) {
        super(props)
        this.state = {
            cards: [{ name: '', imgGold: '', flavor: '' }],
            card: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event: any) {
        const value = event.target.value
        console.log(this.state.card)
        this.setState({ ...this.state, [event.target.name]: value })
    }
    handleSubmit(event: any) {
        axios.get(this.hsapi + `${this.state.card}`, this.config).then(res => {
            const cards = res.data
            this.setState({ cards })
            console.log(this.state.cards)
        })
        event.preventDefault()
    }

    render() {
        return (
            <div className="App-container">
                <Navbar className={'not-home'}></Navbar>
                <div className="movie-search-doc">
                    <div className="main-header">
                        <div className="inner">
                            <h1 className="main-title">
                                Hearthstone Card Search
                            </h1>
                            <form
                                className="search-form"
                                onSubmit={this.handleSubmit}
                            >
                                <label className="is-hidden">
                                    Search for a card
                                </label>
                                <input
                                    type="text"
                                    name="card"
                                    id="search"
                                    value={this.state.card}
                                    onChange={this.handleChange.bind(this)}
                                />
                                <button
                                    type="submit"
                                    id="submit"
                                    className="search-button"
                                >
                                    <i className="material-icons icn-search">
                                        search
                                    </i>
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="main-content">
                        <ul id="movie-list" className="movie-list"></ul>
                        {this.state.cards.map((card: any, idx: number) => (
                            <li key={idx} className="single-card">
                                <div className="card-wrap">
                                    <img src={card.imgGold} />
                                </div>
                                {card.name}
                                <br />
                                {card.flavor}
                            </li>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}
export default HearthStoneCards
