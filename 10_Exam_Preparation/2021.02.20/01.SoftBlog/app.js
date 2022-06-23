function solve() {
   let author = document.getElementById('creator');
   let title = document.getElementById('title');
   let category = document.getElementById('category');
   let content = document.getElementById('content');
   let createButton = document.querySelector('.create');
   let postsSection = document.querySelector('main').querySelector('section');
   let archivedPostSection = document.querySelector('.archive-section').querySelector('ol');

   createButton.addEventListener('click', createPost);
   postsSection.addEventListener('click', deletePost);
   postsSection.addEventListener('click', archivePost);

   function createPost(event) {
      event.preventDefault();

      let article = document.createElement('article');
      article.innerHTML = `\
      <h1>${title.value}</h1>\
      <p>Category:\
      <strong>${category.value}</strong>\
      </p>\
      <p>Creator:\
      <strong>${author.value}</strong>\
      </p>\
      <p>${content.value}</p>\
      <div class="buttons">\
      <button class="btn delete">Delete</button>\
      <button class="btn archive">Archive</button>\
      </div>`;

      postsSection.appendChild(article);

      author.value = '';
      title.value = '';
      category.value = '';
      content.value = '';
   }

   function deletePost(event) {
      if (event.target.className == 'btn delete') {
         event.target.parentElement.parentElement.remove();
      }
   }

   function archivePost(event) {

      if (event.target.className == 'btn archive') {
         let articleElement = event.target.parentElement.parentElement;
         let titleElement = articleElement.querySelector('h1');

         let titleLi = document.createElement('li');
         titleLi.textContent = titleElement.textContent;

         archivedPostSection.appendChild(titleLi);
         articleElement.remove();

         Array.from(archivedPostSection.querySelectorAll('li'))
            .sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach(x => archivedPostSection.appendChild(x));
      }
   }
}
