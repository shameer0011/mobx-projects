import {makeAutoObservable} from 'mobx';
import {ProductStore} from './productStore'
export class Store {
     productStore = new ProductStore();
    constructor(){
        makeAutoObservable(this)
    }
}