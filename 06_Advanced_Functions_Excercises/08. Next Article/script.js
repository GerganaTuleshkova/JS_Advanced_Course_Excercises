function getArticleGenerator(articles) {
    let divElement = document.getElementById('content');
    function showNextArticle() {
        if (articles.length !== 0) {
            let nextToShow = articles.shift();
            let articleElement = document.createElement('article');
            articleElement.textContent = nextToShow;
            divElement.appendChild(articleElement);
        }
    }
    return showNextArticle;
}
