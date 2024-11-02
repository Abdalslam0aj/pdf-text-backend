import { Controller, FileTypeValidator, Get, MaxFileSizeValidator, ParseFilePipe, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { PDFService } from '../services/pdf.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('Pdf')
export class PdfController {
  constructor(private readonly pdfService: PDFService) { }

  @Post('ToText')
  @UseInterceptors(FileInterceptor('file'))
  public async uploadFile(@UploadedFile(new ParseFilePipe({
    validators: [
      new MaxFileSizeValidator({ maxSize: 20971520 }),
      new FileTypeValidator({ fileType: /(pdf)$/i }),
    ],
  }),) file: Express.Multer.File,) {    
    return await this.pdfService.toText(file);
  }

}
