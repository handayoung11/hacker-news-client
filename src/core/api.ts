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
}


export class NewsFeedApi extends Api {
    
    constructor(url: string) {
        super(url);
    }

    getDataWithXHR(cb: (data: NewsFeed[]) => void): void {
        this.sendRequestWithXHR<NewsFeed[]>(cb);
    }
}

export class NewsDetailApi extends Api {
    
    constructor(url: string) {
        super(url);
    }

    getDataWithXHR(cb: (data: NewsDetail) => void): void {
        this.sendRequestWithXHR<NewsDetail>(cb);
    }
}
