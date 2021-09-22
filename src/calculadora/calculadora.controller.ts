import { Controller, Get, Query } from '@nestjs/common';
import { CalculadoraService } from './calculadora.service';

@Controller('calculadora')
export class CalculadoraController {
    constructor(private readonly calculadoraService: CalculadoraService) {}
    @Get('sumar')
    //digitos={digt1=1, digit2=0}
    getSumar(@Query() datosQuery) {

        let resultado: number = this.calculadoraService.sumar2Digitos(datosQuery);
        console.log(resultado);
        if(resultado>=0){
            return {
                'status':true,
                'nameQuery':datosQuery['name'],
                'operation':datosQuery['digt1']+'+'+datosQuery['digt2'],
                'result':resultado
            }; 
        }else{
            return {
                'status':false,
                'nameQuery':datosQuery['name'],
                'operation':datosQuery['digt1']+'+'+datosQuery['digt2'],
                'result':'params error type'
            }; 
        }
        
    }

    @Get('restar')
    //digitos={digt1=1, digit2=0}
    getRestar(@Query() datosQuery) {

        let resultado: number = this.calculadoraService.restar2Digitos(datosQuery);
        console.log(resultado);
        if(resultado>=0){
            return {
                'status':true,
                'nameQuery':datosQuery['name'],
                'operation':datosQuery['digt1']+'-'+datosQuery['digt2'],
                'result':resultado
            }; 
        }else{
            return {
                'status':false,
                'nameQuery':datosQuery['name'],
                'operation':datosQuery['digt1']+'-'+datosQuery['digt2'],
                'result':'params error type'
            }; 
        }
        
    }

    @Get('multiplicar')
    //digitos={digt1=1, digit2=0}
    getMultiplicar(@Query() datosQuery) {

        let resultado: number = this.calculadoraService.multiplicar2Digitos(datosQuery);
        console.log(resultado);
        if(resultado>=0){
            return {
                'status':true,
                'nameQuery':datosQuery['name'],
                'operation':datosQuery['digt1']+'*'+datosQuery['digt2'],
                'result':resultado
            }; 
        }else{
            return {
                'status':false,
                'nameQuery':datosQuery['name'],
                'operation':datosQuery['digt1']+'*'+datosQuery['digt2'],
                'result':'params error type'
            }; 
        }
        
    }

    @Get('dividir')
    //digitos={digt1=1, digit2=0}
    getDividir(@Query() datosQuery) {

        let resultado: number = this.calculadoraService.dividir2Digitos(datosQuery);
        console.log(resultado);
        if(resultado>=0){
            return {
                'status':true,
                'nameQuery':datosQuery['name'],
                'operation':datosQuery['digt1']+'/'+datosQuery['digt2'],
                'result':resultado
            }; 
        }else{
            return {
                'status':false,
                'nameQuery':datosQuery['name'],
                'operation':datosQuery['digt1']+'/'+datosQuery['digt2'],
                'result':'params error type'
            }; 
        }
        
    }


}
