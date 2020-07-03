const adminController = {
    adminProducts : function(req, res){
        db.Products.findAll()
          .then(products => {
            res.render('admin/products', {
              title: 'Admin',
              products: products
            })
          })  
    },
    create : function(req, res){
        res.render("createProduct")
        },
        
        agregar: function(req, res){
           
            //let errors = validationResult(req);
        
            //if(errors.isEmpty()){
              db.Libro.create({
                titulo: req.body.titulo,
                autor: req.body.autor,
                categoria: req.body.categoria,
                precio: req.body.precio,
                stock: req.body.sotck,
                avatar: req.files[0].filename
              }) 
              .then(function(libros){
                res.render('/products');
              })
              //let productosJSON = fs.readFileSync("./data/detalleProductos.json", {encoding: "utf-8"});
              //let productos;
              //if (productosJSON == "") {
              //  productos = [];
              //} else {
              //productos = JSON.parse(productosJSON);
          
             // }
             // let producto = {
              //  titulo: req.body.titulo,
               // autor: req.body.autor,
               // categoria: req.body.categoria,
              //  precio: req.body.precio,
              //  stock: req.body.sotck,
              //  avatar: req.files[0].filename,
          
             // }
          
              //productos.push(producto);
          
              //productosJSON = JSON.stringify(productos);
          
              //fs.appendFileSync("./data/detalleProductos.json", productosJSON);
          
              //res.redirect('/products');
           // } else {
            //  res.render("createProduct", {errors: errors.errors})
           // }
        
        
        },
        edit: function(req, res){
          const product = req.params.id;
          let productoAEditar = products.find( product => {
            return product.id == idProduct;
        });
        res.redirect('products', {producto: productoAEditar});
        },
        update: function(req, res){
          const idProducto = req.params.id;
                products.map( producto => {
                    if(producto.id == idProducto){
                      product.titulo= req.body.titulo,
                      product.autor= req.body.autor,
                      product.categoria= req.body.categoria,
                      product.precio= req.body.precio,
                      product.stock= req.body.stock,
                      product.avatar= req.files[0].filename
                    }
                })
                fs.appendFileSync("./data/detalleProductos.json", products);
                res.redirect('/products');
        },
        
        delete: function(req, res){
        db.Libro.destroy({
          where: {id: req.params.idLibro}
        })
        .then(function(result){
          let mensajeConfirm= "Se eliminó el producto correctamente"
          res.render("products", {mensajeConfirm: mensajeConfirm})
        })
          .catch(function(error){
            return res.render("products", {error: error})
          })
        }
        
        };


module.exports = adminController