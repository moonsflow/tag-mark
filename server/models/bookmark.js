import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const bookmarkSchema = new Schema({
  title: { type: 'String', required: true },
  url: { type: 'String', required: true },
  hasStar: { type: 'Boolean', default: false },
  tags: [ { name: String, slug: String } ],
  dateAdded: { type: 'Date', default: Date.now, required: true },
  cuid: { type: 'String', required: true }
});

export default mongoose.model('Bookmark', bookmarkSchema);
