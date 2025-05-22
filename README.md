# 자바스크립트 시작 25/05/12 ~ 
* 자바스크립트 관련 파일은 `scripts/` 폴더에 저장하기
## VS Code 터미널로 js 실행 테스트 하기
* 터미널 마지막 폴더 경로가 js 파일이 들어있는 위치인지 확인하기
* `cd 하위폴더명` 또는 `cd .. ` 
* `node 자바스크립트파일명.js` 
* (위)nodeJS 이용 자바스크립트 파일 실행 명령어 작성하고 확인하기
(실행 함수가 있어야 결과 테스트 가능)
* `node -v` 노드 설치 확인 명령 (nodeJS 설치해야 위 테그트 가능)
## 객체, 속성, 함수(메서드), 이벤트에 따른 작성법
* 객체.속성 (문법) <()가 없으면 속성을 의미>
* 객체.함수()  <뒤에 ()가 있으면 함수>
* **객체** : 자바스크립트에서 제어하려는 대상 (보통 데이터를 담은 변수가 객체 대상이 되는 경우가 많음) 
* **속성** : 객체가 가진 고유한 속성 (객체가  img라면 src, alt 가 속성)
* **함수** : 객체를 이용한 자바스크립트의 실행 결과, 뒤에 소괄호()가 붙음
--------------------------------------------------
## 자바스크립트 DOM 지정 규칙
* HTML 태그의 class, name, id, value 등의 이름 규칙 : 영어 소문자_영어소문자 (예)`user_id`
* Javascript의 함수 및 변수 이름 규칙 : Camel표기법 (예) `userId`
### 변수 등록시 순서
* `const 의미있는 변수명 = document.querySelector('HTML요소 또는 클래스, 아이디, 속성선택자 등')`
* `const userId = document.querySelector('.user_id');`
* `let liActive = document.querySelector('li.active);`
* `var pwIO = document.querySelector('input[type*=pass]');`
* `let genderChk = document.querySelector('input[name=gender]');`
## a태그 기본 이벤트 동작 취소
* `a`태그를 클릭 이벤트 객체로 사용시 대상을 터치 또는 클릭하면 화면 세로 스크롤이 최상단으로 올라가는 문제점이 발생한다.
* (예) `a객체.addEventListener('click',function(e){ e.preventDefault(); })`
* (예) `a객체.addEventListener('click',(e)=>e.preventDefault())`