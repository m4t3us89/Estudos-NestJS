import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { UploadController } from './controllers/upload.controller'
import { AppService } from './app.service';
import { MulterModule } from '@nestjs/platform-express'




@Module({
  imports: [MulterModule.register({
    dest: './upload',
  })],
  controllers: [AppController,UploadController],
  providers: [AppService],
})
export class AppModule {}
