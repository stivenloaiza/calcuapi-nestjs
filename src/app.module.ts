import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CalculadoraController } from './calculadora/calculadora.controller';
import { CalculadoraService } from './calculadora/calculadora.service';
import { CalculadoraModule } from './calculadora/calculadora.module';

@Module({
  imports: [CalculadoraModule],
  controllers: [AppController, CalculadoraController],
  providers: [AppService, CalculadoraService],
})
export class AppModule {}
