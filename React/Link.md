# Link

Link를 통해 다른 화면에 정보를 실어 보낼 수 있다.

상위 컴포넌트에서 api데이터를 받아오고, 클릭한 경우
하위 컴포넌트에서 정보를 띄울 때 로딩없이 정보를 렌더할 수 있음을 기억하자
왜 ? 이미 브라우저는 데이터를 가지고 있기 때문!

#### 기존 사용하던 string 방식

1. <Link to="/about">About</Link>

#### query argument

2. <Link to="/courses?sort=name" />

#### obj방식 : state 를 통해 데이터 그 자체를 보낼 수 있다.

1. 링크로 state 보내기
<Link
    to={{
        pathname: "/courses",
        search: "?sort=name",
        hash: "#the-hash",
        state: { fromDashboard: true }
    }}
/>

2. state받아오기 : useLocation을 통해

```js
const location = useLocation();
//console.log(location); //Link state로 넘겨받은 값을 불러옴
```
