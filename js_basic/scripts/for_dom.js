// for(변수 초기값; 조건식; 증감식){조건이 참일때 반복구문} 반복종료(조건거짓) 
for(let i=0; i<5; i++){console.log(i)}//5보다 작을때 까지 증가해라
const li = document.querySelectorAll('ul li');
console.log(li) // 3개의 li 출력
for(let i=1; i<=2; i++){
    li[i].classList.add('list_active');
    //li[i].style.backgroundColor = 'yellow';
    //li[i].style.textAligin = 'center';
} 
// 태그 2개 이상 다수를 변수를 대입할때 querySelectorAll 선언후 사용시 변수[index] 활용하기 (주로 for 반복문과 함께 활용)
// -------------- JS DOM 복제 붙여넣기 (데스크탑 네비와 모바일 네비에 주로 활용)
// 붙여넣기 위치 DOM, 복제 DOM 변수 만들기!
const section = document.querySelector('section');
const ul = document.querySelector('ul'); //ul DOM 선택 (원본)
const ulClone = ul.cloneNode(true);// ul 자식, 자손 포함 복제 (ctrl+c를 눌러놓은 상태이다)
console.log(section, ul, ulClone);

// 복제한 요소 붙여넣기 (대상요소의 마지막자식 위치로 붙여넣기)
section.appendChild(ulClone); // 회색 박스 안에 ul이 들어갔다 // section 마지막 자식위치에 복제 대상 붙여넣기 (ctrl+v 를 한 상태이다.)

//================================================
//while 반복문 (조건이 참일 경우 무한 반복)
//while(조건){괄호 안 조건이 참일 경우 실행문}
/* let htmlQ = confirm('a태그는 alt속성이 있다. 맞으면 확인, 틀리면 취소를 누르세요');
console.log(htmlQ); */
// 위 문제를 푸는 학생이 문제를 틀리면 무한 반복 질문
// 문제를 맞추면 -> alert('정답입니다!')
/* while (htmlQ !=false){
    htmlQ = confirm('a태그는 alt속성이 있다. 맞으면 확인, 틀리면 취소를 누르세요');
}
alert('정답입니다!')

let cssQ = confirm('그리드 정렬 justify-content (row)에서 space-evenly은 모든 공간을 동일하게 나눈다 의미가 맞다면 확인, 틀리면 취소를 누르세요');
console.log(cssQ);
while(cssQ !=true){
    cssQ = confirm('그리드 정렬 justify-content (row)에서 space-evenly은 모든 공간을 동일하게 나눈다 의미가 맞다면 확인, 틀리면 취소를 누르세요');
}
alert('정답')
let jsQ = confirm('이름이 없는 함수는 익명함수이다 맞으면 확인 틀리면 취소를 누르세요');
while(jsQ !=true){
    jsQ = confirm('이름이 없는 함수는 익명함수이다 맞으면 확인 틀리면 취소를 누르세요');
}
alert('정답') */

// 반복문을 강제 종료하는 break
let num = 1;
while(num <= 10){
    if(num==5) break; // 출력값이 1,2,3,4가 뜨는 것을 볼수 있음 
    console.log(num)
    num++;
}
console.log(`=======================continue`);
for(var i=1; i<=10; i++){
    continue;
    console.log(i); 
}
console.log(i);// error? 1? 10? 11? -> 11이 뜬다

console.log(`=======================다중반복문 (반복문 중첩)`);
//for문 안 for문이 추가로 있는 구조(2단, 3단 반복가능)
//첫번째 for문이 한번 실행될때 두번째(안쪽)for문은 조건이 거짓이 될때까지 모두 반복실행된다
for(let i =1; i<3; i++){//첫번째 for문 
    for(let j=0; j<2; j++){//두번째 for문
        console.log('첫번째 i 값:', i, '두번째 j값', j);
    }
}
console.log(`=======================다중반복문 활용 구구단`);
const dan99 = document.querySelector('.dan99');
for(let i=2; i<=9; i++){//2
    for(let j=1; j<=9; j++){//123456789가 모두 도는것
        //console.log(`${i}x${j}=${i*j}`)
        dan99.innerHTML += `${i}x${j}=${i*j}<br>`
        //2단 for 조건이 거짓일때 (9보다 클때) 종료위치
    }
    console.log('------------------') //종료되면 구분선 표시
    dan99.innerHTML += `<hr>` // 종료되는 부분에 구분선 표시
}

console.log ('ES6 for ~ in');

const study =['html','css', 'js']
const abc = 'abcdefghijklmn'
const user = {name:'여름', age:20, area:'서울'} // 객체 작성
console.log(study);

for(let i of study){
    //console.log(study[i]);
    console.log(i);
}
for (let i of abc){
    console.log(i);
}
for (let i in user){
    console.log(i);
    console.log(user[i]);
}
for(let i of li){
    console.log(i)
}