import { NewsFeed, NewsDetail } from '../types'
import { NEWS_URL, CONTENT_URL } from '../config';
export class Api {

    sendRequest<AjaxResponse>(url: string): AjaxResponse {
        const ajax = new XMLHttpRequest();
        ajax.open('GET', url, false);
        ajax.send();
        return JSON.parse(ajax.response);
    }
}


export class NewsFeedApi {
    getData(): NewsFeed[] {
        return this.sendRequest<NewsFeed[]>(NEWS_URL);
    }
}

export class NewsDetailApi {
    getData(id: string): NewsDetail {
        return this.sendRequest<NewsDetail>(CONTENT_URL.replace('@id', id));
    }
}

// 컴파일러에게 Api 클래스를 상속받는다고 알려주는 것
export interface NewsFeedApi extends Api { };
export interface NewsDetailApi extends Api { };

applyApiMixins(NewsFeedApi, [Api]);
applyApiMixins(NewsDetailApi, [Api]);


function applyApiMixins(targetClass: any, baseClasses: any[]): void {
    baseClasses.forEach(baseClass => {
        Object.getOwnPropertyNames(baseClass.prototype).forEach(name => {
            const descriptor = Object.getOwnPropertyDescriptor(baseClass.prototype, name);

            if (descriptor) {
                Object.defineProperty(targetClass.prototype, name, descriptor);
            }
        })
    })
}