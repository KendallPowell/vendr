import { appState } from "../AppState.js"



class SnackService {

  addMoney() {
    appState.money = appState.money + .25
  }

}



export const snackService = new SnackService()