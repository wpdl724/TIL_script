// for (조건변수; 조건문; 증감식){조건문이 참일때 반복실행결과}
//"자바스크립트" 문자열 10번 반복
/*for(let i=1; i<3; i++){
    console.log('자바스크립트');
}
// "1월 ~ 12월" 12번 반복 
// 개발자가 화면에 출력하고 싶은 첫번째 번호가 for문의 초기변수에 들어가는 값이 된다
for(let i=1; i<=12; i++) {
    console.log(i+'월')
}// 13보다 작을때까지를 작성하던가 12보다 작거나 같을때 까지 라고 작성해야 참의 결과가 나온다

//6월 ~ 12월 반복 출력 
console.log(`====== 반복문 연습 1 =======`);
for(let i=6; i<=12; i++){
    console.log(i+'월');
}*/

// 커피
/*console.log(`====== 반복문 연습 2 =======`);
const coffee = ['아메리카노', '카페라떼', '에스프레소', '녹차라떼', '돌체라떼','차이라떼', '프라푸치노']
console.log(coffee);
for(let i=0; i<coffee.length; i++){ // 커피 메뉴의 갯수만큼 증가해라  (length는 갯수를 말한다)
    console.log(coffee[i]);
} //6보다 작을때까지; 라고 작성하기 증가++

console.log(`===`);
//1번 메뉴 아메리카노
//2번 메뉴 카페라때  .... 반복 되게 출력하기
for(let i=0; i<coffee.length; i++){
    console.log((i+1)+'번 메뉴'
    +coffee[i]);
}
// 역순 카페 메뉴 출력 (차이라떼 부터 나와야한다)
console.log(`===`);
for(let i=coffee.length-1; i>=0; i--){ // i가 5로 시작해서 0보다 크거나 같을때까지 감소해라
    console.log((i)+'번 메뉴'+coffee[i]);
}*/

/*console.log(`=== 반복문 연습 3 ===`);
// 구구단 2단 ~ 9단 출력
// 2단 2x1 = 2 형태로 출력하기
// 2x1=(2*1)
// 2x2=(2*2)
// 2x3=(2*3)
// 2x4=(2*4)
// 2x5=(2*5)
// 2x6=(2*6)
// 2x7=(2*7)
// 2x8=(2*8)
// 2x9=(2*9)
for (let i=1; i<10; i++){
    console.log(`2x${i}=${2*i}`);
}*/

/*console.log(`=== 반복문 연습 4 ===`);
//for 반복 + if 조건
//1~20까지 출력 반복문 
for(let i=1; i<=20; i++){
    //조건문 if 활용 1~20까지 반복 숫자 중 홀수만 출력
    //숫자%2 == 1 (1을 작성하면 홀수 값 / 0를 작성하면 짝수 값이 나온다)
    if(i%2 == 1){
        console.log(i);
    }
}*/

/*console.log(`=== 반복문 연습 5 ===`);
// 10~20까지 역순으로 짝수만 출력 반복문
for(let i =20; i>=10; i--){
    if(i%2 == 0){
        console.log(i);
    }
}*/

console.log(`=== nav ===`);
const navA = document.querySelectorAll('nav a');
console.log(navA);
for(let i=0; i<navA.length; i++){
    //console.log(navA[i])
    //모든 a 글자색 빨강색으로 적용하고 싶다
    //navA[i].style.color = '#f00';
    //홀수 a는 빨강 . 짝수 a는 파랑으로 만들고 싶다면? <홀수 짝수 구분하는것이 조건>
    //홀수
    if(i%2==1){
        navA[i].classList.add('odd');
        //navA[i].style.color = '#f00' // 빨강
        //navA[i].style.backgroundColor = '#ff0';
    }else {
        navA[i].classList.add('even');
        //navA[i].style.color = '#00f' // 파랑
        //navA[i].style.backgroundColor = '#eee';
    } 
}

console.log(`=== main ===`);
//li 변수를 만들고 배경색 노랑 변경
const liA = document.querySelectorAll('.list li');
console.log(liA);
//for(let i=0; i<4; i++){} // 이렇게 쓰면 유지보수가 번거로워진다
for(let i=0; i<liA.length; i++){
    // console.log(mainA[i]);
    liA[i].style.backgroundColor = '#ff0'//빨강
}
