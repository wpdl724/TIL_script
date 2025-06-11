function greeting(){
    return console.log('hello');
}

setInterval(greeting,3000); // 3초후에 이 함수(greeting)를 부르겠다 -> 1번만 실행하는 것이 아니라 반복 실행하고 있다 

// 타이머 함수 setInterval 일정시간반복
let num1 = 0;
function num1Func(){
    num1++;
    if(num1>4){num1=1}
    console.log(num1);
    //1234123412341234....
}
//setInterval(num1Func,1000)

let num2 = 0;
// 0~ 5 반복 출력 타이머 제작 012345012345012345... 
function num2Func(){
    num2++; // 출력하고 -> 증가해서 돌아와라 
    console.log(num2);
    if(num2==6){num2=0}
}
//setInterval(num2Func,500) // 0.5초 간격으로 나오게 하고 싶다

// 6 ~ 0 출력타이머 65432106543210...
let num3 = 6; // =만 쓰면 '대입'을 뜻한다
function num3Func(){
    console.log(num3); // 
    num3--;
    if(num3<0){num3=6}
}
setInterval(num3Func, 500)