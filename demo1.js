let string = 'This is string type.';
let num = 24;

let names = ['Minh', 'Thong', 'Thinh', 'Dat'];
let cloneNames = names;

cloneNames[1] = 'Quang';

let student = {
    name: 'Son',
    age: 25,
    getInfo: function() {
        console.log(this.name);
    }
}

let now = new Date();

