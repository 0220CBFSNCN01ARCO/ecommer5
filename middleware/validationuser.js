const validandologin =  () => {
    return [body('email').custom(async value => {
        let user =  await db.Usuario.findOne({
            where: {
                email: value
              }
        });
        if(user == null){
            return Promise.reject();
        }
    }).withMessage("Email inválido"), body('password').custom( async (value)=> {
        let users = await db.Usuario.findAll()
        const userPass = users.find(user => {
            return bcrypt.compareSync(value, user.password);
        })
            if (userPass == null){
                return Promise.reject();
            }}).withMessage("La contraseña es incorrecta")
    ]
};

