import { LightningElement, api } from "lwc";

export default class MyDndList extends LightningElement {
  @api tasklist;
  @api category;

  handleDragOver(evt) {
    evt.preventDefault();
  }

  handleItemDrag(evt) {
    const event = new CustomEvent("listitemdrag", {
      detail: evt.detail
    });

    this.dispatchEvent(event);
  }

  handleDrop(evt) {
    const event = new CustomEvent("itemdrop", {
      detail: this.category
    });

    this.dispatchEvent(event);
  }
}
