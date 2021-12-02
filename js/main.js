const btn1 = document.querySelector('#btn');
const btn2 = document.querySelector('#push_notification_btn');

if(btn){
  btn.addEventListener('click', () => console.log('iframe: btn1'));
}
if(btn2){
  btn.addEventListener('click', () => console.log('iframe: btn2'));
}
