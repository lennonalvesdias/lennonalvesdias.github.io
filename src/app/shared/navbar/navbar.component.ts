import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Location, PopStateEvent } from '@angular/common';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    public isCollapsed = true;
    private lastPoppedUrl: string;
    private yScrollStack: number[] = [];

    constructor(public location: Location, private router: Router) {
    }

    ngOnInit() {
        this.router.events.subscribe((event) => {
            this.isCollapsed = true;
            if (event instanceof NavigationStart) {
                if (event.url != this.lastPoppedUrl)
                    this.yScrollStack.push(window.scrollY);
            } else if (event instanceof NavigationEnd) {
                if (event.url == this.lastPoppedUrl) {
                    this.lastPoppedUrl = undefined;
                    window.scrollTo(0, this.yScrollStack.pop());
                } else
                    window.scrollTo(0, 0);
            }
        });
        this.location.subscribe((ev: PopStateEvent) => {
            this.lastPoppedUrl = ev.url;
        });
    }

    isHome() {
        var titlee = this.location.prepareExternalUrl(this.location.path());

        if (titlee === '#/home') {
            return true;
        }
        else {
            return false;
        }
    }
    isDocumentation() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '#/documentation') {
            return true;
        }
        else {
            return false;
        }
    }

    getExtraContent() {
        return [
            {
                "link": "https://lennonalves.com.br/assets/portfolio.html",
                "icon": "ni ni-spaceship",
                "title": "Portfólio Data Science",
                "description": "Este portfólio tem como objetivo demonstrar conhecimentos abrangentes sobre análise e interpretação dos dados."
            }
        ]
    }

    getCertificates() {
        return [
            {
                "name": "Diretor Voluntário - Associação Atlética dos Acadêmicos VII de Maio",
                "link": "https://lennonalves.com.br/assets/certificates/atletica-2012.jpg"
            },
            {
                "name": "Participante - XII Semana de Atualização em Tecnologia da Informação (SATI)",
                "link": "https://lennonalves.com.br/assets/certificates/sati-2013.jpg"
            },
            {
                "name": "Participante - XIII Semana de Atualização em Tecnologia da Informação (SATI)",
                "link": "https://lennonalves.com.br/assets/certificates/sati-2014.jpg"
            },
            {
                "name": "Participante - Fórum E-Commerce Brasil",
                "link": "https://lennonalves.com.br/assets/certificates/forum-ecommerce-2016.pdf"
            },
            {
                "name": "Participante - Bootcamp - Intermediário - Big Data & Machine Learning",
                "link": "https://lennonalves.com.br/assets/certificates/google-bigdata-machinelearning-2018.pdf"
            }
        ]
    }

    getSocialNetworks() {
        return [
            {
                "link": "https://www.facebook.com/lennonalvesdias",
                "title": "Like us on Facebook",
                "icon": "fa fa-facebook-square",
                "name": "Facebook"
            },
            {
                "link": "https://www.instagram.com/lennonalvesdias",
                "title": "Follow us on Instagram",
                "icon": "fa fa-instagram",
                "name": "Instagram"
            },
            {
                "link": "https://twitter.com/lennonalvesdias",
                "title": "Follow us on Twitter",
                "icon": "fa fa-twitter-square",
                "name": "Twitter"
            },
            {
                "link": "https://github.com/lennonalvesdias",
                "title": "Star us on Github",
                "icon": "fa fa-github",
                "name": "Github"
            },
            {
                "link": "https://www.linkedin.com/in/lennonalvesdias/",
                "title": "Connect us on LinkedIn",
                "icon": "fa fa-linkedin",
                "name": "LinkedIn"
            },
            {
                "link": "http://lattes.cnpq.br/6379239457237236",
                "title": "Read us on Lattes",
                "icon": "fa fa-file-text-o",
                "name": "Lattes"
            }
        ]
    };
}
