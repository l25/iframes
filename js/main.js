let btn = document.querySelector('#btn');
if(!btn){
  return false;
}
btn.addEventListener('click', () => console.log('iframe'));
