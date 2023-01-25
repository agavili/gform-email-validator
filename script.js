
/* Validation Button Animation */

function fadeout(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}
function fadein(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}

/* Validates Email Form Responses */

async function ValidateEmailResponse() {

    //Obtain Email Address Field 
    const email_element = document.querySelector('input[type="email"]');

    //Check if Email Input Exists 
    if(email_element != null){

        //AbstractAPI API Key 
        YOUR_UNIQUE_API_KEY = 'your-api-key';

        //Create Button
        const form_bottom = document.querySelector('div[class="lRwqcd"]');
        const validateButton = document.createElement("button");
        validateButton.innerHTML = "Validate Entries";
        validateButton.className = "validate-button";
        validateButton.setAttribute("id", "button-validate");

        //Style Button 
        validateButton.style.backgroundColor = '#663ab7';
        validateButton.style.fontFamily = 'Roboto, sans-serif';
        validateButton.style.color='#faf8fd';
        validateButton.style.borderRadius='6px';
        validateButton.style.border='0';
        validateButton.style.padding = '10px 20px 10px 20px';

        //Add Button to Page
        form_bottom.appendChild(validateButton);
        
        // Validation Logic 
            validateButton.addEventListener("click", function() {
                email = email_element.value; 
                const res = fetch(`https://emailvalidation.abstractapi.com/v1/?api_key=${YOUR_UNIQUE_API_KEY}&email=${email}`)
                .then(function (response) {
                    console.log(response.clone().json())
                    return response.json();
                }).then(function (data) {
                    var deliverability = data.deliverability;
                    if(deliverability != 'DELIVERABLE'){
                        alert("The email you've entered is unreachable, please re-enter it 🙏");
                    }else{
                        validateButton.innerHTML = "Entries are Valid 🙌";
                        validateButton.style.backgroundColor = '#137E06';
                        fadein(validateButton);
                    }
                }).catch(function (err) {
                    console.warn('Something went wrong.', err);
                });
            });
    }

}

ValidateEmailResponse();
