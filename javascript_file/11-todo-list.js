let displayer = document.querySelector('.Todo-project-displayer');

let todoArray = [];

// 测试数据
todoArray = [
  { todoName: "学习 JavaScript", todoDate: "2025-08-13" },
  { todoName: "完成作业", todoDate: "2025-08-14" },
  { todoName: "锻炼身体", todoDate: "2025-08-15" }
];
render();

let todoInput = window.document.querySelector('.Todo-project-input'); //选择输入框
let dateTime = window.document.querySelector('.Todo-project-datetime');//选择日期时间输入框
let addButton = window.document.querySelector('.Todo-project-add-button');//选择添加按钮
console.log(todoInput, dateTime, addButton);
function objectifier(){
  let [todoName, todoDate] = [todoInput.value, dateTime.value]; //获取输入框和日期时间输入框的值
  let todoObject = { //把两者封装成一个对象
    todoName: todoName,
    todoDate: todoDate
  };
  todoInput.value = dateTime.value = "";

  //变成对象之后, 放入Array
  todoArray.push(todoObject);
  render();
}

function render(){
  
  displayer.innerHTML= ` 
    <input placeholder="Todo name" class="Todo-project-input">
    <input type="date" class="Todo-project-datetime">
    <button class="Todo-project-add-button" onclick="
    objectifier();
    "> Add </button>
    `; //每次都生成新的输入框和按钮
  for(let i = 0; i < todoArray.length; i++){ // 遍历todoArray
    const html = `<span> ${todoArray[i]["todoName"]} </span>`; //获取每个todoArray的todoName
    const datehtml = `<span> ${todoArray[i]["todoDate"]} </span>`; //获取每个todoArray的todoDate
    const buttonhtml = `<button class = "todo-button" onclick="deleteTodo(${i});"> Delete </button>`;//生成删除按钮
   //注意这里的i是闭包, 需要传入i作为参数

   displayer.innerHTML += html;
   displayer.innerHTML += datehtml;
   displayer.innerHTML += buttonhtml;
  }
}

function deleteTodo(i){
  todoArray.splice(i,1);
  render();
}