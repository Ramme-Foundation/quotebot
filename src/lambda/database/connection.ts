import dotenv from 'dotenv';
import { connect } from 'mongoose';
dotenv.config();

connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
