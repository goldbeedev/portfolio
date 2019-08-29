import React from 'react'
import Navbar from '../home/nav'
import { movie } from '../interfaces'
import constants from '../constants'
class Movies extends React.Component {
    omdb: movie['omdb'] = constants.OMDB_URL
    render() {
        return (
            <div className="App-container">
                <Navbar className={'not-home'}></Navbar>
                <div className="movie-search-doc">
                    <div className="main-header">
                        <div className="inner">
                            <h1 className="main-title">MovieSearch</h1>
                            <form className="search-form">
                                <label className="is-hidden">
                                    Search a title
                                </label>
                                <input
                                    type="search"
                                    name="search"
                                    id="search"
                                    placeholder="Search a Title..."
                                ></input>
                                <label className="is-hidden">Any Year</label>
                                <input
                                    type="text"
                                    name="year"
                                    id="year"
                                    placeholder="Year"
                                ></input>
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
                        <ul id="movies" className="movie-list"></ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default Movies
