// Ways to print in js 
// 1. console.log()- this introduces a new line at the end
console.log('hello world');

// 2.process.stdout.write()- this doesn't introduce a new line
process.stdout.write('hello sneha');

// 3. Many other things that we can print with help of console
console.table({
    name: 'sneha',
    age: 21
})

// this doesn't show much change in terminal but it sends a yellow warning message to the browser's Developer Console, not the page or terminal
console.warn('warning');
