
Versions
  - LARAVEL v10.0.3  plugin v0.7.4
  - Composer version 2.5.4 2023-02-15 13:10:06
  - Node Version v19.6.1
  - PHP 8.2.3 (cli) 
  - mysql  Ver 8.0.32 

1.) Clone repository

    git clone https://github.com/zalven-official/Task-TK

2.) Cd into the directory 

3.) install composer dependencies

    composer install
    
4.) Install npm dependencies
    
    npm install
5.) Open mysql service and apache2 server 

     sudo service mysql start
     sudo service apache2 restart
    
6.) Create a copy of your .env file
    .env files are not generally committed to source control for security reasons. But there is a .env.example which is a template of the .env file that the project expects us to have. So we will make a copy of the .env.example file and create a .env file that we can start to fill out to do things like database configuration in the next few steps.
  
    cp .env.example .env
    
This will create a copy of the .env.example file in your project and name the copy simply .env.

7.)  Generate an app encryption key
    
    php artisan key:generate
   
8.) Create an empty database for our application
    Create an empty database for your project using the database tools you prefer (My favorite is SequelPro for mac). In our example we created a database called “test”. Just create an empty database here, the exact steps will depend on your system setup.

9.) In the .env file, add database information to allow Laravel to connect to the database
We will want to allow Laravel to connect to the database that you just created in the previous step. To do this, we must add the connection credentials in the .env file and Laravel will handle the connection from there.

In the .env file fill in the DB_HOST, DB_PORT, DB_DATABASE, DB_USERNAME, and DB_PASSWORD options to match the credentials of the database you just created. This will allow us to run migrations and seed the database in the next step.

10.) Migrate the database

    php artisan migrate
    
11.) [Optional]: Seed the database

    php artisan db:seed

12.) Run the backend 
    
    php artisan serve

13.) Open another Terminal for front-end. This will load js files , html files, and css files. Keep in mind that scss errors are normal 

    npm run dev