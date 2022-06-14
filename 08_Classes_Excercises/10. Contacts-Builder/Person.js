class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.articleEl = document.createElement('article');
        this.articleEl.innerHTML = `
            <div class="title">${this.firstName} ${this.lastName}<button>&#8505;</button></div>
            <div class="info">
                <span>&phone; ${this.phone}</span>
                <span>&#9993; ${this.email}</span>
            </div>`;
        this.online = false;
    }

    render(id) {
        document.getElementById(id).appendChild(this.articleEl);
        this.articleEl.querySelector('.info').style.display = 'none';

        this.articleEl.querySelector('button').addEventListener('click', onButtonClick);
        function onButtonClick(event) {
            event.target.parentElement.parentElement.querySelector('.info').style.display = 'block';
        }
    }

    get online() {
        return this._online;
    }

    set online(bool) {
        this._online = bool;
        if (bool) {
            this.articleEl.querySelector('.title').classList.add('online');
        } else {
            this.articleEl.querySelector('.title').classList.remove('online');
        }
    }
}