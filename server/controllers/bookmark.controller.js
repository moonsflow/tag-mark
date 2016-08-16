import Bookmark from '../models/bookmark';
import cuid from 'cuid';
import slug from 'slug';
import sanitizeHtml from 'sanitize-html';

// Get all bookmarks
export function getBookmarks(req, res) {
  Bookmark.find()
    .sort('-dateAdded')
    .populate('tags')
    .exec((err, bookmarks) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json({ bookmarks });
    });
}

// Create a bookmark
export function addBookmark(req, res) {
  if (!req.body.title || !req.body.url) {
    res.status(403).end();
  }

  const newBookmark = new Bookmark();
  newBookmark.title = sanitizeHtml(req.body.title);
  newBookmark.url = req.body.url;
  newBookmark.tags = tokenString(req.body.tags).map(item => {
    return { name: item, slug: slug(item) };
  });
  newBookmark.hasStar = req.body.hasStar;
  newBookmark.cuid = cuid();

  newBookmark.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ bookmark: saved});
  });
}

// Read one bookmark by id
export function getBookmark(req, res) {
  Bookmark.findOne({cuid: req.params.cuid}).exec((err, bookmark) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ bookmark });
  });
}


// Update one bookmark by cuid
export function updateBookmark(req, res) {
  Bookmark.findOne({cuid: req.params.cuid}).exec((err, bookmark) => {
    if (err) {
      res.status(500).send(err);
    }
    if (!bookmark) {
      res.status(404).end();
    }

    if (req.body.title) {
        bookmark.title = sanitizeHtml(req.body.title);
    }
    if (req.body.url) {
        bookmark.url = req.body.url;
    }
    if (req.body.tags) {
        bookmark.tags = tokenString(req.body.tags).map(item => {
          return { name: item, slug: slug(item) };
        });
    }
    if (req.body.hasStar) {
        bookmark.hasStar = req.body.hasStar;
    }

    bookmark.save((err, saved) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json({ bookmark: saved});
    });
  });
}


// Delete one bookmark by id
export function deleteBookmark(req, res) {
  Bookmark.findOne({cuid: req.params.cuid}).exec((err, bookmark) => {
    if (err) {
      res.status(500).sned(err);
    }
    if (bookmark) {
      bookmark.remove(() => {
        res.status(200).end();
      });
    } else {
      res.status(404).end();
    }
  });
}


function tokenString(text, seperator = ',') {
  let result = [];
  let splitedArray = text.split(seperator);
  splitedArray.forEach(item => {
    if (item) {
      result.push(String(item).trim());
    }
  });
  return result;
}
