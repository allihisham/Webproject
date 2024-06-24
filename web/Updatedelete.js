function Student(Name, id, email, phone_number, date, GPA, Gender, Level, Status, Department) {
    this.Name = Name;
    this.id = id;
    this.email = email;
    this.phone_number = phone_number;
    this.date = date;
    this.GPA = GPA;
    this.Gender = Gender;
    this.Level = Level;
    this.Status = Status;
    this.Department = Department;
}

let in_name, in_id, in_email, in_phone_number, in_date, in_GPA, in_Gender, in_Level, in_Status, in_dep;



let new_student;


//yourSelect.options[ yourSelect.selectedIndex ].value


function selectFunction() {
    var x = document.getElementById("mySelect").value;
    if (x === "Level-1" || x === "Level-2") {
        document.getElementsByClassName("generaldep")[0].style.display = "block";
        for (let i = 0; i < 5; i++) {
            document.getElementsByClassName("dep")[i].style.display = "none";
        }
    } else {
        document.getElementsByClassName("generaldep")[0].style.display = "none";
        for (let i = 0; i < 5; i++) {
            document.getElementsByClassName("dep")[i].style.display = "block";
        }
    }
}

function myFunction() { ///form function
    let valid = true;

    in_id = document.getElementsByClassName("IP1")[0].value;
    if (in_id < 1 || in_id == "") {
        valid = false;



    }

    /********************************************************** */

    in_name = document.getElementsByClassName("IP2")[0].value;
    if (typeof in_name != "string" || in_name == "") {
        valid = false;



    }



    /********************************************************** */
    in_date = document.getElementsByClassName("IP3")[0].value;

    /********************************************************** */
    in_GPA = document.getElementsByClassName("IP4")[0].value;
    if (in_GPA > 4.0 || in_GPA < 0.0 || in_GPA == "") {

        valid = false;


    }
    /********************************************************** */
    in_email = document.getElementsByClassName("IP9")[0].value;
    if (typeof in_email != "string" || in_email == "") {

        valid = false;


    }
    /********************************************************** */
    let ele = document.getElementsByName('Gender');
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked)
            in_Gender = ele[i].value;
    }
    /********************************************************** */
    selectElement = document.getElementById('mySelect');
    in_Level = selectElement.options[selectElement.selectedIndex].value;

    /********************************************************** */
    selectElement2 = document.getElementById('activity');
    in_Status = selectElement2.options[selectElement2.selectedIndex].value;

    /********************************************************** */
    selectElement1 = document.getElementById('mydep');
    in_dep = selectElement1.options[selectElement1.selectedIndex].value;

    /********************************************************** */

    /*********************************************************** */

    in_phone_number = document.getElementsByClassName("IP10")[0].value;
    for (let i = 0; i < in_phone_number.length; i++) {
        if (in_phone_number[i] > '9' || in_phone_number[i] < '0') {
            valid = false;


        }
    }

    /********************************************************** */
    if (valid) {
        new_student = new Student(in_name, in_id, in_email, in_phone_number, in_date, in_GPA, in_Gender, in_Level, in_Status, in_dep);
        // console.log(new_student);
    }

    return valid;

}






function submitfun() { ///button function///
    if (myFunction()) {
        window.alert(" student has been updated");
    } else {
        window.alert("Invalid Inputs");
    }
}