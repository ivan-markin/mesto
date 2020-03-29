export class Api {
    constructor(token, address) {
        this.token = token;
        this.address = address;
    }
    getAppInfo() {
        return Promise.all([this.getCards(), this.getUserInfo()]);
    }
    getCards() {
        return fetch(`${this.address}cards`, {
            headers: {
                authorization: this.token
            }
        })
            .then(res => res.ok ? res.json() : Promise.reject())
            .catch(() => console.log('Ошибка загрузки карточек'))
    }
    postUser(userName, userJob) {
        return fetch(`${this.address}users/me`, {
            method: 'PATCH',
            headers: {
                authorization: this.token,
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                name: userName,
                about: userJob
            })  
        })
            .then(res => res.ok ? res.json() : Promise.reject())
            .catch((err) => console.log(err))
    }
    getUserInfo() {
        return fetch(`${this.address}users/me`, {
            headers: {
                authorization: this.token
            }
        })
            .then(res => res.ok ? res.json() : Promise.reject())
            .catch(() => console.log('Ошибка загрузки информации о пользователе'))
    }
    postCard(name, link) {
        return fetch(`${this.address}cards`, {
            method: 'POST',
            headers: {
                authorization: this.token,
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                link: link
            })  
        })
            .then(res => res.ok ? res.json() : Promise.reject())
            .catch((err) => console.log(err))
    }
}