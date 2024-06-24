function student(Name, id, email, phone_number, date, GPA, Gender, Level, Status, Department) {
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

let s1 = new student("Hussein Mohamed El-Morsy", "20200159", "lol@gmail.com", 1111, "1/11/2002", 3.14, "male", "2", "active", "LOLDEP");
let s2 = new student("Mahmoud Nader Ali", "20200503", "lol@gmail.com", 1111, "1/1/1", 3.2, "male", "2", "active", "LOLDEP");
let s3 = new student("Mohamed Ahmed Nasr", "20200753", "lol@gmail.com", 1111, "1/1/1", 3.0, "male", "2", "active", "LOLDEP");
let s4 = new student("-", "-", "-", "-", "D/M/Y", "-", "-", "-", "-", "-");


let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

// Adding the entire table to the body tag
document.getElementById('body').appendChild(table);

// Creating and adding data to first row of the table
let row_1 = document.createElement('tr');
let heading_1 = document.createElement('th');
heading_1.innerHTML = "ID";
let heading_2 = document.createElement('th');
heading_2.innerHTML = "Name";
let heading_3 = document.createElement('th');
heading_3.innerHTML = "Birth date";
let heading_4 = document.createElement('th');
heading_4.innerHTML = "GPA";
let heading_5 = document.createElement('th');
heading_5.innerHTML = "Gender";
let heading_6 = document.createElement('th');
heading_6.innerHTML = "Level";
let heading_7 = document.createElement('th');
heading_7.innerHTML = "Active/Inactive";
let heading_8 = document.createElement('th');
heading_8.innerHTML = "Departement";
let heading_9 = document.createElement('th');
heading_9.innerHTML = "Email";
let heading_10 = document.createElement('th');
heading_10.innerHTML = "Phone";

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
row_1.appendChild(heading_4);
row_1.appendChild(heading_5);
row_1.appendChild(heading_6);
row_1.appendChild(heading_7);
row_1.appendChild(heading_8);
row_1.appendChild(heading_9);
row_1.appendChild(heading_10);
thead.appendChild(row_1);

// Creating and adding data to second row of the table
let row_2 = document.createElement('tr');
let row_2_data_1 = document.createElement('td');
row_2_data_1.innerHTML = `${s1.id}`;
let row_2_data_2 = document.createElement('td');
row_2_data_2.innerHTML = `${s1.Name}`;
let row_2_data_3 = document.createElement('td');
row_2_data_3.innerHTML = `${s1.date}`;
let row_2_data_4 = document.createElement('td');
row_2_data_4.innerHTML = `${s1.GPA}`;
let row_2_data_5 = document.createElement('td');
row_2_data_5.innerHTML = `${s1.Gender}`;
let row_2_data_6 = document.createElement('td');
row_2_data_6.innerHTML = `${s1.Level}`;
let row_2_data_7 = document.createElement('td');
row_2_data_7.innerHTML = `${s1.Status}`;
let row_2_data_8 = document.createElement('td');
row_2_data_8.innerHTML = `${s1.Department}`;
let row_2_data_9 = document.createElement('td');
row_2_data_9.innerHTML = `${s1.email}`;
let row_2_data_10 = document.createElement('td');
row_2_data_10.innerHTML = `${s1.phone_number}`;

row_2.appendChild(row_2_data_1);
row_2.appendChild(row_2_data_2);
row_2.appendChild(row_2_data_3);
row_2.appendChild(row_2_data_4);
row_2.appendChild(row_2_data_5);
row_2.appendChild(row_2_data_6);
row_2.appendChild(row_2_data_7);
row_2.appendChild(row_2_data_8);
row_2.appendChild(row_2_data_9);
row_2.appendChild(row_2_data_10);
tbody.appendChild(row_2);

// Creating and adding data to second row of the table
let row_3 = document.createElement('tr');
let row_3_data_1 = document.createElement('td');
row_3_data_1.innerHTML = `${s2.id}`;
let row_3_data_2 = document.createElement('td');
row_3_data_2.innerHTML = `${s2.Name}`;
let row_3_data_3 = document.createElement('td');
row_3_data_3.innerHTML = `${s2.date}`;
let row_3_data_4 = document.createElement('td');
row_3_data_4.innerHTML = `${s2.GPA}`;
let row_3_data_5 = document.createElement('td');
row_3_data_5.innerHTML = `${s2.Gender}`;
let row_3_data_6 = document.createElement('td');
row_3_data_6.innerHTML = `${s2.Level}`;
let row_3_data_7 = document.createElement('td');
row_3_data_7.innerHTML = `${s2.Status}`;
let row_3_data_8 = document.createElement('td');
row_3_data_8.innerHTML = `${s2.Department}`;
let row_3_data_9 = document.createElement('td');
row_3_data_9.innerHTML = `${s2.email}`;
let row_3_data_10 = document.createElement('td');
row_3_data_10.innerHTML = `${s2.phone_number}`;

row_3.appendChild(row_3_data_1);
row_3.appendChild(row_3_data_2);
row_3.appendChild(row_3_data_3);
row_3.appendChild(row_3_data_4);
row_3.appendChild(row_3_data_5);
row_3.appendChild(row_3_data_6);
row_3.appendChild(row_3_data_7);
row_3.appendChild(row_3_data_8);
row_3.appendChild(row_3_data_9);
row_3.appendChild(row_3_data_10);
tbody.appendChild(row_3);

// Creating and adding data to second row of the table
let row_4 = document.createElement('tr');
let row_4_data_1 = document.createElement('td');
row_4_data_1.innerHTML = `${s3.id}`;
let row_4_data_2 = document.createElement('td');
row_4_data_2.innerHTML = `${s3.Name}`;
let row_4_data_3 = document.createElement('td');
row_4_data_3.innerHTML = `${s3.date}`;
let row_4_data_4 = document.createElement('td');
row_4_data_4.innerHTML = `${s3.GPA}`;
let row_4_data_5 = document.createElement('td');
row_4_data_5.innerHTML = `${s3.Gender}`;
let row_4_data_6 = document.createElement('td');
row_4_data_6.innerHTML = `${s3.Level}`;
let row_4_data_7 = document.createElement('td');
row_4_data_7.innerHTML = `${s3.Status}`;
let row_4_data_8 = document.createElement('td');
row_4_data_8.innerHTML = `${s3.Department}`;
let row_4_data_9 = document.createElement('td');
row_4_data_9.innerHTML = `${s3.email}`;
let row_4_data_10 = document.createElement('td');
row_4_data_10.innerHTML = `${s3.phone_number}`;

row_4.appendChild(row_4_data_1);
row_4.appendChild(row_4_data_2);
row_4.appendChild(row_4_data_3);
row_4.appendChild(row_4_data_4);
row_4.appendChild(row_4_data_5);
row_4.appendChild(row_4_data_6);
row_4.appendChild(row_4_data_7);
row_4.appendChild(row_4_data_8);
row_4.appendChild(row_4_data_9);
row_4.appendChild(row_4_data_10);
tbody.appendChild(row_4);


for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 10; j++) {

        let row_5 = document.createElement('tr');
        let row_5_data_1 = document.createElement('td');
        row_5_data_1.innerHTML = `${s4.id}`;
        let row_5_data_2 = document.createElement('td');
        row_5_data_2.innerHTML = `${s4.Name}`;
        let row_5_data_3 = document.createElement('td');
        row_5_data_3.innerHTML = `${s4.date}`;
        let row_5_data_4 = document.createElement('td');
        row_5_data_4.innerHTML = `${s4.GPA}`;
        let row_5_data_5 = document.createElement('td');
        row_5_data_5.innerHTML = `${s4.Gender}`;
        let row_5_data_6 = document.createElement('td');
        row_5_data_6.innerHTML = `${s4.Level}`;
        let row_5_data_7 = document.createElement('td');
        row_5_data_7.innerHTML = `${s4.Status}`;
        let row_5_data_8 = document.createElement('td');
        row_5_data_8.innerHTML = `${s4.Department}`;
        let row_5_data_9 = document.createElement('td');
        row_5_data_9.innerHTML = `${s4.email}`;
        let row_5_data_10 = document.createElement('td');
        row_5_data_10.innerHTML = `${s4.phone_number}`;

        row_5.appendChild(row_5_data_1);
        row_5.appendChild(row_5_data_2);
        row_5.appendChild(row_5_data_3);
        row_5.appendChild(row_5_data_4);
        row_5.appendChild(row_5_data_5);
        row_5.appendChild(row_5_data_6);
        row_5.appendChild(row_5_data_7);
        row_5.appendChild(row_5_data_8);
        row_5.appendChild(row_5_data_9);
        row_5.appendChild(row_5_data_10);
        tbody.appendChild(row_5);

    }

}