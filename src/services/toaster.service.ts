import { Injectable } from '@angular/core';
import { ToastType } from '../models/toastInfo';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {
  toasts: { message: string, type: string }[] = [];

  show(message: string, type: ToastType) {
    let toastType = '';
    switch(type) {
      case ToastType.Success:
        toastType = 'success';
        break;
      case ToastType.Info:
        toastType = 'info';
        break;
      case ToastType.Warning:
        toastType = 'warning';
        break;
      case ToastType.Error:
        toastType = 'error';
        break;
    }
    this.toasts.push({ message, type: toastType });
    setTimeout(() => this.toasts.shift(), 3000); 
  }


  clear() {
    this.toasts = [];
  }
}