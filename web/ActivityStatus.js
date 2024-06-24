function Save(){
    alert('Changes Saved');
}

function student(Name, id, Status){
    this.Name = Name;
    this.id = id;
    this.Status = Status;
}

let text = `
<select>
    <option>Active</option>
    <option>Inactive</option>
</select>`;

let First_Student = new student("Brad", "20200***", text);
let Second_Student = new student("Austin", "20200***", text);
let Third_Student = new student("Justin", "20200***",  text);
let Fourth_Student = new student("Name","20200***", text)

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
heading_1.innerHTML = "Name";
let heading_2 = document.createElement('th');
heading_2.innerHTML = "ID";
let heading_3 = document.createElement('th');
heading_3.innerHTML = "Activity Status";

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
thead.appendChild(row_1);

// Creating and adding data to second row of the table
let row_2 = document.createElement('tr');
let row_2_data_1 = document.createElement('td');
row_2_data_1.innerHTML = `${First_Student.Name}`;
let row_2_data_2 = document.createElement('td');
row_2_data_2.innerHTML = `${First_Student.id}`;
let row_2_data_3 = document.createElement('td');
row_2_data_3.innerHTML = `${First_Student.Status}`;

row_2.appendChild(row_2_data_1);
row_2.appendChild(row_2_data_2);
row_2.appendChild(row_2_data_3);
tbody.appendChild(row_2);

// Creating and adding data to Third row of the table
let row_3 = document.createElement('tr');
let row_3_data_1 = document.createElement('td');
row_3_data_1.innerHTML = `${Second_Student.Name}`;
let row_3_data_2 = document.createElement('td');
row_3_data_2.innerHTML = `${Second_Student.id}`;
let row_3_data_3 = document.createElement('td');
row_3_data_3.innerHTML = `${Second_Student.Status}`;

row_3.appendChild(row_3_data_1);
row_3.appendChild(row_3_data_2);
row_3.appendChild(row_3_data_3);
tbody.appendChild(row_3);

// Creating and adding data to Fourth row of the table
let row_4 = document.createElement('tr');
let row_4_data_1 = document.createElement('td');
row_4_data_1.innerHTML = `${Third_Student.Name}`;
let row_4_data_2 = document.createElement('td');
row_4_data_2.innerHTML = `${Third_Student.id}`;
let row_4_data_3 = document.createElement('td');
row_4_data_3.innerHTML = `${Third_Student.Status}`;

row_4.appendChild(row_4_data_1);
row_4.appendChild(row_4_data_2);
row_4.appendChild(row_4_data_3);
tbody.appendChild(row_4);

// Adding data to the Rest of Rows in the table
for(let i = 0; i < 2; i++) {
    for (let j = 0; j < 10; j++) {
        let row_5 = document.createElement('tr');
        let row_5_data_1 = document.createElement('td');
        row_5_data_1.innerHTML = `${Fourth_Student.Name}`;
        let row_5_data_2 = document.createElement('td');
        row_5_data_2.innerHTML = `${Fourth_Student.id}`;
        let row_5_data_3 = document.createElement('td');
        row_5_data_3.innerHTML = `${Fourth_Student.Status}`;

        row_5.appendChild(row_5_data_1);
        row_5.appendChild(row_5_data_2);
        row_5.appendChild(row_5_data_3);
        tbody.appendChild(row_5);
    }
}

