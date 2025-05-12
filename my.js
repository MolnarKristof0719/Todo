class Todo {
    constructor(name = null) {
        this.name = name;
        this.completed = false;
        this.editing = false;
    }
    
   
    
}


const { createApp } = Vue

  createApp({
    data() {
      return {
        todoCollection:[
            new Todo("todo 1"),
            new Todo("todo 2"),
            new Todo("todo 3"),
            new Todo("todo 4"),
            new Todo("todo 5")
        ],
        newTodoName: null
        }
      },
      methods:{
        completedClass(completed){
            return {
            'my-line-through' : completed,
            'my-red' : completed
            }
        },
        onDblClickTodoName(item){
          item.editing = true;
        
        },
        onEnterTodoName(item){
          item.editing = false;
        },
        onEnterNewTodo(){
          const newTodo = new Todo(this.newTodoName);
          this.todoCollection.push(newTodo);
          this.newTodoName = null;
        }
      }
    }
  ).mount('#app')