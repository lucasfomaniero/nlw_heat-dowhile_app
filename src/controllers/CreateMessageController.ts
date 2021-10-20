import {Request, Response} from 'express';
import { CreateMessageService } from '../services/CreateMessageService';

class CreateMessageController {
    async handle(request: Request, response: Response) {
        try {
            const {text} = request.body;
            const service = new CreateMessageService();
            const result = await service.execute(text,request.user_id);
            return response.json(result);
        } catch (error) {
            return response.status(400).json(error.message)
        }
    }
}

export { CreateMessageController }