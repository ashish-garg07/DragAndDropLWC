import { LightningElement, api } from "lwc";

export default class MyDndItem extends LightningElement {
  @api task;

  itemDragStart() {
    const event = new CustomEvent("itemdrag", {
      detail: this.task.taskid
    });

    this.dispatchEvent(event);
  }
}
