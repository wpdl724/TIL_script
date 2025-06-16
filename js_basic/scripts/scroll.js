// window.scrollTo(x,y) 문서 스크롤 이동하는 내장함수(절대좌표)
const btn1 = document.querySelector('#btn1');
const topBtn = document.querySelector('#top');
console.log(btn1,topBtn);

btn1.addEventListener('click',()=>{
    window.scrollTo(0, 500) /* 숫자는 자도응로 px 반환된다 */ 
    // 추가 속성이나 메서드 연결 시에는 x,y를 {객체} 문법으로 작성한다
    window.scrollTo({left:0, top:500, behavior:'smooth'})
})
topBtn.addEventListener('click',()=>{
    // window.scrollTo(0,0);
    window.scrollTo({left:0, top:0, behavior:'smooth'})
})
// behavior :'smooth'
// 위 동작은 CSS의 body, html{scroll-behavior:'smooth';}기능과 동일하다


// 특정 위치로 바로가기, 위치속성 offsetTop 활용 방법
const cafeBtn = document.querySelector('#cafe_btn');
const blogBtn = document.querySelector('#blog_btn')
const newsBtn = document.querySelector('#news_btn')
const webtoonBtn = document.querySelector('#webtoon_btn')
const sections = document.querySelectorAll('section'); //4개
const navBtn = document.querySelectorAll('.nav button'); //4개

console.log(cafeBtn, sections,navBtn);

// forEach 활용 navBtn, sections 묶기
navBtn.forEach((obj,ind)=>{
    console.log(obj,ind);
    // obj 클릭 이벤트 생성
    obj.addEventListener('click',()=>{
        console.log(0);
        // 클릭 이벤트 내에서 window.scrollTo 동일 인덱스의 sections top위치 이동
        window.scrollTo({
            left:0,
            top:sections[ind].offsetTop,
            behavior:'smooth'
        })
    })
})

// const 변수 4개로 작성해서 했던 것 => 이제는 "forEach 반복문을 활용하자"
/* cafeBtn.addEventListener('click',()=>{
    // window.scrollTo(0, sections[1].offsetTop)
    window.scrollTo({
        left:0,
        top:sections[1].offsetTop,
        behavior:'smooth'
    })
})
blogBtn.addEventListener('click',()=>{
    window.scrollTo({
        left:0,
        top:sections[0].offsetTop,
        behavior:'smooth'
    })
})
newsBtn.addEventListener('click',()=>{
    window.scrollTo({
        left:0,
        top:sections[2].offsetTop,
        behavior:'smooth'
    })
})
webtoonBtn.addEventListener('click',()=>{
    window.scrollTo({
        left:0,
        top:sections[3].offsetTop,
        behavior:'smooth'
    })
}) */

// 스크롤 상대적 이동 DOM.scrollBy
// 이전, 다음 버튼 클릭 시 웹툰 width만큼 가로 스크롤 이동하기 (윈도우 X, toon_wrap 0)
const toonWrap = document.querySelector('.toon_wrap');
const toonNext = document.querySelector('.toon_wrap_all .next');
const toonPrev = document.querySelector('.toon_wrap_all .prev');
console.log(toonWrap,toonNext,toonPrev);
toonNext.addEventListener('click',()=>{
    toonWrap.scrollBy(toonWrap.children[0].children[0].offsetWidth, 0) //toonWrap의 스크롤을 움직인다 (X축으로 움직여라)
})
toonPrev.addEventListener('click',()=>{
    toonWrap.scrollBy(-toonWrap.children[0].children[0].offsetWidth,0)
})
