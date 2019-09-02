import React from 'react'
import Navbar from '../home/nav'
import { movie } from '../interfaces'
import constants from '../constants'
import axios from 'axios'
//some comment
type MyProps = {}
type MyState = {
    movies: [{ Title: string; Poster: string }]
    title: string
    year: string
}

class Movies extends React.Component<MyProps, MyState> {
    movieList: [] = []
    omdb: movie['omdb'] = constants.OMDB_URL
    constructor(props: any) {
        super(props)
        this.state = {
            movies: [{ Title: '', Poster: '' }],
            title: 'Enter a title',
            year: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event: any) {
        const value = event.target.value
        console.log(this.state.title)
        this.setState({ ...this.state, [event.target.name]: value })
    }
    handleSubmit(event: any) {
        axios.get(this.omdb + 's=' + this.state.title).then(res => {
            const movies = res.data.Search
            this.setState({ movies })
            console.log(this.state.movies)
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
                            <h1 className="main-title">MovieSearch</h1>
                            <form
                                className="search-form"
                                onSubmit={this.handleSubmit}
                            >
                                <label className="is-hidden">
                                    Search a title
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    id="search"
                                    value={this.state.title}
                                    onChange={this.handleChange.bind(this)}
                                />
                                <label className="is-hidden">Any Year</label>
                                <input
                                    type="text"
                                    name="year"
                                    id="year"
                                    value={this.state.year}
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
                    <div className="main-content clearfix">
                        <ul id="movie-list" className="movie-list"></ul>
                        {this.state.movies.map((movie: any, idx: number) => (
                            <li key={idx} className="single-movie">
                                <div className="poster-wrap">
                                    <img src={movie.Poster} />
                                </div>
                                {movie.Title}
                            </li>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}
export default Movies
