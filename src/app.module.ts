import { Module } from '@nestjs/common';
import { AutoresModule } from './modules/autores/autores.modulel';

@Module({
  imports: [AutoresModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
