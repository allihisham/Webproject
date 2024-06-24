function student(Name,ID,Level,Department)
{
    this.Name = Name ;
    this.ID= ID;
    this.Level = Level;
    this.Department=Department;
}

function ds(){
    alert("submitted successfully!")
}
let s1 = new student("Hisham Helmy","20200622","Level 3","IS");
document.getElementById("name").innerHTML = `${s1.Name}`;
document.getElementById("id1").innerHTML = `${s1.ID}`;
document.getElementById("Level").innerHTML = `${s1.Level}`;
function myfunction(){
    selectElement = document.getElementById('mySelect');
      in_Level = selectElement.options[selectElement.selectedIndex].value;
      s1.Department = in_Level;

}

