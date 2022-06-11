function solution(action) {
    if (action == 'upvote') {
        this.upvotes += 1;
    }

    if (action == 'downvote') {
        this.downvotes += 1;
    }

    if (action == 'score') {
        let rating = '';
        let balance = this.upvotes - this.downvotes;
        let totalVotes = this.upvotes + this.downvotes;
        let reportedUpvotes = this.upvotes;
        let reportedDownvotes = this.downvotes;
        let reportedBalance = reportedUpvotes - reportedDownvotes;

        if (totalVotes < 10) {
            rating = 'new';
        } else if (this.upvotes > totalVotes * 0.66) {
            rating = 'hot';
        } else if (balance < 0) {
            rating = 'unpopular';
        } else if (this.upvotes <= totalVotes * 0.66 && this.downvotes <= totalVotes * 0.66 && balance >= 0 && totalVotes > 100) {
            rating = 'controversial';
        } else {
            rating = "new";
        }

        if (totalVotes > 50) {
            let addition = Math.ceil(Math.max(this.upvotes, this.downvotes) * 0.25);
            reportedUpvotes += addition;
            reportedDownvotes += addition;
        }

        return ([reportedUpvotes, reportedDownvotes, reportedBalance, rating]);
    }
}


// let post = {
//     id: '3',
//     author: 'emil',
//     content: 'wazaaaaa',
//     upvotes: 100,
//     downvotes: 100,
// };


// solution.call(post, 'upvote');
// solution.call(post, 'downvote');
// let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
// console.log(score)
// for (let i = 0; i < 50; i++) {
//     solution.call(post, 'downvote');         // (executed 50 times)
// }

// score = solution.call(post, 'score');     // [139, 189, -50, 'unpopular']
// console.log(score)

let forumPost = {
    id: '1',
    author: 'pesho',
    content: 'hi guys',
    upvotes: 0,
    downvotes: 0
};

solution.call(forumPost, 'upvote');
let answer = solution.call(forumPost, 'score');
console.log(answer)