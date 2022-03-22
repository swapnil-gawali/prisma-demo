import { INestApplication, Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { log } from "util";

@Injectable()
export class PrismaService extends PrismaClient
    implements OnModuleInit {

    constructor() {
        super({
            log: [
                { emit: 'stdout', level: 'query' },
                { emit: 'stdout', level: 'info' },
                { emit: 'stdout', level: 'warn' },
                { emit: 'stdout', level: 'error' },
            ]
        });
    }

    async onModuleInit() {
        await this.$connect();
    }

    async enableShutdownHooks(app: INestApplication) {
        this.$on("beforeExit", async () => {
            await app.close();
        });
    }
}