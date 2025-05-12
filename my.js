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
        ]
        }
      },
      methods:{
        completedClass(completed){
            return {
            'my-line-through' : completed,
            'my-red' : completed
            }
        }
      }
    }
  ).mount('#app')