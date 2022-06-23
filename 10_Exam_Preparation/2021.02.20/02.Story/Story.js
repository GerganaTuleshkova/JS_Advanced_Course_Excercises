class Story {
    #comments;
    #likes;
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this.#comments = [];
        this.#likes = [];
    }

    get likes() {
        if (this.#likes.length == 0) {
            return `${this.title} has 0 likes`;
        }

        if (this.#likes.length == 1) {
            return `${this.#likes[0]} likes this story!`;
        }

        return `${this.#likes[0]} and ${this.#likes.length - 1} others like this story!`;

    }

    like(username) {
        if (this.#likes.includes(username)) {
            throw new Error("You can't like the same story twice!");
        }

        if (this.creator == username) {
            throw new Error("You can't like your own story!");
        }

        this.#likes.push(username);
        return `${username} liked ${this.title}!`;
    }

    dislike(username) {
        if (!this.#likes.includes(username)) {
            throw new Error("You can't dislike this story!");
        }

        const index = this.#likes.indexOf(username);
        if (index !== -1) {
            this.#likes.splice(index, 1);
        }
        return `${username} disliked ${this.title}`;
    }

    comment(username, content, id) {
        let existingComment = this.#comments.find(comment => comment.id == id);
        if (existingComment == undefined || id == undefined) {
            let commentObj = {
                id: this.#comments.length + 1,
                username,
                content,
                replies: [],
            }
            this.#comments.push(commentObj);
            return `${username} commented on ${this.title}`;
        }

        let replyObj = {
            id: Number(`${id}.${existingComment.replies.length + 1}`),
            username,
            content
        }
        existingComment.replies.push(replyObj);
        return 'You replied successfully';
    }

    toString(sortingType) {
        if (sortingType == 'desc') {
            this.#comments.sort((a, b) => b.id - a.id);
            this.#comments.forEach(comment => comment.replies.sort((a, b) => b.id - a.id));
        }

        if (sortingType == 'username') {
            this.#comments.sort((a, b) => (a.username).localeCompare(b.username));
            this.#comments.forEach(comment => comment.replies.sort((a, b) => (a.username).localeCompare(b.username)));
        }

        let result = [];
        result.push(`Title: ${this.title}`);
        result.push(`Creator: ${this.creator}`);
        result.push(`Likes: ${this.#likes.length}`);
        result.push(`Comments:`);
        for (let c of this.#comments) {
            result.push(`-- ${c.id}. ${c.username}: ${c.content}`);
            for (let r of c.replies) {
                result.push(`--- ${r.id}. ${r.username}: ${r.content}`);
            }
        }
        return result.join('\n');
    }
}


let art = new Story("My Story", "Anny");
console.log(art.like("John"));
console.log(art.likes);
console.log(art.dislike("John"));
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));
