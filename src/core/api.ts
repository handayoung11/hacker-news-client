import { NewsFeed, NewsDetail } from '../types'
import { NEWS_URL, CONTENT_URL } from '../config';
export class Api {
    ajax: XMLHttpRequest;
    url: string;
    
    constructor(url: string) {
        this.ajax = new XMLHttpRequest();
        this.url = url;
    }

    sendRequest<AjaxResponse>(): AjaxResponse {
        this.ajax.open('GET', this.url, false);
        this.ajax.send();
        return JSON.parse(this.ajax.response);
    }
}


export class NewsFeedApi extends Api {
    
    constructor(url: string) {
        super(url);
    }

    getData(): NewsFeed[] {
        return this.sendRequest<NewsFeed[]>();
    }
}

export class NewsDetailApi extends Api {
    
    constructor(url: string) {
        super(url);
    }

    getData(id: string): NewsDetail {
        return this.sendRequest<NewsDetail>();
    }
}
