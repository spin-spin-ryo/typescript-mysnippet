// 方注釈について
// 参考：https://qiita.com/kenRp01/items/e4a5b08d7968aba855e1

// objectの内容をベタ打ちできる。あんまり使わなさそう
const Person :{
  name:string,
  id:string
} = {
  name:"山田太郎",
  id:"yamada taro"
} 

// tuple
// 異なる型の配列
const tuples: [string,number, boolean] = ["aaa",100,false];


// Javaと同じくEnumができる
enum MagicType {
  FIRE = 1,
  ICE = 2,
  WATER = 3
}
const magicType = MagicType.FIRE

// Union 複数の型を注釈できる
let initialValue : string |undefined = "aaaa"
initialValue = undefined

// UnionをListにできる
let initialValues : (string |number)[] = ["aaa",53,'bbb']

// リテラル型
let human:"yamada" = "yamada"
// human = "taro" (これはエラーになる)

