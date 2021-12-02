const btn1 = document.querySelector('#btn');
const btn2 = document.querySelector('#push_notification_btn');

if(btn1){
  btn1.addEventListener('click', () => console.log('iframe: btn1'));
}
if(btn2){
  btn2.addEventListener('click', () => console.log('iframe: btn2'));
}
