export class Person {
  name:string;
  age:number;
  constructor(name:string, age:number){
    this.name = name;
    this.age = age;
  }

  add(){
    this.age += 1;
  }
}

// const p = new Person("aaa",524)
// console.log(p)
// p.add()
// console.log(p)