This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# [Reviews App](https://mmmikolay.github.io/reviewsapp/)

A web app for my humble reviews about the things I like.

## Site Overview
The page is divided into two main parts, which themselves are divided into three sub-sections:

### Reviews
Reviews make the main content of the website, and are aligned along the outer one of the two main menu circles. 


## Personal Info
This is the inner part of the

## Code Structure
### Frontend
You can visit my Reviews App in [Github Pages](https://mmmikolay.github.io/reviewsapp/).
The code is organized in three main folders:
#### Pages
Pages folder holds the different page views in the website. Every page you visit in the website is in actuality a functional component held in a file inside the pages folder. No styling is appliad to the pages aside from configuration of the page layout.

#### Components
All the reusable elements in the documentation, including buttons, navigation bar or other content that is common for multiple page views in different navigation paths, are in this folder.
Components are not directly visible by the user, but are always instantiated either by a page, or another component. Almost all the styling is done in components folder.

#### Queries
This folder holds the definitions of available GraphQL queries and mutations that a user can make from the frontend to the [server](). Queries and mutations are gathered under separate files to keep the code more organized.

### Backend
All the review data is hold in a MongoDB cluster, which is accessed by an Express GraphQL server I run on [Heroku](https://www.heroku.com/).
#### Server
GraphQL server handles the queries and mutations made from the client side. 

Awailable Queries are:
##### Get Items
This query is used to get Book, Movie and Game lists in the respective pages as well as determining the next and previous items in the details page.
##### Get Creator
This query is used for getting the producer of a certain content in the details page of a certain item.

Available mutations:
#### Add Item:
This mutation is used to add an item to a reviews list.
#### Add Creator:
This is for adding a producer. An item must always have a creator.
#### Log In:
I use a cookie-based JSON Web Token authentication system for user login. This mutation currently works only for me. However, I plan to extend it to enable a general registration system in the future.
#### Sign Up:
Sign Up is used for adding a new user to the system. Although being fully functional, it is currently not in use until I feel satisfied with the add-item interface.

## TODOs
