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
