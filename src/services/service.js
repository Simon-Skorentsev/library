export default class Service {  //еслибы нужно былоб реализовать загрузку и сохранение книг пользователя на сервере
    _apiBase = "http://localhost:3000";

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` + `, received ${res.status}`)
        }
        return await res.json();
    }

    async getBookItems() {
        return await this.getResource('/booksDb/');
    }
}