const content = document.querySelector("#content");

// Main Body container

function allTasksContainer_f() {
    const allTasks_Container_div = document.createElement("div");
    allTasks_Container_div.id = 'alltasks-container';
    content.append(allTasks_Container_div);

    const title_div = document.createElement("div");
    title_div.id = 'title-container';
    allTasks_Container_div.append(title_div);

    const new_task_button = document.createElement("button");
    new_task_button.setAttribute('id', 'newtask-button');
    new_task_button.textContent = '+ NEW TASK';
    allTasks_Container_div.append(new_task_button);

    const tasklist_container_div = document.createElement("div");
    tasklist_container_div.setAttribute('id', 'tasklist-container');
    allTasks_Container_div.append(tasklist_container_div);

    return {title_div, new_task_button, tasklist_container_div};
}

// sidebar container

function sidebar_f() {
    const sidebar_container_div = document.createElement("div");
    sidebar_container_div.id = 'sidebar-container';
    content.append(sidebar_container_div);

    const h1_nav_title = document.createElement("h1");
    h1_nav_title.id = 'nav-title';
    h1_nav_title.textContent = "Kam Ko List";
    sidebar_container_div.append(h1_nav_title);

    const newproject_button= document.createElement("button");
    newproject_button.id = 'newproject-button';
    newproject_button.textContent = "+ New Category";
    sidebar_container_div.append(newproject_button);

    const categorylist_title = document.createElement("div");
    categorylist_title.textContent = "Categories";
    categorylist_title.id = "categorylist-title";
    sidebar_container_div.append(categorylist_title);

    const categories_div = document.createElement("div");
    categories_div.id = 'categories-container';
    sidebar_container_div.append(categories_div);

    return {h1_nav_title, newproject_button, categories_div};
}

export {allTasksContainer_f, sidebar_f };