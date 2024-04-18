

class Project {
    constructor(title) {
        this.title = title;
    }
};

class ToDo {
    constructor(tasktitle, date, priority, category) {
        this.tasktitle = tasktitle;
        this.date = date;
        this.priority = priority;
        this.category = category;
    }
}

export {Project, ToDo};