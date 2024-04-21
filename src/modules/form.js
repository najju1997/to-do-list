// import {sidebar, newTask} from "./structure"

const content = document.getElementById("content");

// form container

function formContainer_f() {
    const form_container_div = document.createElement('div');
    form_container_div.setAttribute('id', 'form-container');
    content.append(form_container_div);

    return form_container_div;
}


function formButtonContainer_f() {

    const form_buttons_container = document.createElement('div');
    form_buttons_container.classList.add('formButtonsContainer');

    return form_buttons_container;
}

// SUBMIT AND CANCEL BUTTONS

function submitButton_f() {

    const submit_button = document.createElement('button');
    submit_button.setAttribute('id', 'submit-button');
    submit_button.textContent = 'Submit';

    return submit_button;
}

function cancelButton_f() {

    const cancel_button = document.createElement('button');
    cancel_button.setAttribute('id', 'cancel-button');
    cancel_button.textContent = 'Cancel';

    return cancel_button;
}

function categoriesForm_f() {
    const form_container_div = formContainer_f();  // Get the form container div from formContainer_f function

    const categories_form = document.createElement('form');
    categories_form.setAttribute('id', 'categories-form');
    form_container_div.append(categories_form);

    // Form Title
    const formItem1 = document.createElement('div');
    formItem1.classList.add('formItem');
    categories_form.append(formItem1);

    const label1 = document.createElement('label');
    label1.setAttribute('for', 'formTitle');
    label1.textContent = 'Title';
    formItem1.append(label1);

    const input1 = document.createElement('input');
    input1.setAttribute('type', 'text');
    input1.setAttribute('name', 'projectTitle');
    input1.setAttribute('id', 'formTitle');
    input1.setAttribute('placeholder', 'New project title...');
    input1.setAttribute('required', '');
    formItem1.append(input1);

    // Form Description
    const formItem2 = document.createElement('div');
    formItem2.classList.add('formItem');
    categories_form.append(formItem2);

    const label2 = document.createElement('label');
    label2.setAttribute('for', 'formDescription');
    label2.textContent = 'Description';
    formItem2.append(label2);

    const textarea = document.createElement('textarea');
    textarea.setAttribute('name', 'projectDescription');
    textarea.setAttribute('id', 'formDescription');
    formItem2.append(textarea);

    // add buttons to the form

    const form_buttons_container = formButtonContainer_f()
    const submit_button = submitButton_f();
    const cancel_button = cancelButton_f();

    form_buttons_container.append(submit_button, cancel_button);
    categories_form.append(form_buttons_container);

    return categories_form;
}

function taskForm_f() {

    const form_container_div = formContainer_f();

    const todo_form = document.createElement('form');
    todo_form.setAttribute('id', 'todoForm');
    form_container_div.append(todo_form);

    // Task
    const formItem1 = document.createElement('div');
    formItem1.classList.add('formItem');
    todo_form.append(formItem1);

    const label1 = document.createElement('label');
    label1.setAttribute('for', 'formTask');
    label1.textContent = 'Task';
    formItem1.append(label1);

    const input1 = document.createElement('input');
    input1.setAttribute('type', 'text');
    input1.setAttribute('name', 'task');
    input1.setAttribute('id', 'formTask');
    input1.setAttribute('placeholder', 'Your new task...');
    input1.setAttribute('required', '');
    formItem1.append(input1);

    // Notes
    const formItem2 = document.createElement('div');
    formItem2.classList.add('formItem');
    todo_form.append(formItem2);

    const label2 = document.createElement('label');
    label2.setAttribute('for', 'formTaskNotes');
    label2.textContent = 'Notes';
    formItem2.append(label2);

    const textarea = document.createElement('textarea');
    textarea.setAttribute('name', 'notes');
    textarea.setAttribute('id', 'formTaskNotes');
    formItem2.append(textarea);

    // Due date
    const formItem3 = document.createElement('div');
    formItem3.classList.add('formItem');
    todo_form.append(formItem3);

    const label3 = document.createElement('label');
    label3.setAttribute('for', 'formDate');
    label3.textContent = 'Due date';
    formItem3.append(label3);

    const input3 = document.createElement('input');
    input3.setAttribute('type', 'date');
    input3.setAttribute('name', 'date');
    input3.setAttribute('id', 'formDate');
    formItem3.append(input3);

    // Priority
    const formItem4 = document.createElement('div');
    formItem4.classList.add('formItem');
    todo_form.append(formItem4);

    const label4 = document.createElement('label');
    label4.setAttribute('for', 'formPriority');
    label4.textContent = 'Priority';
    formItem4.append(label4);

    const select = document.createElement('select');
    select.setAttribute('name', 'Priority');
    select.setAttribute('id', 'formPriority');

    const options = ['Low', 'Normal', 'High'];

    options.forEach(option => {
        const opt = document.createElement('option');
        opt.setAttribute('value', option);
        opt.textContent = option;
        select.append(opt);
    }); 

    formItem4.append(select);

    // Form Buttons
    const form_buttons_container = formButtonContainer_f();

    const cancel_button = cancelButton_f();
    const submit_button = submitButton_f();

    form_buttons_container.append(cancel_button, submit_button);
    todo_form.append(form_buttons_container);

    return todo_form;
}

export {formContainer_f, formButtonContainer_f, categoriesForm_f, taskForm_f};











