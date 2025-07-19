const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const societesRoutes = require('./routes/societe');
const authRoutes = require('./routes/auth');

app.use('/api/societes', societesRoutes);
app.use('/api/auth', authRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`✅ Server listening on http://localhost:${PORT}`);
});
