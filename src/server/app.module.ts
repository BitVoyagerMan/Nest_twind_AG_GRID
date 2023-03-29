import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
// import { MongooseModule } from '@nestjs/mongoose'
import { ViewModule } from './modules/view/view.module'

@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true }),
		ViewModule,
		// MongooseModule.forRoot('mongodb://localhost/nest'),
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
