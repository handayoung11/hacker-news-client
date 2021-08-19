import { NewsFeed, NewsDetail } from '../types'
export class Api {
    xhr: XMLHttpRequest;
    url: string;
    
    constructor(url: string) {
        this.xhr = new XMLHttpRequest();
        this.url = url;
    }

    sendRequestWithXHR<AjaxResponse>(cb: (data: AjaxResponse) => void): void {
        this.xhr.open('GET', this.url);
        this.xhr.addEventListener('load', () => {
            cb(JSON.parse(this.xhr.response) as AjaxResponse);
        });

        this.xhr.send();
    }

    sendRequestWithPromise<AjaxResponse>(cb: (data: AjaxResponse) => void): void {
        fetch(this.url)
            .then(response => response.json())
            .then(cb)
            .catch(() => {
                console.error('데이터를 불러오지 못했습니다.');
            })
    }
}


export class NewsFeedApi extends Api {
    
    constructor(url: string) {
        super(url);
    }

    getDataWithXHR(cb: (data: NewsFeed[]) => void): void {
        this.sendRequestWithXHR<NewsFeed[]>(cb);
    }

    getDataWithPromise(cb: (data: NewsFeed[]) => void): void {
        return this.sendRequestWithPromise<NewsFeed[]>(cb);
    }
}

export class NewsDetailApi extends Api {
    
    constructor(url: string) {
        super(url);
    }

    getDataWithXHR(cb: (data: NewsDetail) => void): void {
        this.sendRequestWithXHR<NewsDetail>(cb);
    }

    getDataWithPromise(cb: (data: NewsDetail) => void): void {
        return this.sendRequestWithPromise<NewsDetail>(cb);
    }
}
