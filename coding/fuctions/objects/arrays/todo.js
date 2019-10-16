const todos = ["a", "b", "c"];

todos.forEach(function(todos, index) {
    const num = index+1;
    console.log(`${num}. ${todos}`)
  });
  
// console.log(`you have ${todos.length} todo`);

// console.log(`Todo: ${todos}`);
for(i =0 ; i<todos.length;i++){
    console.log(i+1,todos[i]);
}