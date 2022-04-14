const mysql = require('mysql2');
const bcrypt = require('bcryptjs')


const database = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

const promisePool = database.promise();

module.exports = class Database {

  connectToDatabase() {
    database.getConnection((err) => {

      if (err) {
        console.log(err)
        return;
      }

      console.log('connecnted to database')
    });
  }

  //Authenctication

  async register(req) {

    try {
      const { name, surname, age, email, password } = req.body;

      const user = await promisePool.query('SELECT * FROM `users` WHERE `email` = ?', [email]);

      if (user[0].length) {
        return {
          message: "User already exist",
          success: false,
          statusCode: 400,
          validationError: {
            email: "The email is already used"
          }
        }
      }

      if (password.length < 4) {
        return {
          message: "",
          success: false,
          statusCode: 400,
          data: {},
          validationError: [
            {
              field: "Password",
              message: "Minimum 4 characters"
            }
          ]
        }
      }
      if (name.length===0) {
        return {
          message: "",
          success: false,
          statusCode: 400,
          data: {},
          validationError: [
            {
              field: "Name",
              message: "field is required "
            }
          ]
        }
      }
      if (surname.length===0) {
        return {
          message: "",
          success: false,
          statusCode: 400,
          data: {},
          validationError: [
            {
              field: "Surname",
              message: "field is required"
            }
          ]
        }
      }
      if (email.length===0) {
        return {
          message: "",
          success: false,
          statusCode: 400,
          data: {},
          validationError: [
            {
              field: "Email",
              message: "field is required"
            }
          ]
        }
      }

      // hashed the password
      const passwordSalt = bcrypt.genSaltSync();
      const hashedPassword = bcrypt.hashSync(password, passwordSalt);

      await promisePool.query(`INSERT INTO users (name, surname, age, email, password, isAdmin) VALUES ('${name}', '${surname}', '${age}', '${email}', '${hashedPassword}', 0)`);

      return {
        message: "User successfully created",
        success: true,
        statusCode: 200,
        data: {},

      }
    } catch (error) {
      return {
        message: "Something is invalid",
        success: false,
        statusCode: 500,
        data: {}
      }
    }

  }

  async login(req) {
    const { email, password } = req.body;

    const reponse = await promisePool.query('SELECT * FROM `users` WHERE `email` = ?', [email]);
    const user = reponse[0][0];

    if (!user) {
      return {
        message: "Wrong username and/or password",
        success: false,
        statusCode: 400,
        data: {},
        validationError: [
          {
            message: "Wrong Username or Password "
          }
        ]
      }
    }
    const isCorrectPassword = await bcrypt.compare(password, user.password);

    if (user && isCorrectPassword) {

      return {
        message: "Loged in",
        statusCode: 200,
        status: true,
        data: {
          user: {
            id: user.id,
            name: user.name,
            surname: user.surname,
            age: user.age,
            email: user.email,
            isAdmin: user.isAdmin
          }
        }
      }
    }

    return {
      message: 'Wrong username and/or password',
      success: false,
      statusCode: 400,
      data: {}
    }

  }

  async changePassword(req) {
    const { email } = req.body;
    try {
      const reponse = await promisePool.query('SELECT id,email FROM `users` WHERE `email` = ?', [email]);
      const user = reponse[0][0];
      console.log(user);
      if (!user.length) {
        return {
          message: "User exist",
          success: true,
          statusCode: 200,
          data: { user },
        }
      }

    } catch (error) {
      return {
        error,
        success: false,
        statusCode: 400,
        data: { error },
        validationError: [
          {
            message: "User doesn't exist"
          }
        ]

      }
    }
  }
  async passwordUpdate(req) {
    const { id, password } = req.body;
    if (password.length < 4) {
      return {
        message: "",
        success: false,
        statusCode: 400,
        data: {},
        validationError: [
          {
            field: "Password",
            message: "Minimum 4 characters"
          }
        ]
      }
    }
     const passwordSalt = bcrypt.genSaltSync();
    const hashedPassword = bcrypt.hashSync(password, passwordSalt);
      try {
      await promisePool.query(`UPDATE users SET password = '${hashedPassword}' WHERE id =${id}`);
      return {
        message: "Password succsefully updated",
        success: true,
        statusCode: 200,
        data: { message: "updated" },

      }

    } catch (error) {
      console.log(error);
    }


  }

//product

  async createProduct(req) {

    try {

      if (req.file) {
        const { product, description } = req.body;

        await promisePool.query(`INSERT INTO products (product, description, img) VALUES ('${product}', '${description}', '${req.file.filename}')`);

        return {
          message: "Product successfully created",
          success: true,
          statusCode: 201,
          data: {}
        }
      }

      return {
        statusCode: 400,
        success: false,
        validationError: {
          image: "Image Field is required"
        }
      }


    } catch (error) {
      return {
        success: false,
        statusCode: 500,
        data: error,
        message: "Something is invalid"
      }
    }

  }

  async getProducts() {

    try {
      const reponse = await promisePool.query('SELECT * FROM `products` ORDER BY prodid desc');
      const products = reponse[0];
      return {
        status: true,
        statusCode: 200,
        data: { products }
      }
    } catch (error) {
      return {
        success: false,
        statusCode: 500,
        data: error,
        message: "Something is invalid"
      }
    }
  }

  async productDetails(req) {
    const { id } = req.params;

    try {
      const productsSQl = await promisePool.query(`SELECT * FROM products WHERE prodid=${id}`);
      const reviews = await promisePool.query(`SELECT * FROM users INNER JOIN reviews ON users.id=reviews.user_id ORDER BY reviews.id DESC`);
      const stars = await promisePool.query(`SELECT review FROM reviews WHERE product_id=${id}`)
      let avgStars = stars[0]

      const product = productsSQl[0][0];
      product.reviews = reviews[0].filter(review => product.prodid === review.product_id);
      let total = 0;
      for (let i = 0; i < avgStars.length; i++) {
        total += Number(Object.values(avgStars[i]));
      }
      let avg = total / avgStars.length;

      return {
        status: true,
        statusCode: 200,
        data: {
          product,
          avg
        }
      }
    } catch (error) {
      return {
        error,
        success: false,
        statusCode: 500,
        data: error,
        message: "Something is invalid"
      }
    }
  }
  
  async getFilteredProducts(req) {
    const { search } = req.params;
    console.log(req.params,"",search);
    
    try {
      const productsSQl = await promisePool.query('SELECT * FROM `products` WHERE LOWER(`product`) LIKE ?', ['%' + search + '%']);
      
      const filteredProducts = productsSQl[0];
      console.log(filteredProducts);
      return {
        status: true,
        statusCode: 200,
        data: {
          filteredProducts,
        
        }
      }
    } catch (error) {
      return {
        error,
        success: false,
        statusCode: 500,
        data: error,
        message: "Something is invalid"
      }
    }
  }
//user
  async getUsers(req) {

    try {
      const reponse = await promisePool.query('SELECT * FROM `users` ORDER BY id desc');
      const users = reponse[0];

      return {
        status: true,
        statusCode: 200,
        data: { users }
      }

    } catch (error) {
      return {
        success: false,
        statusCode: 500,
        data: error,
        message: "Something is invalid"
      }
    }
  }
  async getFilteredUsers(req) {
    const { search } = req.params;
    console.log(req.params,"",search);
    
    try {
      const usersSQl = await promisePool.query('SELECT * FROM `users` WHERE LOWER(`name`) LIKE ?', ['%' + search + '%']);
      
      const filteredUser = usersSQl[0];
      console.log(filteredUser);
      return {
        status: true,
        statusCode: 200,
        data: {
          filteredUser,
        
        }
      }
    } catch (error) {
      return {
        error,
        success: false,
        statusCode: 500,
        data: error,
        message: "Something is invalid"
      }
    }
  }
  // review
  async reviews(req) {
    try {
      const { user_id, id, review, comment } = req.body;

      await promisePool.query(`INSERT INTO reviews (user_id,product_id,review, comment) VALUES ('${user_id}','${id}','${review}','${comment}')`);

      return {
        message: "",
        success: true,
        statusCode: 200,
        data: {},
      }

    } catch (error) {
      return {
        success: false,
        statusCode: 500,
        data: error,
        message: "Something is invalid"
      }
    }

  }
  async getReview(req) {

    try {
      const reponse = await promisePool.query('SELECT * FROM `reviews` ORDER BY id desc');
      const reviews = reponse[0];

      return {
        status: true,
        statusCode: 200,
        data: { reviews }
      }

    } catch (error) {
      return {
        success: false,
        statusCode: 500,
        data: error,
        message: "Something is invalid"
      }
    }
  }


}