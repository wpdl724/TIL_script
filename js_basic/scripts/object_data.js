/* 25/05/15 배열 공부 */
// // const yoil = ['월', '화', '수'] // 요일은 변경되지 않으니깐 const 사용
// const yoil = new Array ('월', '화', '수', '목', '금', '토', '일');
// console.log(yoil);
// console.log(yoil[0]); 
// console.log(yoil[1]); 
// console.log(yoil[2]); 

// // =============색상 배열
//const colorArray = ['빨강', '주황', '노랑', '파랑', '보라', '검정', '초록'];
// console.log(colorArray);
// // 콘솔 결과 예시 : 빨강 노랑 보라 초록
// console.log(colorArray[0]+colorArray[2]+colorArray[4]+colorArray[6]);
// // 콘솔 결과 예시2 : 제가 좋아하는 색상은 주황, 파랑, 보라색 입니다.
// console.log(`제가 좋아하는 색상은 ${colorArray[1]}, ${colorArray[3]}, ${colorArray[4]}색 입니다.`);

// 과일 역순으로 출력하기
//const fruitArray = ['바나나', '딸기', '망고', '사과', '귤'];
//문제1) 한 줄 역순으로 출력하기 
// console.log(fruitArray.reverse(fruitArray)); //역순으로  출력하기
//console.log(fruitArray[4], fruitArray[3], fruitArray[2], fruitArray[1], fruitArray[0]);

// // 문제2) (위) 요일배열과 새로운 날씨카드 배열 활용 문자출력하기
// const weatherCard = ['비', '눈', '맑음', '흐림'];
// console.log(weatherCard);
// console.log(weatherCard[0]);
// console.log(weatherCard[2]);
// //문제1) 목요일 날씨 : 비
// console.log(`${yoil[3]}요일 날씨 : ${weatherCard[0]}`);
// //문제2) 금요일 날씨 : 맑음
// console.log(`${yoil[4]}요일 날씨 : ${weatherCard[2]}`);

//객체와 배열
// const movieInfo = {// camal 표기법으로 작성하고 있음
//     name:'미션임파서블',
//     director: '크리스토퍼 맥쿼리',
//     genre: '액션',
//     rating:169,
//     actor: ['톰 크루즈', '헤일리 앳웰', '빙 라메스'],
//     releaseDate:'2025.05.17',
//     age:15,
//     story:'전 세계 국가와 조직의 기능이 마비되고...', // 마지막에도 콤마를 작성하자 (나중에 추가될수 도 있으니깐 안전하게 작성하는 것이 좋다)
// }; 
// const movieInfo_v2 = {
//     name: '야당',
//     director: '황병국',
//     genre: ['범죄', '액션'],
//     rating: 122,
//     actor: ['강하늘','유해진','박해준'],
//     releaseDate:'2025.04.16',
//     age: '청소년관람불가',
//     story: '모든 것은 야당으로부터 시작된다! 누명을 쓰고 교도소에 수감된 이강수(강하늘)는...',
// };

//동일한 분류의 객체가 많을 경우 묶는 방법
// const movieAll= [
//     {// camal 표기법으로 작성하고 있음
//         name:'미션임파서블',
//         director: '크리스토퍼 맥쿼리',
//         genre: '액션',
//         rating:169,
//         actor: ['톰 크루즈', '헤일리 앳웰', '빙 라메스'],
//         releaseDate:'2025.05.17',
//         age:15,
//         story:'전 세계 국가와 조직의 기능이 마비되고...', // 마지막에도 콤마를 작성하자 (나중에 추가될수 도 있으니깐 안전하게 작성하는 것이 좋다)
//     },{
//         name: '야당',
//         director: '황병국',
//         genre: ['범죄','액션'],
//         rating: 122,
//         actor: ['강하늘','유해진','박해준'],
//         releaseDate:'2025.04.16',
//         age: '청소년관람불가',
//         story: '모든 것은 야당으로부터 시작된다! 누명을 쓰고 교도소에 수감된 이강수(강하늘)는...',
//     }
// ];
// console.log(movieAll[0].name) //미션임파서블 불러오기
// //연습1) 
// console.log(movieAll) //f12개발자도구에서 한번에 확인할수 있음
// // 감독 : 크리스토퍼 맥쿼리 
// console.log(`감독 : ${movieAll[0].director}`);
// // 장르: 액션 / 169분
// console.log(`장르 : ${movieAll[0].genre} / ${movieAll[0].rating}분`);
// // 등급 : 15세 이상 관람가
// console.log(`등급 : ${movieAll[0].age}세 이상 관람가`);

//==================================== 산술 연산자 연습
const greeting = 'hello'; //(greeting 이라는 변수로 작성해야 한다
const lang = ['figma', 'html', 'css'];
// hello figma 라고 쓰고 싶다면?
console.log(greeting+lang[0]);
console.log(greeting+lang[1]);
console.log(greeting+lang[2]);

// 결과값이 8이 나오게 하는 경우는 ?
const num1 =1;
const num7 =7;
console.log(num1+num7);

// 변수 연습문제1) (1+7) + world 식으로 조합하기
const global = 'world';
console.log((num1+num7)+global);

// =============================== 빼기, 곱하기, 나누기 등 연산은 숫자가 문자로 따옴표가 묶여 있을 시 자동으로 숫자로 형변환시킨다.
const data1 = 1;
const data7 = '7';
console.log(data1+data7); // 결과값 17
console.log(data1-data7); // 결과값 -6
console.log(data1*data7); // 결과값 7
console.log(data1/data7); // 결과값 0.14
console.log(data1%data7); // 결과값 1
console.log(data1**data7); // 결과값 1
console.log(typeof data7); // 결과값 string
console.log(typeof (data1+data7)); // 결과값 string -> why? 데이터 타입에 따라 +가 문자도 될수도 있고 숫자도 될수 있음 이번에는 근데 문자로 인식해서 string으로 뜬것!
console.log(typeof (data1-data7)); // 결과값 -> number 우선순위로 괄호를 써주는게 좋다 