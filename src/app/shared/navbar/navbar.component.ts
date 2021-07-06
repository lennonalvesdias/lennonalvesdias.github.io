import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd, NavigationStart } from "@angular/router";
import { Location, PopStateEvent } from "@angular/common";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  public isCollapsed = true;
  private lastPoppedUrl: string;
  private yScrollStack: number[] = [];

  constructor(public location: Location) {}

  ngOnInit() {}

  get menu() {
    return [
      {
        title: "Sobre Mim",
        link: "/profile",
        icon: "fas fa-user fa-fw mr-2",
      },
      // {
      //   title: "Currículo",
      //   link: "/resume",
      //   icon: "fas fa-file-alt fa-fw mr-2",
      // },
      {
        title: "Blog",
        link: "/blog",
        icon: "fas fa-blog fa-fw mr-2",
      },
    ];
  }

  get profile() {
    return {
      name: "Lennon Dias",
      image:
        "https://www.gravatar.com/avatar/d55c213eb8dadd014ca0d7085f0d7b4a?s=250&d=404",
      description:
        "Computer Scientist, Developer. Computer Science (UTFPR/PG - 2015). Artificial Intelligence & Machine Learning (FIAP/SP - 2020).",
    };
  }

  getExtraContent() {
    return [
      {
        link: "https://site.lennon.cloud/assets/portfolio.html",
        icon: "ni ni-spaceship",
        title: "Portfólio Data Science",
        description:
          "Este portfólio tem como objetivo demonstrar conhecimentos abrangentes sobre análise e interpretação dos dados.",
      },
    ];
  }
  isHome() {
    var titlee = this.location.prepareExternalUrl(this.location.path());

    if (titlee === "#/home") {
      return true;
    } else {
      return false;
    }
  }

  getCertificates() {
    return [
      {
        name:
          "Diretor Voluntário - Associação Atlética dos Acadêmicos VII de Maio",
        link: "https://site.lennon.cloud/assets/certificates/atletica-2012.jpg",
      },
      {
        name:
          "Participante - XII Semana de Atualização em Tecnologia da Informação (SATI)",
        link: "https://site.lennon.cloud/assets/certificates/sati-2013.jpg",
      },
      {
        name:
          "Participante - XIII Semana de Atualização em Tecnologia da Informação (SATI)",
        link: "https://site.lennon.cloud/assets/certificates/sati-2014.jpg",
      },
      {
        name: "Participante - Fórum E-Commerce Brasil",
        link:
          "https://site.lennon.cloud/assets/certificates/forum-ecommerce-2016.pdf",
      },
      {
        name:
          "Participante - Bootcamp - Intermediário - Big Data & Machine Learning",
        link:
          "https://site.lennon.cloud/assets/certificates/google-bigdata-machinelearning-2018.pdf",
      },
    ];
  }

  isDocumentation() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee === "#/documentation") {
      return true;
    } else {
      return false;
    }
  }

  get socialNetworks() {
    return [
      // {
      //   link: "https://www.facebook.com/lennonalvesdias",
      //   title: "Like us on Facebook",
      //   icon: "fab fa-facebook-square fa-fw",
      //   name: "Facebook",
      // },
      // {
      //   link: "https://www.instagram.com/lennonalvesdias",
      //   title: "Follow us on Instagram",
      //   icon: "fab fa-instagram fa-fw",
      //   name: "Instagram",
      // },
      {
        link: "https://twitter.com/lennonalvesdias",
        title: "Follow us on Twitter",
        icon: "fab fa-twitter fa-fw",
        name: "Twitter",
      },
      {
        link: "https://www.linkedin.com/in/lennonalvesdias/",
        title: "Connect us on LinkedIn",
        icon: "fab fa-linkedin fa-fw",
        name: "LinkedIn",
      },
      {
        link: "https://github.com/lennonalvesdias",
        title: "Star us on Github",
        icon: "fab fa-github fa-fw",
        name: "Github",
      },
      {
        link: "https://stackoverflow.com/users/13500918/lennon-alves-dias",
        title: "Follow us on Stack Overflow",
        icon: "fab fa-stack-overflow fa-fw",
        name: "Stack Overflow",
      },
      {
        link: "https://medium.com/@lennonalvesdias",
        title: "Read us on Medium",
        icon: "fab fa-medium fa-fw",
        name: "Medium",
      },
      {
        link: "http://lattes.cnpq.br/6379239457237236",
        title: "Read us on Lattes",
        icon: "fas fa-file-alt fa-fw",
        name: "Lattes",
      },
    ];
  }
}
