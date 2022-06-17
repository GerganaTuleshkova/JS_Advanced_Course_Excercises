window.onload = solve();

function solve() {
  let title = document.getElementById('post-title');
  let category = document.getElementById('post-category');
  let content = document.getElementById('post-content');
  let publishButton = document.getElementById('publish-btn');
  let uploadedPostsUl = document.getElementById('published-list');
  let postsForReviewUl = document.getElementById('review-list');
  let clearButton = document.getElementById('clear-btn');

  publishButton.addEventListener('click', onPublishClick);

  function onPublishClick(event) {
    event.preventDefault()

    if (title.value && category.value && content.value) {

      let liElement = document.createElement('li');
      liElement.className = 'rpost';

      let articleElement = document.createElement('article');
      let h4Title = document.createElement('h4');
      h4Title.textContent = title.value;
      let pCategory = document.createElement('p');
      pCategory.textContent = 'Category: ' + category.value;
      let pContent = document.createElement('p');
      pContent.textContent = 'Content: ' + content.value;

      articleElement.appendChild(h4Title);
      articleElement.appendChild(pCategory);
      articleElement.appendChild(pContent);

      liElement.appendChild(articleElement);

      let editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.className = 'action-btn edit';
      editButton.addEventListener('click', editPost)

      let approveButton = document.createElement('button');
      approveButton.textContent = 'Approve';
      approveButton.className = 'action-btn approve';
      approveButton.addEventListener('click', approvePost)

      liElement.appendChild(editButton);
      liElement.appendChild(approveButton);

      postsForReviewUl.appendChild(liElement);

      title.value = '';
      category.value  = '';
      content.value = '';

    }
  }

  function approvePost(event) {
    let postElement = event.target.parentElement;
    Array.from(postElement.querySelectorAll('button')).forEach(btn => btn.remove())
    uploadedPostsUl.appendChild(postElement)

  }

  function editPost(event) {
    let postLi = event.target.parentElement;
    let editedPostTitle = postLi.querySelector('h4').textContent;
    let editedPostCategory = postLi.querySelector('p').textContent.replace('Category: ', '');
    let editedPostContent = postLi.querySelectorAll('p')[1].textContent.replace('Content: ', '');

    title.value = editedPostTitle;
    category.value  = editedPostCategory;
    content.value = editedPostContent;

    postLi.remove()

  }

  clearButton.addEventListener('click', clearPosts)

  function clearPosts(event) {
    Array.from(uploadedPostsUl.children).forEach(el => el.remove());
  }
}
