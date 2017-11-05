import createElement from "./create-element.js";
import Timers from "./timers.js";

function formHandler(_event) {
  _event.preventDefault();
  let timer = {
    name: createElement.domReferences.inputTimerName.value,
    description: createElement.domReferences.inputTimerDescription.value,
    alarmTime: {
      days: createElement.domReferences.inputTimerDays.value,
      hours: createElement.domReferences.inputTimerHours.value,
      minutes: createElement.domReferences.inputTimerMinutes.value
    }
  };
  Timers.addTimer(timer);
}

const AddTimerView = function() {
  return createElement({
    type: "form",
    eventListeners: [
      {
        type: "submit",
        handler: formHandler
      }
    ],
    children: [
      {
        type: "input",
        name: "inputTimerName",
        attrs: [
          {
            name: "type",
            value: "text"
          },
          {
            name: "placeholder",
            value: "Name"
          },
          {
            name: "className",
            value: "add-timer-view__name-input"
          }
        ]
      },
      {
        type: "input",
        name: "inputTimerDescription",
        attrs: [
          {
            name: "type",
            value: "text"
          },
          {
            name: "placeholder",
            value: "Description"
          },
          {
            name: "className",
            value: "add-timer-view__description-input"
          }
        ]
      },
      {
        type: "input",
        name: "inputTimerDays",
        attrs: [
          {
            name: "type",
            value: "number"
          },
          {
            name: "placeholder",
            value: "Days"
          },
          {
            name: "className",
            value: "add-timer-view__days-input"
          }
        ]
      },
      {
        type: "input",
        name: "inputTimerHours",
        attrs: [
          {
            name: "type",
            value: "number"
          },
          {
            name: "placeholder",
            value: "Hours"
          },
          {
            name: "className",
            value: "add-timer-view__hours-input"
          }
        ]
      },
      {
        type: "input",
        name: "inputTimerMinutes",
        attrs: [
          {
            name: "type",
            value: "number"
          },
          {
            name: "placeholder",
            value: "Minutes"
          },
          {
            name: "className",
            value: "add-timer-view__minutes-input"
          }
        ]
      },
      {
        type: "button",
        name: "inputTimerSubmit",
        attrs: [
          {
            name: "type",
            value: "submit"
          },
          {
            name: "innerText",
            value: "Add Timer"
          },
          {
            name: "className",
            value: "add-timer-view__submit"
          }
        ],
      },
    ]
  });
};

export default AddTimerView;
