interface DirectorsInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string; 
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorsInterface {
  workFromHome(): string {
    return 'Working from home';
  }
  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }
  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }
  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }
  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

function createEmployee(firstName: string, lastName: string, salary: number | string): Director | Teacher {
  if (salary as number && salary < 500) return new Teacher();
  else return new Director(); 
}

console.log(createEmployee('Sam', 'Ali', 200));
console.log(createEmployee('Hena', 'Free', 1000));
console.log(createEmployee('Lucas', 'Levia', '$500'));

function isDirector(employee: Director | Teacher): employee is Director {
  return (employee instanceof Director) ? true : false;
}

function executeWork(employee: Director | Teacher): string {
  return isDirector(employee) ? employee.workDirectorTasks() : employee.workTeacherTasks();
}

console.log(executeWork(createEmployee('Sam', 'Ali', 200)));
console.log(executeWork(createEmployee('Hena', 'Free', 1000)));

type Subjects = 'Math' | 'English';
function teachClass(todayClass: Subjects): string{
  return todayClass === 'Math' ? 'Teaching Math' : 'Teaching English';
}

console.log(teachClass('Math'));
console.log(teachClass('English'));
