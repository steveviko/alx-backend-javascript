// Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;
  [propName: string]: any;
}

// Directors interface
interface Directors extends Teacher {
  numberOfReports: number;
}

// Creating a teacher and a director
const teacher3: Teacher = {
  firstName: 'Steven',
  fullTimeEmployee: false,
  lastName: 'Opio',
  location: 'Gulu',
  contract: false,
};
console.log(teacher3);

const director1: Directors = {
  firstName: 'James',
  lastName: 'Rice',
  location: 'Lagos',
  fullTimeEmployee: true,
  numberOfReports: 23,
};
console.log(director1);

// returns a Teacher's name in this format: S. Ochino
function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

console.log(printTeacher('Fred', 'Denis'));

// class description interface
interface classInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

// constructor description interface
interface classConstructor {
  new (firstName: string, lastName: string): classInterface;
}

// Creating class and constructor through interfaces 
class StudentClass implements classInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// creating instance of StudentClass
const studentClass: StudentClass = new StudentClass('John', 'Doe');
console.log(studentClass.displayName());
console.log(studentClass.workOnHomework());
