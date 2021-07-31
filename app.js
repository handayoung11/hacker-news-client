const container = document.getElementById('root');
const ajax = new XMLHttpRequest();
const content = document.createElement('div');
const title = document.createElement('h1');
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json';
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json';

ajax.open('GET', NEWS_URL, false);
ajax.send();

const newsFeed = JSON.parse(ajax.response);
const ul = document.createElement('ul');let li = '';

window.addEventListener('hashchange', function() {
    const id = location.hash.substr(1);
    ajax.open('GET', CONTENT_URL.replace('@id', id), false);
    ajax.send();

    const newsContent = JSON.parse(ajax.response);
    title.innerText = newsContent.title;
});

for(let i = 0; i < 10; i++) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.innerText = `${newsFeed[i].title} (${newsFeed[i].comments_count})`;
    a.href = `#${newsFeed[i].id}`;
    
    a.addEventListener('click', function() {});

    li.appendChild(a);
    ul.appendChild(li);
}

content.appendChild(title);
container.appendChild(ul);
container.appendChild(content);