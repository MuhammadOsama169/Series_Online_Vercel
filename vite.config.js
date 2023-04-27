import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config();

export default {
  plugins: [react()],
  define: {
    'process.env': process.env,
  },
};
