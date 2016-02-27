'use strict';
/* global module, console */


module.exports = {


  errHandler: function(err, req, res, next) {

    console.error(err.stack);

    if (req.xhr) {
      res.status(500).send({
        error: 'Woops, something went wrong..'
      });
      next(err);
    } else if (err.code !== 'EBADCSRFTOKEN') {
      return next(err);
    } else if (res.status === 500) {
      res.render('error.html', {
        error: err
      });

    } else if (res.status === 404) {

      var viewFilePath = '404';
      var statusCode = 404;
      var result = {
        status: statusCode
      };

      res.status(result.status);
      res.render(viewFilePath, function(err) {
        if (err) {
          return res.status(result.status).json(result);
        }

        res.render(viewFilePath);
      });

    } else {
      // todo 
    }

  },

  pageNotFound: function(req, res) {
    var viewFilePath = '404';
    var statusCode = 404;
    var result = {
      status: statusCode
    };

    res.status(result.status);
    res.render(viewFilePath, function(err) {
      if (err) {
        return res.status(result.status).json(result);
      }

      res.render(viewFilePath);
    });
  }


}