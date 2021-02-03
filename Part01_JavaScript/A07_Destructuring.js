

(function(){

    let obj = {
        name: 'NolBu',
        age: 30
    }

    let ary = ['A', 'B', 'C'];
    console.log(obj, ary);

    
    // Object
    // let name;
    // let age;
    let {name, age} = obj;
    console.log(`${name} / ${age}`);

    let {name: nick, age: num} = obj;
    console.log(`${nick} / ${num}`);

    let {name: x = 'Unknown', age: y, add: z = 'Seoul'} = obj;
    console.log(`${x} / ${y} / ${z}`);

    // Array
    let [a, b, c, d = 9] = ary;
    console.log(`${a} / ${b} / ${c} / ${d}`);
})();
