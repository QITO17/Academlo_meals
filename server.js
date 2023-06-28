const app = require('./app');
const globalErrorHandler = require('./controllers/error.controllers');
const db = require('./database/db');
const initModel = require('./models/initModel');
const userRoures = require('./routes/userRoutes')
const restaurantRoutes = require('./routes/restaurantRoutes')

const AppError = require('./utils/AppError')

//routes
app.use('/api/v1/users', userRoures);
app.use('/api/v1/restaurants', restaurantRoutes);


app.all('*', (req, res, next) => {
  return next(
    new AppError('No se puede encontrar la url', 404)
  )
})

app.use(globalErrorHandler)

db.authenticate()
  .then((res) => console.log('Autenticada'))
  .catch((err) => console.log(err));

initModel() 

db.sync()
  .then((res) => console.log('sincronozada'))
  .catch((err) => console.log(err));




app.listen(3000, () => {
    console.log('Running 🥥🍎❤️🍏🍍');
})