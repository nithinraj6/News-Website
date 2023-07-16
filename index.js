let accordion = document.getElementById('accordion');
let sources = 'bbc-news';
let apikey = '9a6ae87690ba4b40a67be95c472e461f'
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${sources}&apikey=${apikey}`, true);
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newshtml = "";
        articles.forEach(function(element,index){
            let news = `<div class="accordion-item">
   <h2 class="accordion-header">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
        data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
        ${element.title}
    </button>
     </h2>
   <div id="collapse${index}" class="collapse" data-bs-parent="#accordion">
    <div class="accordion-body">
        ${element.description}..<a href=${element.url} target="_blank" >Read more here</a>
    </div>
</div>
</div>`
 newshtml+=news;
        });
        accordion.innerHTML=newshtml;

    }
    else {
        console.log('something error occured');
    }
}
xhr.send()

