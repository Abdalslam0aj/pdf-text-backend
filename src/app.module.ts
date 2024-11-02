import { Module } from '@nestjs/common';
import { PdfController } from './controllers/pdf.controller';
import { PDFService } from './services/pdf.service';

@Module({
  imports: [],
  controllers: [PdfController],
  providers: [PDFService],
})
export class AppModule {}
