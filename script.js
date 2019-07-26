class Task {
    constructor(text) {
        this.text = text
    }
}

class ToDoList {
    constructor() {
        this.tasks = ["umyj gary"]

        this.render()
    }
    render() {
        document.body.innerHTML = ''
        const ul = document.createElement('ul')
        document.body.appendChild(ul)
    }

}

const listForCleaning = new ToDoList()