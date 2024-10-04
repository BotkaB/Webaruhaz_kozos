import UserSor from "./userSor.js";

export default class UserTermekekTablazat {
    #lista = [];

    constructor(lista, szuloElem) {
        this.#lista = lista;
        this.szuloElem = szuloElem;
        this.szuloElem.empty();
        this.tablazatKiir();
        this.tbodyElem = $(".sorok");
        this.sorokKiir();
    }

    sorokKiir() {
        this.#lista.forEach((termek, index) => {
            termek.id = index;
            new UserSor(termek, this.tbodyElem);
        });
    }

    tablazatKiir() {
        this.szuloElem.append(`
            <div class="table-responsive">
            <table class="table striped">
            <thead>
            <tr>
                <th>id</th>
                <th>title</th>
                <th>price</th>
                <th>description</th>
                <th>category</th>
                <th>image</th>
                <th>rating.rate</th>
                <th>rating.count</th>
            </tr>
             </thead>
           <tbody class="sorok"></tbody>
        </table>
        </div>`
        );
    }
}
