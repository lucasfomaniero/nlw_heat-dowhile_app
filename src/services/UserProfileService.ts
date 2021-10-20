import prismaClient from '../prisma/index';
import {io} from '../App';

class UserProfileService {
    async execute(user_id: string) {
        const user = await prismaClient.user.findFirst({
            where: {
                id: user_id,
            }
        });

        return user;
    }
}
export {UserProfileService}