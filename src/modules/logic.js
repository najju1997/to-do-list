import { allTasksContainer_f, sidebar_f } from "./structure.js";
import { formContainer_f, formButtonContainer_f, categoriesForm_f, taskForm_f } from "./form.js";
import {Project, ToDo} from "./classes.js"

import "./style.css"
// parts
const content = document.querySelector("#content");
const categories_div = document.getElementById('categories-container');

const categoryList = [];
const taskList = [];

// opens up the New Project/Category Form

function sidebarformPopUp() {
    sidebar_f();
    
    const newproject_button = document.getElementById('newproject-button');
    newproject_button.addEventListener('click', function() {
        categoriesForm_f(); 

        sidebarFormSubmit();

    });
}

// makes category object after submit button is pressed
function sidebarFormSubmit() {
    const submit_button = document.getElementById('submit-button');
    const cancel_button = document.getElementById('cancel-button');
    const form_container_div = document.getElementById('form-container');
    
    submit_button.addEventListener('click', (e) => {
        e.preventDefault();

        const category_title = document.getElementById('formTitle').value;
        const newcategory = new Project(category_title);

        categoryList.push(newcategory);
        console.log(categoryList);

        // Clear the categories_div
        const categories_div = document.getElementById('categories-container');
        if (categories_div) {
            // i is the latest added category number
            const i = categoryList.length -1;

            const categoryList_a = document.createElement("p");
            categoryList_a.classList.add('category-link');
            categoryList_a.textContent = categoryList[i].title;
            categoryList_a.setAttribute('index', i);
            
            categories_div.appendChild(categoryList_a);
        }

        content.removeChild(form_container_div);
        activeCategory();  // Call activeCategory() after adding categories
    });

    cancel_button.addEventListener('click', function() {
        content.removeChild(form_container_div);
    });
}

// add active in the clicked category so that we can make task of the active category.
function activeCategory() {
    const categories = document.querySelectorAll('.category-link');
    categories.forEach(category => {
        category.addEventListener('click', function() {
            // Remove 'active' class from all category links
            categories.forEach(item => {
                item.classList.remove('active');
            });

            // Add 'active' class to the clicked category link
            category.classList.add('active');
            categoryTitleinTaskContainer();
            filterTasksByCategory();

        });
    });

}

function filterTasksByCategory() {
    const task_category_number = document.querySelector('.category-link.active').getAttribute('index');
    const tasklist_container_div = document.getElementById('tasklist-container');

    // Clear the tasklist container
    tasklist_container_div.innerHTML = '';

    // Filter tasks based on the selected category
    const filtertasklist = taskList.filter(item => item.category === task_category_number);

    // Loop through the filtertasklist and create and append the corresponding div elements
    filtertasklist.forEach((task, i) => {
        const single_task_div = document.createElement('div');
        single_task_div.classList.add('singletask');
        single_task_div.setAttribute('singletask-id', task.category);

        const tasktitle_p = document.createElement('p');
        tasktitle_p.className = 'task';
        tasktitle_p.textContent = task.tasktitle;

        const checkbox_a = document.createElement("input");
        checkbox_a.type = 'checkbox';
        checkbox_a.id = `taskstatus${i}`;

        const dueDate = document.createElement('p');
        dueDate.className = 'dueDate';
        dueDate.textContent = `${task.date}`;

        single_task_div.append(tasktitle_p, checkbox_a, dueDate);
        tasklist_container_div.appendChild(single_task_div);
    });
}

function categoryTitleinTaskContainer() {
    const title = document.getElementById('title-container');
    title.innerHTML = "";
    title.innerHTML = document.querySelector('.category-link.active').innerHTML;
}


function sidebarLoad() {
    sidebarformPopUp();
}


// tasks


function taskformPopup() {
    allTasksContainer_f();
    const newtask_button = document.getElementById('newtask-button');
    newtask_button.addEventListener('click', function() {

        if (categoryList.length === 0) {
            alert("Category banau na hau paile Guleswor");
        } else if (!document.querySelector('.category-link.active')) {
            alert("Select the category you want to add tasks in");
        } else {
            taskForm_f();
            taskFormSubmit();
        }
    });
}


function taskFormSubmit() {
    const submit_button = document.getElementById('submit-button');
    const cancel_button = document.getElementById('cancel-button');
    const form_container_div = document.getElementById('form-container');

    submit_button.addEventListener('click', (e) => {
        e.preventDefault();


        const task_title = document.getElementById('formTask').value;
        const task_date = document.getElementById('formDate').value;
        const task_priority = document.getElementById('formPriority').value;
        const task_category_number = document.querySelector('.category-link.active').getAttribute('index');

        const newtask = new ToDo(task_title, task_date, task_priority, task_category_number);

        taskList.push(newtask);
        console.log(taskList);

        const tasklist_container_div = document.getElementById('tasklist-container');

        // filter the task based on category

        const filtertasklist = taskList.filter(item => item.category === task_category_number);

        if (tasklist_container_div) {
            // i is the latest added category number
            const i = filtertasklist.length -1

            const single_task_div = document.createElement('div');
            single_task_div.classList.add('singletask')
            single_task_div.setAttribute('singletask-id', i);
            tasklist_container_div.append(single_task_div);

            // create task title
            const tasktitle_p = document.createElement('p');
            tasktitle_p.className = 'task';
            tasktitle_p.textContent = task_title;

            // create a unique id for checkbox
            const checkbox_a = document.createElement("input");
            checkbox_a.type = "checkbox"
            checkbox_a.id = `taskstatus-${i}`

            // create due date
            const dueDate = document.createElement('p');
            dueDate.className = 'dueDate';
            dueDate.textContent = `${task_date}`;
            
            // append the task to single task div

            single_task_div.append(tasktitle_p, checkbox_a, dueDate);
            
        }

        content.removeChild(form_container_div);
    });

    cancel_button.addEventListener('click', function() {
        content.removeChild(form_container_div);
    });
}



sidebarLoad();
taskformPopup();
activeCategory();