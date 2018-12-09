// declare list students
const listStudent = [];

// class Student
class Student {
  constructor(name, age, isFemale) {
    this.name = name;
    this.age = age;
    this.isFemale = isFemale;
  }
// add student to list students
  static addStudent(student) {
    listStudent.push(student);
    console.log('Student was pushed to list students');
    return ;
  }
// return student by index 
  static getInfoStudent(index) {
    if (index !== undefined && Number.isInteger(index)) {
      let student = listStudent[index];
      console.log(`
        name: ${student.name}
        age: ${student.age}
        isFemale: ${student.isFemale}
      `);
      return student;
    } 
    console.log(new Error('Index is invalid'));
  }
// return index of student by list students
  static getIndexOfStd(name) {
    if (name) {
      let student = listStudent.find((student) => student.name === name);
      console.log(listStudent.indexOf(student));
    }
  }
// delete student by student's name
  static deleteStudent(name) {
    let indexOfStudent = listStudent.indexOf(name);
    listStudent.splice(indexOfStudent, 1);
    console.log('Deleted!!');
    return listStudent;
  }
}

let person1 = new Student('Minh', 18, false);
let person2 = new Student('Thao', 18, true);
let person3 = new Student('Giang', 21, true);
let person4 = new Student('Hoang', 20, false);

Student.addStudent(person1);
Student.addStudent(person2);
Student.addStudent(person3);
Student.addStudent(person4);

Student.getInfoStudent(0);

Student.getIndexOfStd('Hoang');

Student.deleteStudent('Hoang');

