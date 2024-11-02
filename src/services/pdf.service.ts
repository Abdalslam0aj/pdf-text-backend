import { BadRequestException, Injectable, UploadedFile } from '@nestjs/common';
import { PdfTextResponseDto } from 'src/dtos/pdf-text-response.dto';



@Injectable()
export class PDFService {

  async toText(@UploadedFile() file): Promise<PdfTextResponseDto> {
    const pdf = require('pdf-parse');

    var data = await pdf(file.buffer);
    return new PdfTextResponseDto(data.text);
  }

}
