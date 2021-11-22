# usecallback

(useMemo와 비슷한 역할을 하는 hook)

### usecallback을 사용해야하는 이유 ?

- 컴포넌트 내에서 함수를 생성하고 있다면, 컴포넌트가 리렌더링 될 때마다 함수가 새로 만들어지게 된다. 함수의 재선언이 큰 메로리를 차지 하는것은 아니지만, 한번 만든 함수를 재 사용하고,
  필요할때만 재 생성하는것을 통해 컴포넌트를 최적화 할 수 있다.  
  -> props가 바뀌지 않았으면, virtual dom에 새로 렌더링조차 하지 않고 결과물을 재사용하는 최적화 위해

- usecallback의 인자로는 인라인콜백과 의존성 값의 배열을 받게 된다.
  `useCallback(fn, deps)`

- 사용예시

```js
const [count1, setCount1] = useState({ num: 0 });

const add = () => {
  setCount({ num: count1.num + 1 });
};
```

- 주의할점 !
  함수 안에서 사용하는 상태 혹은 props는 꼭, deps안에 포함시켜주어야 한다.
  그래야 props변경시 새 props를 읽어올 수 있음 ?!

# 수정

usecallback 은 함수를 캐싱(한번 만들거나 계산한것을 재사용)을 하는것.
재사용하는 이유는 ?

State, Props또는 부모컴포넌트가 바뀌면 컴포넌트가 재랜더링이 된다  
그 뜻은 함수가 한번 더 실행이 된다는 뜻임 ! + 리턴부분 실행

usecallback을 사용하지 않고 일반 함수를 쓰면 함수가 재 생성이 된다. 그 뜻은 이전과 비교했을 때 다르다는 것 ( === 하면 False가 뜸)

usecallback에 넣ㄹ으면 재생성하지 않고 이전 함수를 재 사용하게 된다.
그런데, 이전것을 제거하고 새로운걸로 대체하고 싶은 경우 사용하는것이 의존성 배열임

기본적으로는 캐싱을 하되 새로 만들고 싶은경우 deps로 조정을 할 수 있다.

\*\* usecallback을 사용하지 않을 경우 ?

Return 안에 onchange, onsubmit에는 usecallback을 적용하고,
다른것에는 적용을 안하기도 함 .

- usecallback 과 usememo의 차이점\*

usecallback 은 함수 자체를 캐싱하는 것이고,
usememo는 함수의 return값을 캐싱하는 것임 !
