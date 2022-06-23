class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        articleModel = articleModel.toLowerCase()
        if (!this.possibleArticles.hasOwnProperty(articleModel)) {
            throw new Error('This article model is not included in this gallery!');
        };

        let existingArticle = this.listOfArticles.find(a => a.articleName == articleName);

        if (existingArticle && existingArticle.articleModel == articleModel) {
            existingArticle.quantity += quantity;
        } else {
            this.listOfArticles.push({
                articleModel,
                articleName,
                quantity
            })
        }

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }

    inviteGuest(guestName, personality) {
        
        if (this.guests.find(g => g.guestName == guestName)) {
            throw new Error(`${guestName} has already been invited.`);
        }

        let personalitiesMapper = {
            'Vip': 500,
            'Middle': 250,
        }

        let points = 0;

        if (personalitiesMapper[personality] == undefined) {
            points = 50
        } else {
            points = personalitiesMapper[personality];
        }

        this.guests.push({
            guestName,
            points,
            purchaseArticle: 0,
        })

        return `You have successfully invited ${guestName}!`;
    }

    buyArticle(articleModel, articleName, guestName) {
        let existingArticle = this.listOfArticles.find(a => a.articleName == articleName);
        let existingGuest = this.guests.find(g => g.guestName == guestName);

        if (existingArticle == undefined || existingArticle.articleModel != articleModel) {
            throw new Error('This article is not found.');
        }

        if (existingArticle.quantity == 0) {
            return `The ${articleName} is not available.`;
        }

        if (existingGuest == undefined) {
            return `This guest is not invited.`;
        }

        if (existingGuest.points < this.possibleArticles[articleModel]) {
            return 'You need to more points to purchase the article.';
        }

        existingGuest.points -= this.possibleArticles[articleModel];
        existingArticle.quantity -= 1;
        existingGuest.purchaseArticle += 1;
        return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`;
    }

    showGalleryInfo(criteria) {
        let result = [];

        if (criteria == 'article') {
            result.push('Articles information:');
            for (let a of this.listOfArticles) {
                result.push(`${a.articleModel} - ${a.articleName} - ${a.quantity}`);
            }
        } 
        else if (criteria == 'guest') {
            result.push('Guests information:');
            for (let g of this.guests) {
                result.push(`${g.guestName} - ${g.purchaseArticle}`);
            }
        }
        return result.join('\n');
    }
}



const artGallery = new ArtGallery('Curtis Mayfield'); 
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));


