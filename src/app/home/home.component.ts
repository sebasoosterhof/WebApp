import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Http } from '@angular/http';


@Component({
  selector: 'ead-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  spaceScreens: Array<any>;


  name: any;
  state = '';

  constructor(public af: AngularFire, private router: Router, private http: Http) {
    this.af.auth.subscribe(auth => {
      if (auth) {
        this.name = auth;
      }
    });
    this.http.get('../../src/data.json')
      .map(response => response.json().screenshots)
      .subscribe(res => this.spaceScreens = res);
  }

  logout() {
    this.af.auth.logout();
    this.router.navigateByUrl('/login');
  }

  public ngOnInit() {
  }

   public likeMe(i) {
    if (this.spaceScreens[i].liked === 0) {
      this.spaceScreens[i].liked = 1;
    }
    else {
      this.spaceScreens[i].liked = 0;
    }
  }

  public deleteMe(i) {
    this.spaceScreens.splice(i, 1);
    console.log(i);
  }

}
