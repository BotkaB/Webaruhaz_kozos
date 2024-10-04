import UserTermekekTablazat from "../view/UserTermekekTablazat.js";
import TermekModel from "../model/TermekModel.js";

export default class TermekekUserController {
    constructor() {
        this.tModel = new TermekModel();
        const lista = this.tModel.getLista();
        this.tTabla = new UserTermekekTablazat(lista, $(".user"));
    }
}
