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

// interface ：基本的にjavaと同じ
interface Nameable{
  name:string;
  nickName:string;

  showFullName():void;
}

interface NamedPerson extends Nameable{
  showShortName():void;
}

class You implements NamedPerson{
  name: string;
  nickName: string;
  constructor(name:string, nickName:string){
    this.name = name;
    this.nickName = nickName;
  }

  showFullName(): void {
    console.log(this.name)
  }

  showShortName(): void {
      console.log(this.nickName)
  }
}

const you:Nameable = new You("aaa","bbb")
you.showFullName()
// you.showShortName() エラーになる

// readonlyについて
// 基本読み込み専用になるが, implementsになるとなくなるので注意
interface Nameable1{
  name:string;
  nickName:string;

  showFullName():void;
}

interface NamedPerson1 extends Nameable1{
  readonly name:string;
  showShortName():void;
}

class You1 implements NamedPerson1{
  name: string;
  nickName: string;
  constructor(name:string, nickName:string){
    this.name = name;
    this.nickName = nickName;
  }

  showFullName(): void {
    console.log(this.name)
  }

  showShortName(): void {
      console.log(this.nickName)
  }
}

const you1:Nameable1 = new You1("aaa","bbb")
you1.showFullName()


// interfaceは基本的にtypeでかける
type NameableType = {
  name:string,
  nickName:string,
  showFullName:() => void
}

type NamedPersonType = {
  name:string,
  nickName:string,
  showFullName:() => void
  showShortName: () => void  
} & NameableType