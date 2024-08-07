const promise = new Promise(resolve => console.log('resolve'));
promise.then(() => console.log('THen promise'));

console.log('1');
console.log('2');
