
// Enter your code below.

const newOrderForm = document.querySelector("#new-order-form");

newOrderForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Access form elements
  const formElements = event.target.elements;

  // Assigning form elements to variables
  const orderItemNameInput = formElements["order-item-name"];
  const orderItemName = orderItemNameInput.value.trim();
  const orderItemPriceInput = formElements["order-item-price"];
  const orderItemPrice = orderItemPriceInput.value;
  const orderSizeInput = formElements["order-size"];
  const ordersize = orderSizeInput.value;

  // to track validity
  let isFormValid = true;

  // Validate item name
  if (isValueNotEmpty(orderItemName)){
    orderItemNameInput.classList.remove("is-invalid");
  } else {
    orderItemNameInput.classList.add("is-invalid");
    isFormValid = false;
  }
  
  // Validate item price
  if (isValueNotEmpty(orderItemPrice) && isGreaterThanFive(orderItemPrice)){
    orderItemPriceInput.classList.remove("is-invalid");
  } else {
    orderItemPriceInput.classList.add("is-invalid");
    isFormValid = false;
  }

  // Validate order size
  if (isValueNotEmpty(ordersize)) {
    orderSizeInput.classList.remove("is-invalid");
  } else {
    orderSizeInput.classList.add("is-invalid");
    isFormValid = false;
  }

  // Only add order item if form is valid
  if (isFormValid) {
    addOrderItem(orderItemName, parseFloat(orderItemPrice), ordersize);

    orderItemNameInput.value = "";
    orderItemPriceInput.value = "";
    orderSizeInput.value = "";
  } else {
    console.log("Form is invalid. Please fill in all the fields correctly.");
  }
});

// functions needed for assessment (do not change.)

/**
 * Checks if a value is not empty.
 *
 * @param {any} value - The value to check.
 * @returns {boolean} - Returns true if the value is not empty, false otherwise.
 */
const isValueNotEmpty = (value) => {
  if (value !== "") {
      return true
  }
  return false
}

/**
 *
 * Checks if a given value is greater than zero.
 * @param {number} value - The value to be checked.
 * @returns {boolean} - True if the value is greater than zero, otherwise false.
 */
const isGreaterThanFive = (value) => {
  if (value > 5) {
      return true
  }
  return false
}

/**
 * Adds a new order item to the order list.
 *
 * @param {string} orderItemName - The name of the order item.
 * @param {number} orderItemPrice - The price of the order item.
 * @param {string} orderSize - The size of the order item.
 * @returns {void}
 */
const addOrderItem = (orderItemName, orderItemPrice, orderSize) => {
  let orderItemList = document.querySelector("#order-item-list")
  let newOrderItem = `<li class="list-group-item d-flex justify-content-between">
    <div class="w-100 justify-content-between">
      <h5 class="mb-1">${orderItemName}</h5>
      <small>${orderSize}</small>
    </div>
    <p class="mb-1">${'$'+orderItemPrice}</p>
  </li>`
  orderItemList.innerHTML += newOrderItem
}