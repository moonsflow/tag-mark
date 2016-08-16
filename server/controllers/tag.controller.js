import Bookmark from '../models/bookmark';
import slug from 'slug';

export function getTags(req, res) {
  Bookmark.find()
    .distinct('tags.name')
    .exec((err, tags) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json({ tags: tags.map(item => {
        return { name: item, slug: slug(item)}; })
      });
    });
}


export function getBookmarksByTagslug(req, res) {
  Bookmark.find({tags: {$elemMatch: {slug: req.params.tag}}})
    .sort('-dateAdded')
    .exec((err, bookmarks) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json({ bookmarks });
    });
}
