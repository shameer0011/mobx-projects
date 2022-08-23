const { makeAutoObservable } = require("mobx");
import {fetchPrice} from '../utils'
class CoinStore {
    ticker
    price=0
    dateUpdated
    name
    isFavorite = false
    history = []

    constructor(name,tracker) {
       makeAutoObservable(this)
       this.ticker = tracker
       this.name=name
       this.startInterval()
    }

   startInterval=async()=>{
      setInterval(async()=>{
            const c= await fetchPrice(this.ticker)
            this.history.unshift({ price: this.price, dateUpdated: this.dateUpdated })
            this.setPrice(c)
         } , 2000)
   }

   setPrice =(price)=>{
    this.price=price
    this.dateUpdated=new Date()
   }

   get lastMove() {
      if (!this.history.length) return 'none'
      const lastPrice = this.history[0].price
      if (!lastPrice || lastPrice === this.price) return 'none'
      if (lastPrice < this.price) return 'up'
      return 'down'
    }

   changeFavoriteStatus = () => {
      this.isFavorite = !this.isFavorite
   }

}
export default CoinStore;