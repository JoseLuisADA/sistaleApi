// src/index.js
import app from './app.js';
import 'dotenv/config';

export default app.listen(4000, () => {
    console.log("Server is listening on port 4000");
});