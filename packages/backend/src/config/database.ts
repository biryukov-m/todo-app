/* eslint-disable no-console */
import { ConnectionOptions, connect } from 'mongoose';

const connectDB = async () => {
  try {
    const options: ConnectionOptions = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      dbName: 'todos-app'
    };
    await connect(process.env.MONGO_URI, options);
    console.log('MongoDB Connected...');
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error(err);
    }
    // Exit process with failure
    process.exit(1);
  }
};

export default connectDB;
