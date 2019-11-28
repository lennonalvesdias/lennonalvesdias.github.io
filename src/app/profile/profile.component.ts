import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

    constructor() { }

    ngOnInit() { }

    get imagemPerfil() {
        return `https://www.gravatar.com/avatar/d55c213eb8dadd014ca0d7085f0d7b4a?s=250&d=404`;
    }
}
