import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-button-icon',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class NzDemoButtonIconComponent {


  isVisible = false;

  constructor() {}

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
  

}
