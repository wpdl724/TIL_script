// 나이 계산
const birthday = new Date(2009, 9, 6);
const today = new Date();
const birthToday = today.getTime() - birthday.getTime();
const dateFlow = Math.floor(birthToday / (1000*60*60*24));
console.log(birthday);
const birthDate = document.querySelector('em');
birthDate.textContent = dateFlow.toLocaleString('ko-kr')
document.querySelector('.age').textContent = today.getFullYear() - birthday.getFullYear()
