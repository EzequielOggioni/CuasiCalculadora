import { Routes } from '@angular/router';
import { AlumnosComponent } from './componentes/alumnos/alumnos.component';
import { CalculadoraComponent } from './componentes/calculadora/calculadora.component';

export const routes: Routes = [
{path:'alumnos', component:AlumnosComponent },
{path:'**', component:CalculadoraComponent }

];
