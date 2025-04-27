function outter() {
    let count = 0;

    return function inner() {
        count++
        console.log(count);
        
    };
}

const counter = outter();

counter();
counter();

