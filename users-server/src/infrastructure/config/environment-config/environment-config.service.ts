import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EnvironmentConfigService {
    constructor(private configService: ConfigService) {}
    getDatabaseURL(): string {
        return this.configService.get<string>('DB_URL');
    }

    getDatabaseSync(): boolean {
        return this.configService.get<string>('NODE_ENV') !== 'production';
    }
}