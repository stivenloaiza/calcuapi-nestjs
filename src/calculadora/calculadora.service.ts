import { Injectable } from '@nestjs/common';

@Injectable()
export class CalculadoraService {

    
    sumar2Digitos(datos):number{ 
        let suma:number = (+datos['digt1'])+(+datos['digt2']);
        return suma;   
    }

    restar2Digitos(datos):number{ 
        let resta:number = (+datos['digt1'])-(+datos['digt2']);
        return resta;   
    }

    multiplicar2Digitos(datos):number{ 
        let multi:number = (+datos['digt1'])*(+datos['digt2']);
        return multi;   
    }

    dividir2Digitos(datos):number{ 
        let multi:number = (+datos['digt1'])/(+datos['digt2']);
        return multi;   
    }
}
