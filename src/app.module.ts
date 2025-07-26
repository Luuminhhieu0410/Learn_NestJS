import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';


import { CatsModule } from './cats/cats.module';
import { CoreModule } from './core/core.module';
import { ExpressMidlleware } from './middleware/express.middleware';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { CatsController } from './cats/cats.controller';
import { UsersModule } from './users/users.module';

// import module
@Module({
  imports: [CatsModule, UsersModule],
  // imports: [CoreModule], hoặc import như này
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(LoggerMiddleware).forRoutes('cats'); // Option 1: Áp dụng middleware cho tất cả các route có đường
    // dẫn bắt đầu là /cats

    // consumer
    //   .apply(LoggerMiddleware)
    //   .forRoutes({ path: '/cats', method: RequestMethod.POST }); //Option 2: Áp dụng middleware chỉ cho POST /cats
    // // không post được /cats/testmiddleware hoặc phải thay path: '/cats/*'

    consumer
      .apply(LoggerMiddleware, ExpressMidlleware)
      .forRoutes(CatsController); //Option 3: Áp dụng middleware cho tất cả các phương thức HTTP trong CatsController.
  }
}
