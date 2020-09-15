import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeacherService } from './modules/teacher.service';
import { Neo4jProvider } from './common/neo4j.provider';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, TeacherService, Neo4jProvider],
})
export class AppModule {}
