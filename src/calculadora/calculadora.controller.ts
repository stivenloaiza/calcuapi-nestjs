import { Controller, Get, Post, Put, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CalculadoraService } from './calculadora.service';

@ApiTags('Calculadora API')
@Controller('calculadora')
export class CalculadoraController {
    constructor(private readonly calculadoraService: CalculadoraService) {}
    @Post('sumar')
    //digitos={digt1=1, digit2=0}
    @ApiOperation({ summary: 'Get the add of two numbers' })
    @ApiQuery({name: 'digt1', required: true, description: 'Number 1 to add'})
    @ApiQuery({name: 'digt2', required: true, description: 'Number 2 to add'})
    @ApiQuery({name: 'name', required: false, description: 'The name of client'})
    @ApiResponse({ status: 200, description: 'Successful', })
    @ApiResponse({ status: 403, description: 'Forbidden' })
    @ApiResponse({ status: 500, description: 'Internal server error' })
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
    @ApiOperation({ summary: 'Get the substract of two numbers' })
    @ApiQuery({name: 'digt1', required: true, description: 'Number 1 to add'})
    @ApiQuery({name: 'digt2', required: true, description: 'Number 2 to add'})
    @ApiQuery({name: 'name', required: false, description: 'The name of client'})
    @ApiResponse({ status: 200, description: 'Successful', })
    @ApiResponse({ status: 403, description: 'Forbidden' })
    @ApiResponse({ status: 500, description: 'Internal server error' })
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
    @ApiOperation({ summary: 'Get the multiply of two numbers' })
    @ApiQuery({name: 'digt1', required: true, description: 'Number 1 to add'})
    @ApiQuery({name: 'digt2', required: true, description: 'Number 2 to add'})
    @ApiQuery({name: 'name', required: false, description: 'The name of client'})
    @ApiResponse({ status: 200, description: 'Successful', })
    @ApiResponse({ status: 403, description: 'Forbidden' })
    @ApiResponse({ status: 500, description: 'Internal server error' })
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

    @Put('dividir')
    //digitos={digt1=1, digit2=0}
    @ApiOperation({ summary: 'Get the divide of two numbers' })
    @ApiQuery({name: 'digt1', required: true, description: 'Number 1 to add'})
    @ApiQuery({name: 'digt2', required: true, description: 'Number 2 to add'})
    @ApiQuery({name: 'name', required: false, description: 'The name of client'})
    @ApiResponse({ status: 200, description: 'Successful', })
    @ApiResponse({ status: 403, description: 'Forbidden' })
    @ApiResponse({ status: 500, description: 'Internal server error' })
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
