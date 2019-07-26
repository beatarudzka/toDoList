class Task {
    constructor(text) {
        this.text = text
        this.isFinished = false
    }
}
class ToDoList {
    constructor() {
        this.tasks = []
        this.render()
    }

    render() {
        document.body.innerHTML = ''
        const ul = document.createElement('ul')
        this.tasks.forEach(task => {
            const li = document.createElement('li')
            li.innerText = task.text
            ul.appendChild.li
        })
        document.body.appendChild(ul)
    }
    addTaskToList(text) {
        if (text == '' || text == null) {
            alert("Add new task")
        } else {
            this.tasks.push(new Task(text))
            console.log(this.tasks)
        }
        this.render()
    }
    createFormForAddingTask() {
        const input = document.createElement('input')
        const button = document.createElement('button')
        button.innerText = 'Create new task'

    }
}