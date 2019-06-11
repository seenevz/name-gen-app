// Import dependencies
import _ from "lodash";
import "./style.css";

// Import interface
import nameInterface from "./nameGenerator.js";
import { renderResponse, form, countInput } from "./DOMInterface.js";

//Set event listeners
form.addEventListener(
   "submit",
   formEvent => {
      formEvent.preventDefault();

      const formData = new FormData(form);
      const selectedWetterwald = formData.get("wetterwalds");

      const repeatTimes = formData.get("repeat");
      const repeatedName = nameInterface.repeat(
         selectedWetterwald,
         repeatTimes
      );

      renderResponse(repeatedName);
   },
   false
);

//Hot reloading modules
if (module.hot) {
   module.hot.accept(["./nameGenerator.js", "./DOMInterface.js"], () => {
      console.log("updating nameInterface");
   });
}
