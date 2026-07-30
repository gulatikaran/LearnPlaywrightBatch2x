function makeCounter(start = 0) {
    let count = start;
    return{
        increment() { count ++},
        decrement() { count --},
        getCount() { return count }
    }
}

let counter = makeCounter(0);
counter.increment();
counter.increment();
counter.increment();
console.log(counter.getCount()); // 3
counter.decrement();
console.log(counter.getCount()); // 2