cust = {
  Name: "Avi Cohen",
  pin: 1234,
  amount: 1000,
  newAmount: 0,

  iScreen() {
    invalidScreen.innerHTML = `
       <div class="invalid-screen col-sm-4 group1">
             <div class="invalid-screen col-sm-4 group1">
                  <h1>INVALID ACTION</h1>
                  <p>
                    You must first enter a PIN-CODE before executing any action.
                    <br />Your card have been rejected for security reasons.
                    <br />
                    Please collect your card and press 'CANCEL' <br />
                    <br />Thank you.
                  </p>
                </div>
                
                        <div class="slot-backwards">
          <div class="col-sm-4">

            <button class="card"></button><br />
            <div class="row">
              <div class="col-sm-12 image">
                <img src="images/card.png" id="card" />
              </div>
            </div>`;
  },

  passwordApproved() {
    checkedOut.innerHTML += `
    <div class="col-sm-4 group1 password-approved">
                  <div class="password-approved-header">
                    <h1>Please choose your transaction</h1>
                  </div>
                  <div class="password-approved-welcome">
                    <p>
                      Welcome
                      <span style="color: red">${cust.Name} 🙋‍♂️</span>
                      <br />
                      <span
                        style="
                          background-color: black;
                          color: white;
                          padding: 0px 20px 0px 20px;
                        "
                        >Your current balance</span
                      >
                    </p>
                    <p class="money-balance">
                      <span style="font-size: 2em">$${cust.amount}</span>
                    </p>
                  </div>
                  <div class="password-approved-buttons">
                    <p>DEPOSIT</p>
                    <p>WITHDRAW</p>
                    
                  </div>
                </div>
    `;
  },
  dScreen() {
    depositScreen.innerHTML = `
         <div class="col-sm-4 group1 deposit-screen">
                  <p>
                    Please insert the amount <br />
                    you would like
                    to <br />
                    <span
                      style="
                        font-size: 1.3em;
                        background-color: red;
                        padding: 3px;
                        color: aliceblue;
                      "
                      >DEPOSIT</span
                    >
                  </p>
                  <input id="deposit_number" type="number" max="9999" />
                </div>
                <div class="deposit-buttons">
                  <p>MENU</p>
                </div>
    `;
  },

  wScreen() {
    withdrawScreen.innerHTML = `
                    <div class="col-sm-4 group1 withdraw-screen">
                    <div class="col-sm-4 group1 withdraw-screen">
                      <p>
                        Please insert the amount <br />
                        you would like
                        to <br />
                        <span
                          style="

                            background-color: red;
                            padding: 3px;
                            color: aliceblue;
                          "
                          >WITHDRAW</span
                        >
                      </p>
                      <input id="withdraw_number" type="number" max="9999" />
                    </div>
                    <div class="withdraw-buttons">
                      <p style="font-size:1.6em;
                      padding: 18px;
                      ">MENU</p>
                    </div>
                  </div>
                </div>`;
  },

  usBankroll() {
    dollar.innerHTML = `                              <div class="col-sm-12 image2">
                <img src="images/bankroll.png" id="card2" />
              </div>`;
  },

  removeUsBankroll() {
    const dollars = document.querySelectorAll("#cash_money");
    dollars.forEach(function (btn) {
      btn.addEventListener("click", function () {
        // Remove the clicked #cash_money element from the DOM
        btn.innerHTML = "";
      });
    });
  },

  withdrawMenuButton() {
    const menuButton = document.querySelectorAll("#opbut3");
    menuButton.forEach(function (button) {
      button.addEventListener("click", function () {
        withdrawScreen.innerHTML = "";
        cust.passwordApproved();
      });
    });
  },

  depositMenuButton() {
    const menuButton = document.querySelectorAll("#opbut3");
    menuButton.forEach(function (button) {
      button.addEventListener("click", function () {
        depositScreen.innerHTML = "";
        cust.passwordApproved();
      });
    });
  },

  depositNumbers() {
    // deposit numbers buttons
    const depositInput = document.querySelector("#deposit_number");
    const buttonsOfPinTwo = document.querySelectorAll(".buttons button");
    buttonsOfPinTwo.forEach(function (buttonTwo) {
      buttonTwo.addEventListener("click", function () {
        depositInput.value += this.value;
      });
    });
  },

  withdrawNumbers() {
    // withdraw numbers buttons
    const withdrawInput = document.querySelector("#withdraw_number");
    const buttonsOfPinTwo = document.querySelectorAll(".buttons button");
    buttonsOfPinTwo.forEach(function (buttonTwo) {
      buttonTwo.addEventListener("click", function () {
        withdrawInput.value += this.value;
      });
    });
  },

  depositClear() {
    // deposit clear button
    const depositInput = document.querySelector("#deposit_number");
    const clearButton = document.querySelector("#clear");
    clearButton.addEventListener("click", function () {
      depositInput.value = "";
    });
  },

  withdrawClear() {
    // withdraw clear button
    const withdrawInput = document.querySelector("#withdraw_number");
    const clearButton = document.querySelector("#clear");
    clearButton.addEventListener("click", function () {
      withdrawInput.value = "";
    });
  },

  depositEnter() {
    // deposit enter button
    const depositInput = document.querySelector("#deposit_number");
    const yourenterButton = document.querySelector("#enter");
    yourenterButton.addEventListener("click", function () {
      cust.amount -= parseFloat(depositInput.value);
      depositInput.value = "";
    });
  },

  withdrawEnter() {
    // withdraw enter button
    const withdrawInput = document.querySelector("#withdraw_number");
    const myenterButton = document.querySelector("#enter");
    myenterButton.addEventListener("click", function () {
      cust.amount -= parseFloat(withdrawInput.value);
      withdrawInput.value = "";
      cust.usBankroll();
    });
  },
};

function welcome() {
  console.log(cust.Name, cust.pin);
  var image = document.getElementById("image");
  card.style.animationName = "example";

  content.innerHTML =
    "<form><h2>WELCOME, " +
    cust.Name +
    '<br> PLEASE ENTER YOUR PIN.</h2><input id="number" type=number max="9999">';
}

welcome();

const dollar = document.querySelector("#cash_money");
//PIN buttons
const buttonsOfPin = document.querySelectorAll(".buttons button");
// input of password
const screenPassword = document.querySelector("input#number");
// input of deposit
const deposit = document.querySelector("input#deposit_number");
// cust.passwordApproved () ^ innerHTML display
const checkedOut = document.querySelector("#password_approved_screen");
// cust.dScreen() ^ innerHTML display
const depositScreen = document.querySelector("#deposit");
// cust.iScreen()
const invalidScreen = document.querySelector("#invalid");
// cust.wScreen() ^ innerHTML display
const withdrawScreen = document.querySelector("#withdraw");
// menu button
const menuButton = document.querySelector("#opbut3");
// cancel button
const cancelButton = document.querySelector("#cancel");
// VALIDATION CANCELLED AFTER PASSWORDAPPROVED
let isPinValidated = false;

function buttonsFunctionality() {
  buttonsOfPin.forEach((button) => {
    button.addEventListener("click", function () {
      screenPassword.value += this.value;
    });
  });
}

function passwordValidate() {
  if (parseInt(screenPassword.value) === cust.pin) {
    content.innerHTML = "";
    cust.passwordApproved();
    isPinValidated = true;
    console.log("Approved");
  } else {
    console.log("Disapproved");

    screenPassword.value = "";
  }
}

function clearPassword() {
  screenPassword.value = "";
}

function reloadPage() {
  location.reload();
}

cancelButton.addEventListener("click", function () {
  location.reload();
});

function depositButton() {
  if (isPinValidated) {
    checkedOut.innerHTML = "";
    cust.dScreen();
  } else {
    content.innerHTML = "";
    cust.iScreen();
    console.log("something went wrong");
  }

  cust.depositMenuButton();
  cust.depositNumbers();
  cust.depositClear();
  cust.depositEnter();
}

function withdrawButton() {
  if (isPinValidated) {
    console.log("it worked");
    checkedOut.innerHTML = "";
    cust.wScreen();
  } else {
    content.innerHTML = "";
    cust.iScreen();
  }
  cust.removeUsBankroll();
  cust.withdrawMenuButton();
  cust.withdrawNumbers();
  cust.withdrawClear();
  cust.withdrawEnter();
}

function menu() {
  if (isPinValidated !== true) {
    content.innerHTML = "";
    cust.iScreen();
  }
}

buttonsFunctionality();
