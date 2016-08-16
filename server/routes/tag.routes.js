import { Router } from 'express';
import * as TagController from '../controllers/tag.controller';
const router = new Router();

router.route('/tags').get(TagController.getTags);

router.route('/tags/:tag').get(TagController.getBookmarksByTagslug);

export default router;
