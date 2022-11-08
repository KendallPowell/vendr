import { SnackController } from "./Controllers/SnackController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();
  snackController = new SnackController()
}

window["app"] = new App();
