class Task {
    constructor(text) {
        this.text = text
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
    addNewTaskToList(text) {
        this.tasks.push(new Task(text))
        this.render()
    }

}

const listForCleaning = new ToDoList()
listForCleaning.addNewTaskToList('wynieś śmieci')