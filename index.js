const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());  // Enables all CORS requests

app.use(express.static('public')); // Serves static files from the 'public' directory

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is listening on port ${port}`));
