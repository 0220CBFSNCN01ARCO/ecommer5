function recordameMiddleware(req, res, next) {
  next();

  if(req.cookies.recordame != undefined && req.session.usuarioLogueado == undefined) {
     if (errors.isEmpty()) {
         let usersJSON = fs.readFileSync('./data/users.json', {encoding: "utf-8"});
         let users;
         if (usersJSON == "") {
           users = [];
         } else {
           users = JSON.parse(usersJSON);
         }
 
         for (let i = 0; i < usersJSON.length; i++) {
           if(usuarios[i].email == req.cookies.recordame) {
             usuarioALoguearse = usuarios[i]; //al principio habia un let
 
               break;
             }
           }

  } 
  req.session.usuarioLogueado = usuarioALoguearse
}
}

module.exports = recordameMiddleware;