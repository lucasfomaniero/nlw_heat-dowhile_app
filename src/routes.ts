import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { GetLastMessagesController } from "./controllers/GetLastMessagesController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";
import { UserProfileController } from "./controllers/UserProfileController";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle)
router.post("/messages", ensureAuthenticated, new CreateMessageController().handle)
router.get("/messages", new GetLastMessagesController().handle)
router.get("/profile",ensureAuthenticated,  new UserProfileController().handle)

export {router};