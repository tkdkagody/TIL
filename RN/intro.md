## 기억할것.

RN은 브라우저가 아니다.

1. div사용 불가능 -> View를 사용 (import)
2. <Text></Text> 안에 텍스트를 입력해야함.(import)
3. 원하는대로 style을 쓸 수 있음. (object or not)

- StyleSheet.create({}) 는 object를 생성함( 장 : 자동완성기능, 모으기 )

```js
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
```

## Packages

- status-bar
