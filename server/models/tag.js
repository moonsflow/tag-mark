import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const tagSchema = new Schema({
  name: { type: 'String', required: true },
  slug: { type: 'String', required: true },
  color: { type: 'String' }
});

export default mongoose.model('Tag', tagSchema);
