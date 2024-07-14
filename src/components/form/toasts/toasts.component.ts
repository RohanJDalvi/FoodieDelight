import {  Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToasterService } from '../../../services/toaster.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-toasts',
  standalone: true,
  imports: [NgbModule, CommonModule],
  templateUrl: './toasts.component.html',
  styleUrl: './toasts.component.css'
})
export class ToastsComponent {
  constructor(private toasterService : ToasterService){}

  get toasts() {
    return this.toasterService.toasts;
  }
}
