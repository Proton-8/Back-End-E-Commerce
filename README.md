# Back-End-E-Commerce (HW-13)
<h3>-by Ron Shutter </h3>
<br>

 ## What's inside 
 <li> The task of this project was to build the back end for an e-commerce site by modifying starter code. This included configuring a working Express.js API to use Sequelize to interact with a MySQL database.</li>

<li> Several demo GIFs are given below but a link to a walkthrough video that demonstrates the functionality and all of the acceptance criteria being met was also submitted. </li>

* `For security reason the link was given in the UW homework portal only.`
<br>
<br> 
## Acceptance Criteria

```
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
    THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
    THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
    THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
    THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
    THEN I am able to successfully create, update, and delete data in my database
```

  ###   Database Models Details
The database contains the following four models, including the requirements listed for each model:
```
* `Category`

  * `id`

    * Integer.
  
    * Doesn't allow null values.
  
    * Set as primary key.
  
    * Uses auto increment.

  * `category_name`
  
    * String.
  
    * Doesn't allow null values.

* `Product`

  * `id`
  
    * Integer.
  
    * Doesn't allow null values.
  
    * Set as primary key.
  
    * Uses auto increment.

  * `product_name`
  
    * String.
  
    * Doesn't allow null values.

  * `price`
  
    * Decimal.
  
    * Doesn't allow null values.
  
    * Validates that the value is a decimal.

  * `stock`
  
    * Integer.
  
    * Doesn't allow null values.
  
    * Set a default value of `10`.
  
    * Validates that the value is numeric.

  * `category_id`
  
    * Integer.
  
    * References the `Category` model's `id`.

* `Tag`

  * `id`
  
    * Integer.
  
    * Doesn't allow null values.
  
    * Set as primary key.
  
    * Uses auto increment.

  * `tag_name`
  
    * String.

* `ProductTag`

  * `id`

    * Integer.

    * Doesn't allow null values.

    * Set as primary key.

    * Uses auto increment.

  * `product_id`

    * Integer.

    * References the `Product` model's `id`.

  * `tag_id`

    * Integer.

    * References the `Tag` model's `id`.
```

<br>

###  License Used

* Uses MIT License

<br>

## Applications Used

* Used the [MySQL2](https://www.npmjs.com/package/mysql2) and [Sequelize](https://www.npmjs.com/package/sequelize) packages to connect the Express.js API to a MySQL database and the [dotenv](https://www.npmjs.com/package/dotenv) package to store sensitive environment variables.




<br>
<h1> EXAMPLES of running code
<h2>  Database setup Demo : </h2>

<img src="Develop\Gifs\Database Setup.gif " alt="Main database setup">
</p>
<p>
<h2>  Seeding the Database Demo : </h2>
<img src="Develop\Gifs\Seed Data.gif " alt="Seeding the database demo">
</p>
<p>
<h2>  Startup and GET ALL Demo : </h2>
<img src="Develop\Gifs\Start-Get All.gif " alt="Startup and all three GET All DEMO GIF">
</p>
<p>
<h2>Get Singles Demo</h2>
<img src="Develop\Gifs\Get One.gif" alt=" DEMO screenshot">
</p>


<br>

### My Contact Info:

Email: RonaShutter@gmail.com<br>
GitHub: https://github.com/Proton-8
