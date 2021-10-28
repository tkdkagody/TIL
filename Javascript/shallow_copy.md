## JS 얕은복사 (shallow copy)

객체가 담겨있는 변수를 다른 변수에 할당하면,
'참조'가 일어나게 되어 한 변수의 데이터를 변경하면 다른 변수의 데이터도 함께 변경이 된다.
즉, 복사된 하나의 데이터가 더 생성된것이 아니고, 해당 메모리의 주소를 전달한것. 공유의 개념 !!

```js
const per1 = { name: "aa" };

const per2 = per1;

per1.name = "bb";

// result

console.log(per2.name); // 'bb'

console.log(per1 === per2); // true - 같은 데이터 주소를 바라보고 있는 두 변수
```

## JS 깊은 복사(Depth copy)

한 데이터의 공유가 아니라, 똑같은 구조를 하나 더 생성해야하는 경우가 있다.
이때 '깊은 복사'의 개념을 사용한다.

```js
const per1 = { name: "aa" };

const per2 = Object.assign({}, per1);

per1.name = "bb";

// result

console.log(per2.name); // 'aa'  - 얕은복사와는 다르게 per2의 값은 변하지 않았다 !

console.log(per1 === per2); // false - 형태만 같고, 각자 다른 메모리 주소에 저장되어 있는 데이터이다 !
```

---

## 깊은 복사(Depth copy)를 하는 일반적인 방법 1

\*Object.assign() : 객체 형태의 데이터를 쉽게 병합할 수 있게 해주는 함수이다.

```js
const obj1 = { a: 1, b: 2 };
const obj2 = Object.assign({}, obj1); // 비어있는 {}에 originObj를 병합하여 반환해준다.
obj2.a = 100;

console.log(obj1.a); // 1
console.log(obj1 === obj2); //false  - 값이 똑같은 형태의 객체가 새로 생성됨. 단, 참조값이 다르므로 false
```

이제 obj1과 obj2는 다른 주소를 가지게 되었다.
그러나 딱, 1depth까지만 !!

---

## 깊은 복사(Depth copy)의 함정

\*MDN의 전개구문
참고: Spread 문법은 배열을 복사할 때 1 레벨 깊이에서 효과적으로 동작합니다.
그러므로, 다음 예제와 같이 다차원 배열을 복사하는것에는 적합하지 않을 수 있습니다.
(Object.assign() 과 전개 구문이 동일합니다)

- Object.assign() 메소드도 spread 연산자 둘 다 완벽한 Deep copy 되지 않는다.
- 객체가 서로 다르다고 깊은 복사가 이루어진건 아니다.
- 1 depth 까지는 확실하게 Deep copy.
- 2 depth 이상이면 Shallow copy.

```js
const obj1 = { a: { b: 1, c: 1 }, d: 2 };
const obj2 = { ...obj1, a: { ...obj1.a } };
obj1.a.b = 100;
console.log(obj1 === obj2); // false
console.log(obj2.a.b); // 1
```

---

❗️완벽한 Deep copy를 위한 다른 방법 (알아보기)

- 재귀적으로 깊은 복사를 수행
- Lodash의 cloneDeep 함수 사용
- JSON.parse()와 JSON.stringify()함수 사용
