// Alias de tipos
type userId = string | number;

let user: userId;
user = 10;
user = '10';

function getUser(id: userId) {
    // busca el usuario por id
    return 'user';
}

getUser(2);
getUser('2');

// Types Assertions

let userName: any;
userName = 'Lisbaldy';

let nameLength: number = (<string>userName).length;     // angle-bracket syntax
let namesLength: number = (userName as string).length;  // as syntax