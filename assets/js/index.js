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
                <input type="checkbox" class="done" data-id="${task.id}" ${task.done ? 'checked' : ''}>
                <span class="deleteButton" data-id="${task.id}">&#x274c</span>
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

    totalTask()

    const taskDone = document.querySelectorAll(".done")
    taskDone.forEach(task => {
        task.addEventListener("change", (e) => {
            const id = e.target.getAttribute("data-id")
            updateTask(id)
        })
    })

    const completedCount = countCompletedTasks()
    const completedCountElement = document.querySelector("#completedCount")
    completedCountElement.innerHTML = "Tareas Completadas: " + completedCount
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

const totalTask = () => {
    const taskCount = document.querySelector("#taskCount")
    let taskCounted = toDoList.length
    taskCount.innerHTML = "Total Tareas: " + taskCounted
}

const updateTask = (id) => {
    const task = toDoList.find(task => task.id == id)
    if (task) {
        task.done = !task.done
    }
    renderTask()
}

const countCompletedTasks = () => {
    return toDoList.filter(task => task.done).length
}

addTaskButton.addEventListener("click", addTask)
renderTask()