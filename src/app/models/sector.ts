export class Sector {
public pkidtiposector: number;
public codigotiposector: string;
public nombretiposector: string;
public descripciontiposector: string;
public tiposectoractivo: string;
public creacionriposector: Date;
public modificaciontiposector: Date;
constructor (tiposectoractvo = 'false') {
    this.tiposectoractivo = tiposectoractvo;
    }
}
