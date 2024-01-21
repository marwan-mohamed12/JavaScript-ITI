let todos = [],
    id = 0;

const taskName = document.getElementById("todo-text"),
    addBtn = document.getElementById("add"),
    hrSeparator = document.getElementById("separator");

addBtn.addEventListener('click', (e) => {
    e.preventDefault();

    todos.push({ id: ++id, taskText: taskName.value })

    document.querySelectorAll(".todo-element").forEach(e => {
        e.remove();
    })

    todos.forEach(({id, taskText}) => {
        let task = `
            <div class="todo-element" data=${id}>
                <p>${taskText}</p>
                <div class="todo-btn">
                    <button class="check-btn" id="done-btn">
                        <i class="material-symbols-outlined" style="font-size: 20px;">done</i>
                    </button>
                    <button class="delete-btn" id="del-btn">
                        X
                    </button>
                </div>
            </div>
        `;
        hrSeparator.insertAdjacentHTML("beforebegin", task);


        let todoTask = document.querySelector(`[data="${id}"]`),
            doneBtn = todoTask.querySelector(`.check-btn`),
            delBtn = todoTask.querySelector(`.delete-btn`);

        doneBtn.addEventListener('click', () => {
            todoTask.style.backgroundColor = "#DFF0D8";

            let taskText = document.querySelector(".todo-element p");
            taskText.style.color = "#629362";
            taskText.style.textDecoration = "line-through";
        })

        delBtn.addEventListener('click', () => {
            // let todoElem = document.querySelector(".todo-element");
            todoTask.remove();
            todos = todos.filter((ele) => ele.id !== id)
        })

    })

    taskName.value = '';
})



