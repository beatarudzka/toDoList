class Task {
    constructor(text) {
        this.text = text
        this.isCompleted = false
    }
}
class ToDoList {
    constructor(selectedHtmlElement) {
        this.tasks = []
        this.selectedHtmlElement = selectedHtmlElement || document.body

    }
}

const input = document.querySelector('input')
const ul = document.querySelector('ul')
const liElements = document.querySelectorAll('li')
const searchTask = () => {
    console.log('ok')
}

input.addEventListener('input', searchTask)