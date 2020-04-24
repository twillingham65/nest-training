import { Controller, Get, Param, NotFoundException, Put, Body } from '@nestjs/common';
import { EnvService } from './env.service';

@Controller('env')
export class EnvController {
    constructor(private readonly envservice: EnvService) {}

    @Get()
    public async getall(): Promise<Record<string, string>> {
        return this.envservice.getALL();
    }

    @Get("/:id")
    public async getEnv(@Param('id') id: string): Promise<string> {
        const value = await this.envservice.getEnv(id);
        if (typeof value != "string") {
            throw new NotFoundException('ENV not found');
        }
        return value;
    }

    @Put("/:id")
    public async setEnv(@Param('id') id: string, @Body() value: unknown): Promise<string> {
        const result = await this.envservice.setEnv(id, value);

        if (typeof value != "string") {
            throw new NotFoundException('ENV not found');
        }
        return value;
    }
}
