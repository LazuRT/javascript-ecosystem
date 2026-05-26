const announcement = 'Hello';

interface User {
  id: number;
  name: string;
  age: number;
}

interface Worker extends User {
  job: string;
}

type Person = {
  id: number;
  name: string;
};

type Worker2 = Person & { job: string };

const user: User = {
  id: 1,
  name: 'Lazu',
  age: 20,
  // location: 'Indonesia',
};

const engineer: Worker = {
  id: 2,
  name: 'Ada',
  age: 20,
  job: 'Engineer',
};

const users: User[] = [
  { id: 1, name: 'Lazu', age: 20 },
  {
    id: 2,
    name: 'Budi',
    age: 20,
  },
];

const person1: Person = {
  id: 2,
  name: 'Bay',
};

const engineer2: Worker2 = {
  id: 3,
  name: 'Bay',
  job: 'Engineer',
};

function add(a: number, b: number) {
  return a + b;
}

function greet(name: string, age: number) {
  return `Hello ${name}, you are ${age} years old`;
}
console.log(announcement.toLocaleLowerCase());
console.log(user.age);
console.log(users);
console.log(engineer);
console.log(person1, engineer2);
console.log(users[0]);
console.log(add(2, 3));
console.log(greet(user.name, user.age));
