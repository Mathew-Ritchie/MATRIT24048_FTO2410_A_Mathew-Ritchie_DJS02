const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  // Scenario 2 - Both inputs fields need an input.
  if (!dividend || !divider) {
    return (result.innerText = `Division not performed. Both values are required in inputs. Try again`);
  }

  // Scenario 3 - divider cannot be zero and should throw an error.
  if (parseInt(divider) === 0) {
    try {
      throw new Error("Division by zero not possible");
    } catch (error) {
      console.error("Error during division:", error.stack);
      result.innerText = `Division not performed. Invalid number provided. Try again`;
      return;
    }
  }
  // Scenario 4 - use of 'YOLO' and '+++' on submition should make entire screen be replaced by message and log the call stack to the console.
  if (dividend === "YOLO" && divider === "+++") {
    try {
      throw new Error("Critical Error!");
    } catch (error) {
      console.error("Invalid inputs used", error.stack);
      document.body.innerHTML = `Something critical went wrong. Please reload the page`;
      return;
    }
  }

  // Scenario 1 - removing decimals
  result.innerText = Math.trunc(dividend / divider);
});
