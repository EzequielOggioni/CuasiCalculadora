export class Alumno {

    public dni: number=0;
    public nombre: string='';
    public apellido: string='';
    public sigla: string='';
    public foto: string='';
    public reverso:boolean;
    
    constructor(dni:number,nombre: string,apellido: string,sigla: string,foto: string){
        this.dni=dni;
        this.nombre=nombre;
        this.apellido=apellido;
        this.sigla=sigla;
        this.foto=foto;
        this.reverso = true;
    }


}
