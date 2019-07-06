import { Component, OnInit } from '@angular/core';

declare var md5;

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'page-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  get imagemPerfil() {
    return `https://www.gravatar.com/avatar/${md5('lennonalvesdias@gmail.com')}?s=250&d=404`;
  }
}
