// 함수 호출과 함수 선언 . 




const add = (a, b) => a + b ;    // return a+b ; 
const add2 = (a,b) => {a+b} ;    // 리턴값이 아닌, 함수의 바디로 읽어들임.  따라서 객체 리턴시에는 '괄호' 필수    =>  ({a+b})

function calculator(func, a, b) {
    return func(a,b);
}

add(3, 5); // 8 

calculator(add, 3, 5) ; //8
//add() => 함수 호출!!  


////////////////////////////////////////////////////////////////////////////////////////

document.querySelector("#header").addEventListener('click', add); 
// 이렇게 아래와같이  add()가 들어가서 함수호출이 들어간 경우, add의 리턴값으로 생각해주면 된다
document.querySelector("#header").addEventListener('click', add()); // ('click', undefined)



///////////////////////////////////////  리액트   /////////////////////////////////////////////////

import {useCallback} from 'react';

export const App = () => {
    const onClick = useCallback((e)=> {
        console.log(e.target);
    },[]);

    return (
        <div onClick={onClick}></div>
    )
}