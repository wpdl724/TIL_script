//insta.js (인스타그램 알고리즘)
// 1.프로필 클릭시 개인 프로필 페이지로 이동기능 0 - 페이지 제작 필요
//클릭 == 터치 동일 이벤트 처리
const profileDom = document.querySelector('.profile');
console.log(profileDom);
profileDom.addEventListener('click',profileGo);
function profileGo(){
    return window.location.href ='insta_profile.html'
}
// 2.우측 ... 메뉴 클릭시 저장~신고 등 기능 실행 0 - 저장~신고 제작 필요
// 3.사진 한번 터치시 반응없음 x js
// 4.사진 두번 터치 시 좋아요 자동 등록 0
const photo = document.querySelector('main > .photo');
const likeImg = document.querySelector('.like img');
console.log(likeImg.src);
//객체.속성 -> 속성 읽기
//객체.속성=값 -> 속성 값을  변경하겠다는 의미
console.log(photo,likeImg);
photo.addEventListener('dblclick',likeOn); //dbclick -> 더블클릭
function likeOn(){
    //console.log('test');
    return likeImg.src = './images/icons/like_on.png'; 
}
// 5.좋아요 아이콘 터치시 좋아요, 다시 터치시 좋아요 해제 반복 X - (조건문 공부 필요)
// 이미지 더블클릭 하기 전 기준 (변수는 이미 (위)에 likeImg 변수 활용하기 )
likeImg.addEventListener('click',likeOn);
// 6.댓글 아이콘 터치시  댓글 입력창실행 0, 실행화면에서 바깥쪽 영역터치 댓글 입력창닫힘 0 , -제작필요
// 7.공유하기 터치시 공유가능 계정들이 표시된 창 실행 0, 바깥쪽 영역 터치시 닫힘 0-제작필요
// 8.즐겨찾기 아이콘 터치시 즐겨찾기 저장 (x- DB 필요) 이 됨과 동시에 컬렉션 선택 화면 출력 0, 바깥쪽 영역 터치시 닫힘 0
// 9.글 1줄, 날짜만 미리표시, 글터치시 전체 내용(나머지 글줄과 해시태그 포함) 펼치기 0
// 글 1줄 , 날짜만 미리표시
const storyDOM = document.querySelector('.content > .story');
const dateDOM = document.querySelector('.date');
const tagDOM = document.querySelector('.tag');
console.log(storyDOM,dateDOM);
//함수를 생성하지 않고 바로 작성한 이유? 반복이 아니고 즉시 실행되기 때문이다
tagDOM.style.display = 'none';
// 글 클릭시 태그 표시
storyDOM.addEventListener('click',tagShow);
function tagShow(){
    return tagDOM.style.display ='block';
}

// 10.해시태그 터치시 해당 태그 사용 게시글 페이지 이동 0
const tag = document.querySelector('.tag');
console.log(tag);
tag.addEventListener('click',tagGo);
function tagGo(){
    return window.location.href = 'insta_tag.html'
}
// 별도의 동적 기능 없이 단순한 링크만 있는 경우는 js없이 a태그에 링크걸기
// 동적 기능 예 ) 해외ip접속차단, 동일ip접속차단, 성인사이트접속인증, 로그인에 따른 접속가능 페이지일 경우 로그인 유무확인 등
// 11.날짜 기능 없음 X- js 없음

// 추가 페이지 목록 ) 
// 개인 프로필 페이지 제작 (insta_profile.html)
// 저장~신고 페이지 제작
// 댓글 입력창 제작
// 공유 가능 표시 
// 즐겨찾기 컬렉션 선택 화면 제작
// 태그 사용 게시글 (insta_tag.html)

