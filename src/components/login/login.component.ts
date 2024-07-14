import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup,FormsModule,ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToasterService } from '../../services/toaster.service';
import { ToastType } from '../../models/toastInfo';
import { ToastsComponent } from "../form/toasts/toasts.component";
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private toasterService: ToasterService
  ) {}

  login(): void {
    const isLoggedIn = this.authService.login(this.username, this.password);
    if (isLoggedIn) {
      this.router.navigate(['/home']);
    } else {
      this.toasterService.show('Login failed', ToastType.Error);
    }
  }
}
