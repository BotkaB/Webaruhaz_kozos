import { termekLista } from "./TermekAdatok.js";

export default class TermekModel{

    #lista=[];

constructor(){
this.#lista=termekLista;
}

getLista(){
    return this.#lista
}

torles(index){
    this.#lista.splice(index,1)
}

}