//호출스택

const x = 'x';
function c() {
    const y = 'y';
    console.log('c');
}


function a() {
    const x = 'x';
    console.log('a');
    function b() {
        const z = 'z';
        console.log('b');
        c();
    }
    b();
}


a();
c();

//코드는 일반적으로 위에서 아래, 왼쪽에서 오른쪽으로 실행됨 : 1차원적 
//호출 스택 => 호출을 할때마다 스택이 쌓임. 아래에서 위로 쌓이고-> 위에서 아래 순으로 빠져나감 
//자료구조 스택 & 큐 


//예를들어서 a() 호출이 생기면 
// a  + log + b + log + c + log   => log 들은 생기고 나가고 생기고 나가고 반복 . 스택에 아래부터 a b c 이렇게 쌓임 
//빠져나가는 타이밍은 함수 닫히는 부분이 읽힐때 빠져나가게 됨. 