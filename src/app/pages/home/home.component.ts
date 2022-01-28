import { Component, OnInit } from '@angular/core';
import { Film, NetflixApp } from './models/NetflixApp';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public NetflixApp: NetflixApp;
  public sciFi:Film;
  public terror: Film;
  public accion: Film;

  constructor() { 
    this.NetflixApp = {
      navbar: { 
        logo:{
          src:"./assets/images/LOGO/logoNetApp.png",
          alt:"netflix logo"
        }

      },
      hero:{
        title: "Los 5 más populares hoy",
        imgGallery: [
          {
          src: "./assets/images/Top10/1-papel.webp",
          alt:"La casa de papel"
        },
        {
          src: "./assets/images/Top10/2-reina.webp",
          alt:"Reina"
        },
        {
          src: "./assets/images/Top10/3-titanes.webp",
          alt:"Titanes"
        },
        {
          src: "./assets/images/Top10/4-lostinspace.webp",
          alt:"Lost in Space"
        },
        {
          src: "./assets/images/Top10/5-dondecaben.webp",
          alt:"Donde Caben"
        }
      ]

      }

    };
    this.sciFi = {
      title: "Ciencia ficción",
        imgGallery: [
          {
          src: "./assets/images/Sci-fi/6dia.webp",
          alt:"El 6 Dia"
        },
        {
          src: "./assets/images/Sci-fi/12monos.webp",
          alt:"12 monos"
        },
        {
          src: "./assets/images/Sci-fi/afterearth.webp",
          alt:"After Earth"
        },
        {
          src: "./assets/images/Sci-fi/colverparadox.jpg",
          alt:"the cloverfild paradox"
        },
        {
          src: "./assets/images/Sci-fi/core.webp",
          alt:"core"
        },
        {
          src: "./assets/images/Sci-fi/deepimpact.webp",
          alt:"Deep Impact"
        },
        {
          src: "./assets/images/Sci-fi/doom.webp",
          alt:"doom"
        },
        {
          src: "./assets/images/Sci-fi/gits.webp",
          alt:"Ghost in the shell"
        },
        {
          src: "./assets/images/Sci-fi/jumper.webp",
          alt:"jumper"
        },
        {
          src: "./assets/images/Sci-fi/passengers.webp",
          alt:"passengers"
        },
        {
          src: "./assets/images/Sci-fi/startrek.webp",
          alt:"Star trek"
        },
        {
          src: "./assets/images/Sci-fi/transformers.webp",
          alt:"Transformers"
        },
        {
          src: "./assets/images/Sci-fi/watchmen.webp",
          alt:"watchMen"
        }

         ] 
        };
        this.terror = {
          title:"Terror",
          imgGallery: [
            {
              src: "./assets/images/Terror/apostol.jpg",
              alt:"Apostol"
            },
            {
              src: "./assets/images/Terror/calleterror.jpg",
              alt:"La Calle del terror"
            },
            {
              src: "./assets/images/Terror/infiernoagua.webp",
              alt:"Infierno bajo el agua"
            },
            {
              src: "./assets/images/Terror/life.webp",
              alt:"Life"
            },
            {
              src: "./assets/images/Terror/malasana.webp",
              alt:"Malasaña"
            },
            {
              src: "./assets/images/Terror/multiple.webp",
              alt:"Multiple"
            },
            {
              src: "./assets/images/Terror/reflejos.webp",
              alt:"Reflejos"
            }
          ]
        };

        this.accion = {
          title:"Accion",
          imgGallery: [
            {
              src: "./assets/images/Accion/ejercitomuertos.jpg",
              alt:"Ejercito de los muertos"
            },
            {
              src: "./assets/images/Accion/elprotector.webp",
              alt:"El Protector"
            },
            {
              src: "./assets/images/Accion/equalizer2.webp",
              alt:"Equalizer 2"
            },
            {
              src: "./assets/images/Accion/heat.webp",
              alt:"Heat"
            },
            {
              src: "./assets/images/Accion/jackreacher.webp",
              alt:"Jack Reacher"
            },
            {
              src: "./assets/images/Accion/johnwick2.webp",
              alt:"John Wick 2"
            },
            {
              src: "./assets/images/Accion/killbill2.webp",
              alt:"Kill Bill 2"
            }
          ]
        }  
  }

  ngOnInit(): void {
  }

}
