const listContainer = document.querySelector("#listContainer")
const addTaskButton = document.querySelector("#addTask")
const taskName = document.querySelector("#taskName")

let toDoList = [
    {
        id: 1,
        task: "Tarea 1",
        done: false
    },
    {
        id: 2,
        task: "Tarea 2",
        done: false
    },
    {
        id: 3,
        task: "Tarea 3",
        done: false
    },
]

const renderTask = () => {
    let html = ""
    toDoList.forEach((task) => {
        html += /*html*/`
            <li id="${task.id}">
                <span>${task.task}</span>
                <input type="checkbox" class="toggle-done" ${task.done ? 'checked' : ''}>
                <button class="deleteButton" data-id="${task.id}">&#x274c</button>
            </li>
        `
    })
    listContainer.innerHTML = html

    const deleteButtons = document.querySelectorAll(".deleteButton")
    deleteButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            const id = e.target.getAttribute("data-id")
            deleteTask(id)
        })
    })
}

const addTask = () => {
    const task1 = {
        id: Date.now(),
        task: taskName.value,
        done: false
    }
    toDoList.push(task1)
    renderTask()
    taskName.value = ""
}

const deleteTask = (id) => {
    toDoList = toDoList.filter(task => task.id != id)
    renderTask()
}

addTaskButton.addEventListener("click", addTask)
renderTask()



