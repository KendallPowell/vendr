import { appState } from "../AppState.js"
import { snackService } from "../Services/SnackService.js"
import { setText } from "../Utils/Writer.js"




function _drawMoney() {
  setText('money', appState.money)
}


export class SnackController {
  constructor() {
    appState.on('money', _drawMoney)
    // _drawMoney
  }

  addMoney() {
    console.log('gettin money')
    snackService.addMoney()
    console.log(appState.money)
  }

}