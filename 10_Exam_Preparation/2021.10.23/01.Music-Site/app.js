window.addEventListener('load', solve);

function solve() {
    let genre = document.getElementById('genre');
    let name = document.getElementById('name');
    let author = document.getElementById('author');
    let date = document.getElementById('date');
    let addButton = document.getElementById('add-btn');
    let allHitsSection = document.getElementById('all-hits').querySelector('.all-hits-container');
    let likesElement = document.getElementById('total-likes').querySelector('p');
    let likesCount = Number(likesElement.textContent.replace('Total Likes: ', ''));
    let savedSection = document.getElementById('saved-hits').querySelector('.saved-container');

    addButton.addEventListener('click', addSong);

    function addSong(event) {
        event.preventDefault();

        if (genre.value != ''
            && name.value != ''
            && author.value != ''
            && date.value != '') {
            let songDiv = document.createElement('div');
            songDiv.className = 'hits-info';
            songDiv.innerHTML = `\
            <img src="./static/img/img.png">\
            <h2>Genre: ${genre.value}</h2>\
            <h2>Name: ${name.value}</h2>\
            <h2>Author: ${author.value}</h2>\
            <h3>Date: ${date.value}</h3>\
            <button class="save-btn">Save song</button>\
            <button class="like-btn">Like song</button>\
            <button class="delete-btn">Delete</button>\
            `
            allHitsSection.appendChild(songDiv);

            genre.value = '';
            name.value = '';
            author.value = '';
            date.value = '';

            let [saveSongButton, likeSongButton, deleteButton] = songDiv.querySelectorAll('button');
            saveSongButton.addEventListener('click', saveSong);
            likeSongButton.addEventListener('click', likeSong);
            deleteButton.addEventListener('click', deleteSong);
        }

        function saveSong(event) {
            let songDiv = event.target.parentElement;
            songDiv.querySelector('.save-btn').remove();
            songDiv.querySelector('.like-btn').remove();
            savedSection.appendChild(songDiv);

        }
        function likeSong(event) {
            likesCount += 1;
            likesElement.textContent = `Total Likes: ${likesCount}`;
            event.target.disabled = true;
        }

        function deleteSong(event) {
            event.target.parentElement.remove();
        }
    }
}