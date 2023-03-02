/* ASSEMBLE A POTLUCK GUEST LIST */

// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");

// 1 Add an Event Listener & Create an Element
/* Create a list element so that the names will appear in list format */
addGuestButton.addEventListener("click", function () {
  const guest = guestInput.value;
  //console.log(guest);
  //is saying that if there isn't a empty string then create a li element
  if (guest !== "") {
    /* const listItem = document.createElement("li");
    listItem.innerText = guest;
    guestList.append(listItem); */
    addToList(guest);
    updateGuestCount();
    clearInput();
  }
});

/* 2 Clear the Input Box */
const clearInput = function () {
  guestInput.value = "";
};

// /* 4 Refactor Code */

/* Refactoring is the process of restructuring code, while not changing its original functionality. The goal of refactoring is to improve internal code by making many small changes without altering the code's external behavior.

https://www.techtarget.com/searchapparchitecture/definition/refactoring
*/

//This function will add a guest to the list ("li")
const addToList = function (guest) {
  const listItem = document.createElement("li");
  listItem.innerText = guest;
  guestList.append(listItem);
};

/* The above code, the 3 lines of code responsible for creating a list element, populating it, adding unorder list have been moved from the addGuestButton to its  own function and the function is passed back to the addGuestButton with the paramater of guest. */

// PART 2 Limit the Guest List

const updateGuestCount = function () {
  const guests = document.querySelectorAll(".guest-list li");
  guestCount.innerText = guests.length;
  if (guests.length === 8) {
    addGuestButton.classList.add("hide");
    guestInput.classList.add("hide");
    guestInputLabel.classList.add("hide");
    guestFull.classList.remove("hide");
  }
};
