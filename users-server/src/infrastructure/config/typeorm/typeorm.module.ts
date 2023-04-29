import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { EnvironmentConfigService } from '../environment-config/environment-config.service';
import {EnvironmentConfigModule} from "../environment-config/environment-config.module";

export const getTypeOrmModuleOptions = (config: EnvironmentConfigService): TypeOrmModuleOptions =>
    ({
        type: 'mongodb',
        url: config.getDatabaseURL(),
        autoLoadEntities: true,
        synchronize: config.getDatabaseSync(),
    } as TypeOrmModuleOptions);

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [EnvironmentConfigModule],
            inject: [EnvironmentConfigService],
            useFactory: getTypeOrmModuleOptions,
        }),
    ],
})
export class TypeOrmConfigModule {}