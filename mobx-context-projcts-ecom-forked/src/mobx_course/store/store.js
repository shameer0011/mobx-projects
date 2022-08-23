import { makeAutoObservable } from "mobx";
import CoinStore from "./coins";
class Store {
  coins = [
    new CoinStore('Bitcoin', 'XBTUSDT'),
    new CoinStore('Ethereum', 'ETHUSDT'),
    new CoinStore('Cardano', 'ADAUSDT'),
    new CoinStore('Polkadot', 'DOTUSDT'),
  ]
    constructor() {
      makeAutoObservable(this)
    }
    
    
}
export default new Store;