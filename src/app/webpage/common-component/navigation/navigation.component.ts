import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navigation.component.html',
  styleUrls: ['../../../css/bootstrap.min.css', './navigation.component.css']
})
export class NavigationComponent {
  constructor(private router: Router) { }
  logOut() {
    //xóa token
    localStorage.removeItem('token')
    //redirect về login
    this.router.navigate(['/login'])
  }

}
