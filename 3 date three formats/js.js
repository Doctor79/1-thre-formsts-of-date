const date = new Date();
const day = date.getDay();
const month = date.getMonth();
const year = date.getFullYear();
let printDay = '';
let printMonth = '';
if (day < 10) {
    printDay = '0' + day;
    if (month < 10) {
        printMonth = '0' + month;
    }
}
console.log('Today is: ' + printDay + '/' + printMonth + '/' + year);
console.log('Today is: ' + printDay + '-' + printMonth + '-' + year);
console.log('Today is: ' + printMonth + '/' + printDay + '/' + year);
console.log('Today is: ' + printMonth + '-' + printDay + '-' + year);