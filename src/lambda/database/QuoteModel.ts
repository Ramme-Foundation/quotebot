import { model, Schema } from 'mongoose';

const QuoteSchema = new Schema({
  user_id: String,
  quote: String
});
QuoteSchema.set('timestamps', true);
export const QuoteModel = model('Quote', QuoteSchema);
