export interface movie {
    omdb: string
    search: string
    params: {
        s: movie['search']
        r: string
    }
}

export interface hearthstoneApi {
    apiUrl: string
}
