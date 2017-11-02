
    var username = document.forms['vform']['username'];
    var email = document.forms['vform']['email'];
    var fone = document.forms['vform']['fone'];
    var adress = document.forms['vform']['adress'];
    var adress_1 = document.forms['vform']['adress_1'];
    var zip = document.forms['vform']['zip'];
    var city = document.forms['vform']['city'];
    var country = document.forms['vform']['country'];
    var checkbox = document.forms['vform']['accept'];

    var name_error = document.getElementById("name error");
    var email_error = document.getElementById("email error");
    var fone_error = document.getElementById("fone error");
    var adress_error = document.getElementById("adress error");
    var adress_1_error = document.getElementById("adress_1 error");
    var zip_error = document.getElementById("zip error");
    var city_error = document.getElementById("city error");
    var country_error = document.getElementById("country error");
    var check_error = document.getElementById("check_error");

    username.addEventListener("blur", nameVerify, true );
    email.addEventListener("blur", emailVerify, true );
    fone.addEventListener("blur", foneVerify, true );
    city.addEventListener("blur", cityVerify, true );
    adress.addEventListener("blur", adressVerify, true );
    zip.addEventListener("blur", zipVerify, true );
    country.addEventListener("blur", countryVerify, true );
    checkbox.addEventListener("blur", checkVerify, true );

function Validate() {
    // name validation
    if(username.value == "") {
        username.style.border = " 1px solid red";
        name_error.textContent = 'name is required';
        username.focus();
        return false;
    }
    //email validation
    if(email.value == "") {
        email.style.border = " 1px solid red";
        email_error.textContent = 'email is required';
        email.focus();
        return false;
    }
    if(fone.value == "") {
        fone.style.border = " 1px solid red";
        fone_error.textContent = 'fone is required';
        fone.focus();
        return false;
    }
    if(adress.value == "") {
        adress.style.border = " 1px solid red";
        adress_error.textContent = 'Adress is required';
        adress.focus();
        return false;
    }
    if(zip.value == "") {
        zip.style.border = " 1px solid red";
        zip_error.textContent = 'zip is required';
        zip.focus();
        return false;
    }
    if(city.value == "") {
        city.style.border = " 1px solid red";
        city_error.textContent = 'city is required';
        city.focus();
        return false;
    }
    if(country.value == "") {
        country.style.border = " 1px solid red";
        country_error.textContent = 'country is required';
        country.focus();
        return false;
    }
    if(checkbox.checked == false) {
        check_error.textContent = 'You must agree';
        checkbox.focus();
        return false;
    }

}
    function nameVerify() {
        if ((username.value != "") && (/^[a-zA-Z]{5,20}$/.test(username.value))) {
            username.style.border = "2px solid #5E6E66";
            name_error.innerHTML = "";
            return true;
        } else {
            username.style.border = " 1px solid red";
            name_error.textContent = 'name must contain ONLY  LAT LETTERS';
            username.focus();
            return false;
        }
    }
    function emailVerify() {
        if ((email.value != "") &&
            (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                .test(email.value)))
        {
            email.style.border = "2px solid #5E6E66";
            email_error.innerHTML = "";
            return true;
        } else {
            email.style.border = " 2px solid red";
            email_error.textContent = 'Please, Enter correct Email';
            email.focus();
            return false;
        }
    }
    function foneVerify() {
        if ((fone.value != "")  && (/^[+][0-9]{12}$/.test(fone.value))) {
            fone.style.border = "2px solid #5E6E66";
            fone_error.innerHTML = "";
            return true;
        } else {
            fone.style.border = " 1px solid red";
            fone_error.textContent = 'Fone must contains ONLY 12 Numbers';
            fone.focus();
            return false;
        }
    }
    function adressVerify()   {
        if ((adress.value != "") &&  (/^[a-zA-Z0-9]{5,30}$/.test(adress.value)))
        {
            adress.style.border = "2px solid #5E6E66";
            adress_error.innerHTML = "";
            return true;
        } else {
            adress.style.border = " 1px solid red";
            adress_error.textContent = 'Your Adress must contain less than 30 letters & numbers';
            adress.focus();
            return false;
        }
    }
    function zipVerify() {
        if ((zip.value != "") && (/^[0-9]{6}$/.test(zip.value))) {
            zip.style.border = "2px solid #5E6E66";
            zip_error.innerHTML = "";
            return true;
        } else {
            zip.style.border = " 2px solid red";
            zip_error.textContent = 'ZIP CODE must contains 6 NUMBERS';
            zip.focus();
            return false;
        }
    }
    function cityVerify() {
        if ((city.value != "") && (/^[a-zA-Z]{3,50}$/.test(city.value))) {
            city.style.border = "3px solid #5E6E66";
            city_error.innerHTML = "";
            return true;
        } else {
            city.style.border = " 2px solid red";
            city_error.textContent = 'City Name must contains more then 3 & less than  50 letters';
            city.focus();
            return false;
        }
    }
    function countryVerify() {
        if ((country.value != "") && (/^[a-zA-Z]{3,50}$/.test(country.value)))
        {
            country.style.border = "3px solid #5E6E66";
            country_error.innerHTML = "";
            return true;
        } else {
            country.style.border = " 2px solid red";
            country_error.textContent = 'Country Name must contains more then 3 & less than  50 letters';
            country.focus();
            return false;
        }
    }

    function checkVerify() {
        if (checkbox.checked)
        {
            check_error.innerHTML = "";
            return true;
        } else {
            check_error.textContent = 'You must Agree';
            country.focus();
            return false;
        }
    }




