import {Request, Response} from 'express';
import { GetLastMessagesService } from '../services/GetLastMessagesService';

class GetLastMessagesController {
    async handle(request: Request, response: Response) {
        try {
            const service = new GetLastMessagesService();
            const result = await service.execute();
            return response.json(result);
        } catch (error) {
            return response.status(400).json(error.message)
        }
    }
}

export { GetLastMessagesController }