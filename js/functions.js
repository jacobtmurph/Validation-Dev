/*** Functions ***/

//Validates Email in Real-Time
function validateEmail(emailField) {
    emailField.addEventListener("input", () => {
        //Regex to test email against
        const regex = /\S+@\S+\.\S+/;
        //Test email input to regex 
        if (!emailField.value.match(regex) && emailField.value != "") {
            //Update Email label to include an error message
            emailField.previousElementSibling.textContent = "Email: (Email Address Must Be Valid)"

            //Apply red border when input fails to match
            emailField.style.borderColor = "red";
        } else if (emailField.value == "") {
            //Else if the email field is empty
            //Update Email label to include an error message
            emailField.previousElementSibling.textContent = "Email: (Cannot Be Empty)"

            //Apply red border when input fails to match
            emailField.style.borderColor = "red";
        } else {
            //Revert border & label when input matches
            emailField.previousElementSibling.textContent = "Email:"
            emailField.style.borderColor = "#c1deeb";
        } //End if statement
    }); //End Event Listener
}; //End validateEmail

//Validate Credit Card Payment in Real-Time
function validateCreditCard(cardNumField, zipField, cvvField) {
    cardNumField.addEventListener("input", () => {
        if (isNaN(parseInt(cardNumField.value)) || cardNumField.value.length < 13 || cardNumField.value.length > 16) {
            //Update Card Number field to include error message
            cardNumField.previousElementSibling.textContent = "Card Number: (Invalid)";
            
            //Apply red border
            cardNumField.style.borderColor = "red";
        } else {
            //Revert border & label
            cardNumField.previousElementSibling.textContent = "Card Number:";
            cardNumField.style.borderColor = "#c1deeb";
        }; //End if
    }); //End Event Listener

    zipField.addEventListener("input", () => {
        if (isNaN(parseInt(zipField.value)) || zipField.value.length != 5) {
            //Update Card Number field to include error message
            zipField.previousElementSibling.textContent = "Zip Code: (Invalid)";
            
            //Apply red border
            zipField.style.borderColor = "red";
        } else {
            //Revert border & label
            zipField.previousElementSibling.textContent = "Zip Code:";
            zipField.style.borderColor = "#c1deeb";
        }; //End if
    }); //End Event Listener

    cvvField.addEventListener("input", () => {
        if (isNaN(parseInt(cvvField.value)) || cvvField.value.length != 3) {
            //Update Card Number field to include error message
            cvvField.previousElementSibling.textContent = "CVV: (Invalid)";
            
            //Apply red border
            cvvField.style.borderColor = "red";
        } else {
            //Revert border & label
            cvvField.previousElementSibling.textContent = "CVV:";
            cvvField.style.borderColor = "#c1deeb";
        }; //End if
    }); //End Event Listener
}; //End validateCreditCard

//Reset credit card information & borders
function resetCreditCardInfo(cardNumField, zipField, cvvField) {
    //Reset labels
    cardNumField.previousElementSibling.textContent = "Card Number:"
    zipField.previousElementSibling.textContent = "Zip Code:"
    cvvField.previousElementSibling.textContent = "CVV:"

    //Reset values
    cardNumField.value = "";
    zipField.value = "";
    cvvField.value = "";

    //Reset borders
    cardNumField.style.borderColor = "#c1deeb";
    zipField.style.borderColor = "#c1deeb";
    cvvField.style.borderColor = "#c1deeb";
} //End resetCreditCardInfo

//Gets and sets variables for multiple inputs
function getInputs(...inputs) {
    inputs.forEach(input => {
        //Convert hyphenated strings to camel case
        const fixedInputName = input.replace(/-([a-z])/g, g => { return g[1].toUpperCase(); });

        //Return variable containing each input in arguments
        return eval(`${fixedInputName}Input = document.querySelector("input[name=${input}]");`);
    }) //End forEach
}; //End getInputs

//Resfreshes the Total Cost Counter on the activies section
function refreshTotalCost(currentCost) {

    //If the current cost is already displayed
    if (currentCost != undefined) {
        //Update it's text content to the current value.
        currentCost.textContent = `Total Cost: $${totalCost}`;
    } else {
        //Create and set the class of the total cost h4
        const costHeader = document.createElement("h4");
        costHeader.setAttribute("class", "total");

        //Update total cost h4's text content to 
        costHeader.textContent = `Total Cost: $${totalCost}`;

        //Select and append h4 to the Activies div.
        const activitiesField = document.querySelector(".activities");
        activitiesField.appendChild(costHeader);
    }; //End If

    //If the total cost is $0
    if (currentCost.textContent.includes("$0")) {
        //Remove the total cost h4 from the activies div
        document.querySelector(".activities").removeChild(document.querySelector(".total"));
    }; //End if
}; //End refreshTotalCost

//Disables inputs, and turn text grey
function disableInputs([...inputs]) {
    inputs.forEach(input => {
        input.disabled = true;
        input.parentNode.style.color = "grey";
    }) //End forEach
}; //End DisableInputs

//Enables inputs, and turn text black
function enableInputs([...inputs]) {
    inputs.forEach(input => {
        input.disabled = false;
        input.parentNode.style.color = "black";
    }) //End forEach
}; //End enableInputs

//Selects an event and blocks and clashing events when checked, also updates and refreshes totalCost appropriately.
function selectEventListener(selectedEventInput, ...clashingEventInputs) {
    selectedEventInput.addEventListener("change", (e) => {

        //Set the current cost h4 to a variable
        const currentTotalCost = document.querySelector(".total");
        if (e.target.checked) {
            //Disable clashing event inputs
            disableInputs(clashingEventInputs);

            //If Main Conference is selected, update total Cost by $200 more
            if (selectedEventInput.name == "all") {
                totalCost += 200;
                refreshTotalCost(currentTotalCost);
            } else {
                //Else, update by $100 more 

                totalCost += 100;
                refreshTotalCost(currentTotalCost);
            }; //End if
        } else {
            //Enable clashing event inputs
            enableInputs(clashingEventInputs);
            
            //If Main Conference is unselected, update total Cost by $200 less
            if (selectedEventInput.name == "all") {
                totalCost -= 200;
                refreshTotalCost(currentTotalCost);
            } else {
                //Else, update by $100 less
                totalCost -= 100;
                refreshTotalCost(currentTotalCost);
            }; //End if
        }; //End if
    }); //End Event listener
}; //End selectEventListener 

function validateSubmission(nameField, costHeader, ...fields) {
    
}