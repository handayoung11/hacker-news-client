import View from "../core/view";

export interface NewsStore {
    getAllFeeds: () => NewsFeed[];
    getFeed: (position: number) => NewsFeed;
    setFeeds: (feeds: NewsFeed[]) => void;
    makeRead: (id: number) => void;
    currentPage: number;
    nextPage: number;
    prevPage: number;
    numberOfFeeds: number;
    hasFeeds: boolean;
}

export interface Store {
    currentPage: number;
    feeds: NewsFeed[];
}

export interface News {
    readonly id: number;
    readonly time_ago: string;
    readonly url: string;
    readonly user: string;
}

export interface NewsFeed extends News {
    readonly title: string;
    readonly like: number;
    readonly contents: string;
    readonly comments_count: number;
    read? : boolean
}

export interface NewsDetail extends News {
    readonly title: string;
    readonly content: string;
    readonly comments: NewsComment[];
};

export interface NewsComment extends News {
    readonly content: string;
    readonly comments: NewsComment[];
    readonly level: number;
};

export interface RouteInfo {
    path: string;
    page: View;
}