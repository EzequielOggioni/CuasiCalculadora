import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Alumno } from '../../clases/alumno';

@Component({
  selector: 'app-alumnos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.css'
})
export class AlumnosComponent {

  public alumnos: Array<Alumno>;
  public nuevo:Alumno= new Alumno(0,"nombre","apellido","NA","" );
 public agrega: boolean=false;
 public textura:string = 'https://imgs.search.brave.com/hS-3fAVxnh2IuEhl0DJ3CTst5XyuIHsuZbX-XuezqA0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90by1ncmF0aXMv/dGV4dHVyYS1wYXJl/ZC1sYWRyaWxsb18y/My0yMTQ3OTYwMjQ2/LmpwZz9zaXplPTYy/NiZleHQ9anBn';

  constructor() {
    this.alumnos = new Array<Alumno>();
    this.alumnos.push(new Alumno(45022010, 'Nicolas', 'Rodriguez', 'NR', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA6Iz6MuGZBMhQd2xDINHAFY1VnMKm54sRcA&s'));
    this.alumnos.push(new Alumno(45022010, 'Nicolas', 'Rodriguez', 'NR', ''));
    this.alumnos.push(new Alumno(45022010, 'Nicolas', 'Rodriguez', 'NR', 'https://imgs.search.brave.com/aM-xz6eDnboSABeJ9iRaG_Yg_E13aEKfr7OEzt0-euU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzk1LzA4LzA4/LzM2MF9GXzk1MDgw/ODgwX0VGY0lsSW5L/aXB0UlVyUVloWmpP/VjY0NEtldkRJTXlO/LmpwZw'));
    this.alumnos.push(new Alumno(45022010, 'Nicolas', 'Rodriguez', 'NR', ''));
    this.alumnos.push(new Alumno(45022010, 'Nicolas', 'Rodriguez', 'NR', 'https://empresas.infoempleo.com/hrtrends/media/2017/06/ThinkstockPhotos-607488494.jpg'));
    this.alumnos.push(new Alumno(45022010, 'Nicolas', 'Rodriguez', 'NR', ''));
    this.alumnos.push(new Alumno(45022010, 'Nicolas', 'Rodriguez', 'NR', 'https://previews.123rf.com/images/siridhata/siridhata1612/siridhata161200032/67974628-ilustraci%C3%B3n-de-dibujos-animados-sonriente-del-vector-persona.jpg'));

  }

  public agregar(){
    this.alumnos.push(this.nuevo);
    this.nuevo = new Alumno(0,"nombre","apellido","NA","" );
    this.agrega = false;
  }

}
