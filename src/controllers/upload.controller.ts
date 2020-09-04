import { Controller, Post, UseInterceptors, UploadedFile, Req, Request } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express'
import { editFileName, imageFileFilter } from './../utils/file-upload.utils'
import { diskStorage } from 'multer'

@Controller('upload')
export class UploadController {
    constructor() {}

    @Post()
    @UseInterceptors( FileInterceptor('file', {
        storage: diskStorage({
          destination: './files',
          filename: editFileName,
        }),
        fileFilter: imageFileFilter,
      }))
    uploadFile(@UploadedFile() file, @Req() request: Request) {
      
        return file;
    }
}
