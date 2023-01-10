import mongoose, { mongo } from 'mongoose';

mongoose.set('strictQuery', false);

const connectDB = (url) => {
  return mongoose.connect(url);
};

export default connectDB;
