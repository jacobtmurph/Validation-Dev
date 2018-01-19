document.querySelector("form").addEventListener("submit", (e) => {
    switch (true) {
        case (name.value == ""):
            //Prevent page reload
            e.preventDefault();

            //Update label & border color
            name.previousElementSibling.textContent = "Name: (Cannot Be Empty)";
            name.style.borderColor = "red";

            //auto select the name field
            name.focus();
            name.select();

        case (emailInput.value == ""):
            //If email is empty:
            //Prevent page reload
            e.preventDefault();

            //Update email label & border
            emailInput.previousElementSibling.textContent = "Email: (Cannot Be Empty)";
            emailInput.style.borderColor = "red";

            //autofocus.
            emailInput.focus();
            emailInput.select();
       
        case (emailInput.style.borderColor == "red"):
            //If email is invalid:
            //Prevent page reload
            e.preventDefault();

            //Update email label & border
            emailInput.previousElementSibling.textContent = "Email: (Please Enter A Valid Email)";
            emailInput.style.borderColor = "red";

            // Autofocus.
            if (name.style.borderColor == "red") {
                name.focus();
                name.select();
            } else {
                emailInput.focus();
                emailInput.select();
                emailInput.scrollIntoView();
            }

        case (document.querySelector(".total") == undefined):
            //Prevent reload
            e.preventDefault();

            //Get activities div
            const activites = document.querySelector(".activities");

            //Append ledgend text
            activites.firstElementChild.textContent = "Register for Activities (Please select atleast one activity)";
            
            //Autofocus
            if (name.style.borderColor == "red") {
                name.focus();
                name.select();
            } else {
                activites.scrollIntoView();
            }
        case (paymentSelector.value == "credit card"):
            //If credit card payment is selected:

            //If the card number is invalid or empty:
            switch (true) { 
                case (cardNum.value == "" || cardNum.style.borderColor == "red"):
                    //Prevent reload
                    e.preventDefault();

                    //Update label & border color
                    cardNum.previousElementSibling.textContent = "Card Number: (Invalid)"
                    cardNum.style.borderColor = "red";

                    //Autofocus
                    if (name.style.borderColor == "red") {
                        name.focus();
                        name.select();
                    } else {
                        cardNum.focus();
                        cardNum.select();
                    }
                case (zip.value == "" || zip.style.borderColor == "red"):
                    //If the zip code is invalid
                    //Prevent reload
                    e.preventDefault();

                    //Update label & border color
                    zip.previousElementSibling.textContent = "Zip Code: (Invalid)";
                    zip.style.borderColor = "red";

                    //Autofocus
                    if (name.style.borderColor == "red") {
                        name.focus();
                        name.select();
                    } else {
                        zip.focus();
                        zip.select();
                    }
                case (cvv.value == "" || cvv.style.borderColor == "red"):
                    //If cvv is invalid
                    //Prevent reload
                    e.preventDefault();

                    //Update label & border color
                    cvv.previousElementSibling.textContent = "CVV: (Invalid)";
                    cvv.style.borderColor = "red";

                    //Autofocus
                    if (name.style.borderColor == "red") {
                        name.focus();
                        name.select();
                    } else {
                        cvv.focus();
                        cvv.select();
                    }
                default: break;
            } //End Switch
    default:
        break;
    } //End Switch
}) //End event listener
