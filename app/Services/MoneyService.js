import { appState } from "../AppState.js"



class MoneyService {

  addMoney() {
    appState.money = appState.money + .25
  }
}



export const moneyService = new MoneyService()