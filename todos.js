let input = prompt("What would you like to do?");
const todos = [];
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('******************')
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i+1}. ${todos[i]}`);
        }
        console.log('******************')
    }
    input = prompt("What would you like to do?")
}
console.log("OK QUIT THE APP!")