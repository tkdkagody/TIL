//함수형 프로그래밍 
//filter와  map 함수 만들기 


const users = [
    {id:1, name: "ID", age: 36},
    {id:2, name: "BJ", age: 32},
    {id:3, name: "JM", age: 32},
    {id:4, name: "PJ", age: 27},
    {id:5, name: "HA", age: 25},
    {id:6, name: "JE", age: 26},
    {id:7, name: "JI", age: 31},
    {id:8, name: "MP", age: 23},
];

//함수형 자체가 
//값을 직접 변형하지 않고 
//변형된 새로운 값을 리턴하는 형태임 


//filter같은 함수는 응용형 함수(고차함수),
//함수를 인자로 받아서 원하는 시점에 평가하며 내가 원하는 인자를 적용해나감 
function _filter(users, predi) {
    var new_list = [];
    for(var i=0; i<users.length; i++){

        if(predi(users[i])){
            new_list.push(users[i]);
        }
 
    }
    return new_list;
}

_filter (users, function(user){ return user.age >=30});
_filter (users, function(user){return user.age<30});

_filter([1,2,3,4], function(num){return num%2});
_filter([1,2,3,4], function(num){return !(num%2)})



//_map함수 만들기 
function _map (list, mapper) {
    var new_list = [];
    for(var i=0; i<temp_users.length ; i++) {
        new_list.push(mapper(list[i]));

    }
    return new_list;
}

var over_30 = _filter (users, function(user){ return user.age >=30});
var name = _map(over_30, function(user){
    return user.name;
});

var age = _map(over_30, function(user){
    return user.age;
})

_map([1,2,3], function(num) {
    return num*2; 
});