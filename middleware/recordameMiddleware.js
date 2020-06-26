function recordameMiddleware(req, res, next) {
     next();

     if(req.cookies.recordame != undefined && req.session.usarioLogueado == undefined) {
        if (errors.isEmpty()) {
            let usersJSON = fs.readFileSync('users.json', {
              encoding: "utf-8",
            });
            let usuarios;
            if (usersJSON == " ") {
              usuarios = [];
            } else {
              usuarios = JSON.parse(usersJSON);
            }
    
            for (let i = 0; i < usersJSON.length; i++) {
              if(usuarios[i].email == req.cookies.recordame) {
                usuarioALoguearse = usuarios[i]; //al principio habia un let
    
                  break;
                }
              }

              req.session.usaruioLogueado = usuarioALoguearse;
     } 
}
}

module.exports = recordameMiddleware;