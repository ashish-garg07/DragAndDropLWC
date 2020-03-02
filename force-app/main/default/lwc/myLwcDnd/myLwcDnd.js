import { LightningElement, track } from "lwc";
import { tasks } from "c/data";

export default class MyLwcDnd extends LightningElement {
  @track tasklist = tasks;
  @track leftTasks = [];
  @track rightTasks = [];

  connectedCallback() {
    this.distributeTasks();
  }

  distributeTasks() {
    let curLeftTasks = [];
    let curRightTasks = [];
    this.tasklist.forEach(function(t) {
      if (t.category === "wip") {
        curLeftTasks.push(t);
      } else {
        curRightTasks.push(t);
      }
    });

    this.leftTasks = curLeftTasks;
    this.rightTasks = curRightTasks;
  }

  handleListItemDrag(evt) {
    console.log("Dragged id is: " + evt.detail);
    this.draggingid = evt.detail;
  }

  handleItemDrop(evt) {
    let id = this.draggingid;
    let category = evt.detail;

    let tasks = this.tasklist.filter(task => {
      if (task.taskid === id) {
        task.category = category;
      }
      return task;
    });

    this.tasklist = tasks;
    this.distributeTasks();
  }
}
