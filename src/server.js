import { createError } from 'http-errors';

import server from './App';

server.listen(process.env.PORT || 3000);

// catch 404 and forward to error handler
server.use((req, res, next) => next(createError(404)));

// error handler
server.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
