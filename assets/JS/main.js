var fName = document.getElementById('fn-input');
var mName = document.getElementById("mn-input");
var lName = document.getElementById("ln-input");
var job = document.getElementById("job-input");
var salary = document.getElementById("sal-input");
var company = document.getElementById("comp-input");
var password = document.getElementById("pass-input");


function signUp(){

    if (testName()&&testJob()&&testCompany()&&testSalary()&&testPassword()== true) {
        return(window.alert("data is correct"))
    }else{
        return(window.alert("data is incorrect"))
    }
    
}

function testName(name){
    var nameRegex = /^[a-zA-Z ]{3,}$/g;

    if (nameRegex.test(fName&&mName&&lName.value) == true)  {
        return true;
    }

    false
}

function testJob(){
    var jobRegex = /^[a-zA-Z ]{3,}$/g;

    if (jobRegex.test(job.value)==true) {
        return true;

    }

    false
}


function testCompany(){
    var companyRegex = /^[a-zA-Z ]{3,}$/g;

    if (companyRegex.test(company.value) == true) {
        return true;
    }

    false
}


function testSalary(){
    var salaryRegex = /^[0-9]{4,8}$/g;

    if (salaryRegex.test(salary.value)== true) {
        return true;
    }

    false
}

function testPassword(){
    var passwordRegex = /^[a-zA-Z0-9!@#$%^&*]{4,9}$/g;

    if (passwordRegex.test(password.value)== true) {
        return true;
    }

    false
}