const listContainer = document.querySelector("#listContainer")
const addTaskButton = document.querySelector("#addTask")
const taskName = document.querySelector("#taskName")


const toDoList = [
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
                   <span id="delete">&#x274c</span>
            </li>
        `
    })
    listContainer.innerHTML = html
}

renderTask()

const addTask = () => {
    const task = {
        id: Date.now(),
        task: taskName.value,
        done: false
    }
    toDoList.push(task)
    renderTask()
    taskName.value = ""
}

addTaskButton.addEventListener("click", addTask)


const deletetasks = document.querySelectorAll("#delete")

deletetasks.forEach(deletetask => {    
    deletetask.addEventListener("click", () => {
        let indice= deletetask.parentNode.id
        console.log(indice)
        toDoList.splice(indice-1,1)
        console.log(toDoList)
        renderTask()
    });
});



