const express = require('express');
const app = express();
const port = 3000;

// Routes
const authRoutes = require('./routes/auth');
const klasRoutes = require('./routes/klassen');

app.use(express.json());
app.use('/auth', authRoutes);
app.use('/klassen', klasRoutes);

app.listen(port, () => {
    console.log(`Server draait op http://localhost:${port}`);
});
