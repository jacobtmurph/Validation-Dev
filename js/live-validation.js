
/*** Basic Info ***/

//Select and set required variables for validation fields.
const name = document.getElementById("name");
const emailInput = document.getElementById("mail");
const jobSelector = document.querySelector("select[name='user_title']");
const jobDesc = document.getElementById("job");

//Auto focus and select the name field
name.focus();
name.select();

//Hide the Job Description input
jobDesc.style.display = "none";

//Validate email in real-time
validateEmail(emailInput);


//Listen for Change in the job selector
jobSelector.addEventListener("change", () => {
    if (jobSelector.value == "other") {
        jobDesc.style.display = "block";
    } else {
        jobDesc.style.display = "none";
    }; //End If
}); //End Event Listener


/*** T-Shirt Info ***/

//Collect elements for hiding and displaying
const designSelector = document.getElementById("design");
const colorDiv = document.getElementById("colors-js-puns");
const colorSelector = document.getElementById("color");
const jsPunShirts =  Array.from(colorSelector.children).slice(0, 3);
const iHeartJsShirts =  Array.from(colorSelector.children).slice(3);

//Auto hide color tab
colorDiv.style.display = "none";

//Listen for Change in the design selector
designSelector.addEventListener("change", () => {
    //If no design is selected, hide the color div
    if (design.value == "Select Theme") {
        colorDiv.style.display = "none";
    } else if (design.value == "js puns") {
        //If the "JS Puns" Design is selected, how the colorDiv but hide "I heart JS" designs
        colorDiv.style.display = "inline";

        jsPunShirts.forEach(teeDesign => {
            teeDesign.style.display = "inline";
        });

        iHeartJsShirts.forEach(teeDesign => {
            teeDesign.style.display = "none";
        });
    } else {
        //Else, show the color div & only "I heart JS" designs
        colorDiv.style.display = "inline";

        iHeartJsShirts.forEach(teeDesign => {
            teeDesign.style.display = "inline";
        });

        jsPunShirts.forEach(teeDesign => {
            teeDesign.style.display = "none";
        });

    };//End if
}) //End Event Listenet

/*** Activities ***/
//Set total cost 
let totalCost = 0;

//Get and set variables for each input of the Activites section.
getInputs("all", "js-frameworks", "js-libs", "express", "node", "build-tools", "npm");

//Add selectEventListener Function for the Main Conference and each event from 9am-12pm.
selectEventListener(allInput);

selectEventListener(jsFrameworksInput, expressInput, buildToolsInput);

selectEventListener(expressInput, jsFrameworksInput, buildToolsInput);

selectEventListener(buildToolsInput, expressInput, jsFrameworksInput);


//Add selectEventListener Functions for each event from 1pm-4pm

selectEventListener(jsLibsInput, nodeInput, npmInput);

selectEventListener(nodeInput, jsLibsInput, npmInput);

selectEventListener(npmInput, nodeInput, jsLibsInput);


/*** Payment Info ***/

const paymentSelector = document.querySelector("#payment");

//Set default payment method to Credit card
paymentSelector.value = "credit card";

//Hide other payment info
 document.querySelector("#paypal").style.display = "none";
 document.querySelector("#bitcoin").style.display = "none";

 //Select credit card payment fields
 const cardNum = document.querySelector("#cc-num");
 const zip = document.querySelector("#zip");
 const cvv = document.querySelector("#cvv");

 //Validate payment info
 validateCreditCard(cardNum, zip, cvv);

paymentSelector.addEventListener("change", () => {
    switch (paymentSelector.value) {
        case "credit card":

            //Display credit card payment info
            document.querySelector("#credit-card").style.display = "block";

            //Hide other payment info
            document.querySelector("#paypal").style.display = "none";
            document.querySelector("#bitcoin").style.display = "none";

            //Validate payment info
            validateCreditCard(cardNum, zip, cvv);
            
            break;
        case "paypal":
            //Reset credit card information & borders
            resetCreditCardInfo(cardNum, zip, cvv);

            //Display paypal payment info
            document.querySelector("#paypal").style.display = "block";

            //Hide other payment info
            document.querySelector("#credit-card").style.display = "none";
            document.querySelector("#bitcoin").style.display = "none";

            break;
        case "bitcoin":
            //Reset credit card information & borders
            resetCreditCardInfo(cardNum, zip, cvv);


            //Display bitcoin payment info
            document.querySelector("#bitcoin").style.display = "block";

            //Hide other payment info
            document.querySelector("#credit-card").style.display = "none";
            document.querySelector("#paypal").style.display = "none";
    }; //End switch

}); //End Event Listener
