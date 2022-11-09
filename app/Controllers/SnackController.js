import { appState } from "../AppState.js"
import { setHTML } from "../Utils/Writer.js"



function _drawSnacks() {
  let template = ''
  appState.snacks.forEach(s => template += ` 
      <div class="col-3 card text-center">
        <p>${s.name}</p>
        <p>${s.price}</p>
      </div>
  `)
  setHTML('snack', template)
}



export class SnackController {
  constructor() {
    appState.on('snacks', _drawSnacks)
    _drawSnacks()
  }
}