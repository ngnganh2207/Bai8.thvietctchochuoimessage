let login = prompt("Tên Đăng Nhập:");
let message= (login=='Employee')?'Hello':((login=='Director')?'Greetings':((login=='')?'No login':''));
//cach 1: alert(message);
//cach 2: su dung switch
switch (message){
    case 'Hello':
        alert('Hello');
        break;
    case 'Greetings':
        alert('Greetings');
        break;
    case 'No login':
        alert('No login');
        break;
    default:
        alert('');
        break;
}
