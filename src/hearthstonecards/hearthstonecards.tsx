import React from 'react'
import Navbar from '../home/nav'
import axios from 'axios'
import { hearthstoneApi } from '../interfaces'
import constants from '../constants'
//some comment
type MyProps = {}
type MyState = {
    cards: [{ name: string; imgGold: string; flavor: string }]
    card: string
}

class HearthStoneCards extends React.Component<MyProps, MyState> {
    hsapi: hearthstoneApi['apiUrl'] = constants.HEARTHSTONE_URL
    config = {
        headers: {
            // 'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
            'x-rapidapi-key':
                'Wyu9lukXV3mshwudS8FXOvmdb2QQp1fe48ejsnjGUOMahVmTLc',
        },
    }
    constructor(props: any) {
        super(props)
        this.state = {
            cards: [{ name: '', imgGold: '', flavor: '' }],
            card: 'Enter a card name',
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
        axios
            .get(this.hsapi + `%7B${this.state.card}%7D`, this.config)
            .then(res => {
                const cards = res.data.Search
                this.setState({ cards })
                console.log(this.state.cards)
                // const thing = this.state.movies.map((movie: any, idx: number) => (
                //     <li key={idx}>{movie}</li>
                // ))
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
                                    Search a card
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
                            <li key={idx} className="single-movie">
                                <div className="poster-wrap">
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
