import { appState } from "../AppState.js"
import { moneyService } from "../Services/MoneyService.js"
import { setText } from "../Utils/Writer.js"




function _drawMoney() {
  setText('money', appState.money)
}


export class MoneyController {
  constructor() {
    appState.on('money', _drawMoney)
  }

  addMoney() {
    console.log('gettin money')
    moneyService.addMoney()
    console.log(appState.money)
  }

}