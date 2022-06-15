class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.articleEl = document.createElement('article');
        // this.articleEl.innerHTML = `
        //     <div class="title">${this.firstName} ${this.lastName}<button>&#8505;</button></div>
        //     <div class="info">
        //         <span>&phone; ${this.email}</span>
        //         <span>&#9993; ${this.email}</span>
        //     </div>`;

        this.divTitle = document.createElement('div');
        this.divTitle.textContent = `${this.firstName} ${this.lastName}`;
        this.divTitle.classList.add('title');
        this.articleEl.appendChild(this.divTitle);

        this.button = document.createElement('button');
        // this.button.textContent = '&#8505';
        this.button.innerHTML = '&#8505;';
        this.divTitle.appendChild(this.button);

        this.divInfo = document.createElement('div');
        this.divInfo.classList.add('info');
        this.articleEl.appendChild(this.divInfo);

        this.spanPhone = document.createElement('span');
        this.spanPhone.innerHTML = '&#9742; ' + this.phone;
        this.divInfo.appendChild(this.spanPhone);

        this.spanMail = document.createElement('span');
        this.spanMail.innerHTML = '&#9993; ' + this.email;
        this.divInfo.appendChild(this.spanMail);

       

        this.online = false;
    }

    render(id) {
        
        // let divTitle = document.createElement('div');
        // divTitle.textContent = `${this.firstName} ${this.lastName}`;
        // divTitle.classList.add('title');
        // this.articleEl.appendChild(divTitle);

        // let button = document.createElement('buton');
        // button.textContent = '&#8505';
        // divTitle.appendChild(button);

        // let divInfo = document.createElement('div');
        // divInfo.classList.add('info');
        // this.articleEl.appendChild(divInfo);

        // let spanPhone = document.createElement('span');
        // spanPhone.textContent = '&phone; ' + this.email;
        // divInfo.appendChild(spanPhone);

        // let spanMail = document.createElement('span');
        // spanMail.textContent = '&#9993; ' + this.email;
        // divInfo.appendChild(spanMail);


        document.getElementById(id).appendChild(this.articleEl);
        // this.articleEl.querySelector('.info').style.display = 'none';
        this.divInfo.style.display = 'none';

        // this.articleEl.querySelector('button').addEventListener('click', onButtonClick);
        this.button.addEventListener('click', onButtonClick);
        function onButtonClick(event) {
            event.target.parentElement.parentElement.querySelector('.info').style.display = 'block';
            // this.divInfo.style.display = 'block';
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