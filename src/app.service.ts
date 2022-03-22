import { Injectable } from "@nestjs/common";
import { PrismaService } from "./prisma.service";

@Injectable()
export class AppService {

    constructor(private readonly prisma: PrismaService) {
    }

    async createUser() {
        await this.prisma.user.findMany({
            where: {
                id: 1
            },
            include: {
                posts: true
            }
        });
    }
}
