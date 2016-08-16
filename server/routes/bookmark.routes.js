import { Router } from 'express';
import * as BookmarkController from '../controllers/bookmark.controller';
const router = new Router();

// Get all
router.route('/bookmarks').get(BookmarkController.getBookmarks);

// Add a new bookmark
router.route('/bookmarks').post(BookmarkController.addBookmark);

// Get one bookmark by cuid
router.route('/bookmarks/:cuid').get(BookmarkController.getBookmark);

// Delete one bookmark by cuid
router.route('/bookmarks/:cuid').delete(BookmarkController.deleteBookmark);

// Update one bookmark by cuid
router.route('/bookmarks/:cuid').put(BookmarkController.updateBookmark);

export default router;
