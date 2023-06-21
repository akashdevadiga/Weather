import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  @Input() public popupTexts: any = {};
  @Output() public onButton1Click = new EventEmitter();
  @Output() public onButton2Click = new EventEmitter();

  button1Click() {
    this.onButton1Click.emit('no clicked');
  }

  button2Click() {
    this.onButton2Click.emit('yes clicked');
  }
}
