function getArticleGenerator(articles) {


    function showNextArticle() {
        if (articles.length !== 0) {


            let nextToShow = articles.shift();
            document.getElementById('content').innerHTML = `<article>${nextToShow}</article>`;
            console.log('in inner')
        }

    }





    return showNextArticle



}
