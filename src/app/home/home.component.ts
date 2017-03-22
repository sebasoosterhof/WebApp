import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { moveIn, fallIn, moveInLeft } from 'app/router.animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: { '[@moveIn]': '' }
})
export class HomeComponent implements OnInit {


  name: any;
  // tslint:disable-next-line:no-inferrable-types
  state: string = '';

  constructor(public af: AngularFire, private router: Router) {
    this.af.auth.subscribe(auth => {
      if (auth) {
        this.name = auth;
      }
    });
  }

  logout() {
    this.af.auth.logout();
    this.router.navigateByUrl('/login');
  }

  public ngOnInit() {

  }

}
