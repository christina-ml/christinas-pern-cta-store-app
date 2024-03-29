## Project Links
Back-end Deployment (Heroku): [https://cl-cta-be.herokuapp.com/](https://cl-cta-be.herokuapp.com/)

Front-end Deployment (Netlify): [https://cl-cta-fe.netlify.app/](https://cl-cta-fe.netlify.app/)


## Additional Features

### Backend - Additional Features: 
- Validations for data types in `checkProducts.js`.
  - Checking for valid data types: text, integer, and boolean

- Static images hosted locally, as well as can be from a URL address.
  - To do this, I used express.static as middleware in the backend in the `app.js` file.
  - Resource used: [Serving static files in Express](https://expressjs.com/en/starter/static-files.html)

### Frontend - Additional Features: 
- Static images hosted locally, as well as can be from a URL address.
  - To add to frontend, I used a ternary that returns either `Product.js` or `ProductLocal.js`, depending on whether or not the image is locally added from my computer, or from a URL web address.

- Made helper function in `setStars.js` to show stars for each product's rating.
  - Rating must be between 0 and 5.
  - Cannot be 0 stars, because of restrictions set in `schema.sql` file in backend db.

- Using the `map()` method on the `FourOFour.js` page to show a list of words beginning with the letter "C" from an array.

- New & Edit forms: For Ratings, which must be between 1-5, set min and max values the user can enter as numbers. This is specifed in the `schema.sql` file in backend db.
- Dropdown menu options for product descriptions of New & Edit forms. In case the user needs some help writing their product description, these pre-written options are available. Selected option shows up in textarea, which can be edited by the user and then submitted into the completed form.

- Shopping Cart: When a button is clicked, that item is added to the cart.
  - If there are no items in the cart, there is a message saying "Empty Cart".

# Update April 2023
Add `SCSS` styling to frontend:
```
npm i sass
```

Add `React Icons` to frontend:
```
npm install react-icons --save
```

# PERN Final Project Template

- select `use this template`
- clone this repo

## Getting Started

### Project Structure

```
├── README.md (what you are currently reading)
├── back-end (a basic express app)
├── front-end (a basic create-react-app)
└── package.json (necessary boilerplate for heroku deployment )
```

**NOTE:** - You will have 3 `package.json` files in this project

- **Top level** - necessary for heroku deployment: you don't need to do anything with this file, it is set up for you
- **back-end** - everything to do with the express/postgres backend
- **front-end** - everything to do with the create-react-app front-end

### `back-end` Set Up and Deployment to Heroku

#### Basic App

**/back-end**

- `cd back-end`
- `npm install`
- `touch .env`

make sure you are on the same level as the `package.json` of the `back-end` directory

- `touch .env`

```
PORT=3333
PG_HOST=localhost
PG_PORT=5432
PG_DATABASE=postgres
PG_USER=postgres
PG_PASSWORD=""
```

- `npm run db:init`
- `npm run db:seed`

Test app locally. If it does not work locally, it will not work on Heroku.

Fix bugs.

When ready:

- `heroku create`
- `git add .`
- `git commit -m 'heroku deployment`
- `git push heroku main` - if this does not work, go to heroku dashboard => deployment and add the remote

2/24 - Updated command to use : `git subtree push --prefix back-end heroku main` 

ie `heroku git:remote -a <your-heroku-app-name>`

Open your heroku app. You should see the `Hello, world!` message.

#### Adding the Database on Heroku

In the heroku dashboard, go to `Overview` choose `configure add ons`

In the search bar `Quickly add add-ons` - search for `postgres` - choose `heroku postgres`

- Choose hobby dev
- Note: even though hobby dev is free, you may be required to provide a credit card
- In new view, click on `heroku Postgres / attached as DATABASE` => Settings

![](./assets/heroku-database-dash.png)

You will need to make these key value pairs in your heroku app

**IMPORTANT**
The `keys` must match perfectly with what is in your `db/dbConfig.js` file and your local `.env`

- Open a new tab/window and go to the main page of your heroku app choose settings
- Reveal Config Variables
- Add the variables

**Note:** these are false credentials and given for example only:

```
PG_HOST=ec2-55-227-246-76.compute-1.amazonaws.com
PG_PORT=5432
PG_DATABASE=d9bq2bk2s4ilde
PG_USER=bcwmtakzkmkdxr
PG_PASSWORD=afb0a7a9396af1bac763154f5649e049ce280658bef0ded7efde6
```

![](./assets/heroku-config-vars.png)

- make sure you are on the same directory level as your `package.json` of your `back-end` directory

Go back to the heroku database view => settings

- copy `Heroku CLI` (something like `heroku pg:psql postgresql-shaped-11685 --app mysterious-spires-49488`)
- paste into your terminal

- it should open a `pg shell`

Run the following:

2/24/22 - updated commands to have `back-end` in path, since we have a back-end folder:
- update the `\i ./back-end/db/prod_schema.sql` with the PG_DATABASE value from Heroku
- `\i ./back-end/db/prod_schema.sql`
  - success should say `CREATE TABLE`
- update the `\i ./back-end/db/prod_seed.sql` with the PG_DATABASE value from Herkou
- `\i ./back-end/db/prod_seed.sql`
  - success should say `INSERT 0 7`
- `\q`

This will insert the test table with the days of the week.

Later, when you have build out your app to have your schema and seed data, you will:

- edit the `db/schema.sql` file to be your own
- edit th `db/seed.sql` file to be your own
- reopen this shell and rerun these commands.

Note you should set up the

### `front-end` Set Up

**/front-end**

- `cd front-end`
- `npm instal`
- `touch .env`

Replace the URL given with your new heroku URL

**.env**

```
REACT_APP_API_URL=https://mysterious-spire-49483.herokuapp.com
```

- `npm start`

Make sure your back-end is still running. You should see an unordered list of the days of the week, coming from your back-end. If it does not work locally, it will not work when it is deployed. Keep debugging until it works

Go to netlify, choose `New site from Git`

- choose continuos deployment, GitHub.
- configure the netlify app on GitHub

Follow the prompts to add this project repo to Netlify
Once, authorized, configure to launch app from

- Base directory: `front-end`
- Build command: `npm run build`
- Publish directory: `build` (may appear as `front-end/build`)
- add the environmental variable

![](./assets/netlify-deploy-env.png)

![](./assets/netlify-deploy-settings.png)

Note: if you were starting your own create-react-app from scratch, in order to use react-router, you would need to add the file `_redirects` to `/public`

The content of the `_redirects` file should be

```
/* /index.html 200
```

[More info](https://www.netlify.com/blog/2016/07/22/deploy-react-apps-in-less-than-30-seconds/#main)
