document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll("button");
  
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const value = button.dataset.value;
  
        if (value === "clear") {
          display.value = "";
        } else if (value === "del") {
          display.value = display.value.slice(0, -1);
        } else if (value === "=") {
          try {
            display.value = eval(display.value.replace("÷", "/").replace("×", "*"));
          } catch {
            display.value = "Error";
          }
        } else {
          display.value += value;
        }
      });
    });
  });
  