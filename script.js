const buttons = document.querySelectorAll('button');
// console.log("buttons", buttons)

let str = '';
buttons.forEach((button) => {
    
    
    button.addEventListener('click', (e) => {
       
        console.log("e.target.textContent", e.target.textContent.trim())
        if( e.target.textContent.trim() === 'clear'){
            str = ''
            result.innerHTML = str;
        }else if( e.target.textContent.trim() === 'Evaluate'){
            str = eval(str);
            result.innerHTML = str;
        }else if( e.target.textContent.trim() === 'DEL'){
            str = str.substring(0, str.length - 2);
            result.innerHTML = str;
        }else {
            str += e.target.textContent.trim();
            result.innerHTML = str;
        }
 });
});