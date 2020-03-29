This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# [Reviews App](https://mmmikolay.github.io/reviewsapp/)

A web app for my humble reviews about the things I like. 

## Site Overview
In this page, I put together my reviews about the movies, books and games that I liked. The first thing you will see when you open the [reviews app](https://mmmikolay.github.io/reviewsapp/) will be the [**Main Menu**](https://mmmikolay.github.io/reviewsapp/). Menu is in the shape of two concentric rings. Buttons on the outer links takes you to three main review pages. [**About**](https://mmmikolay.github.io/reviewsapp/about), [**Contact**](https://mmmikolay.github.io/reviewsapp/contact) and [**Thanks**](https://mmmikolay.github.io/reviewsapp/thanks) pages are aligned along the inner circle.

On each [**Reviews**](https://mmmikolay.github.io/reviewsapp/books) page, you will see a relatively short text hopefully explaining my view on the current topic (that being said, you may see just a *lorem ipsum* depending on how early in the development you've visited that particular page). Below that, you will see a set of items grouped in a horizontal list. Clicking one of those will take you to the **Details** page for that particular item. 

On the details page, if you are entering from a **_PC or laptop_**, you will see a section with a picture along with a short remark from me related to the content. Below that, also on the right side, you will see three little pictures. They are buttons which enable you to easily navigate between adjacent content without going back to the previous page. 

On the left side, below the title, there is a box in which some brief info about the producer of the item currently viewed is given. If you are viewing the page from a **_mobile device_**, there will be only one column, and producer info will not be visible at all. 

## Code Structure
### Frontend
I organized the page code in three main folders.

1. **Pages:** This folder holds the different page views in the website. Every page you visit in the website is in actuality a functional component held in a file inside the pages folder. No styling is appliad to the pages aside from configuration of the page layout.

2. **Components:** All the reusable elements in the documentation, including buttons, navigation bar or other content that is common for multiple page views in different navigation paths, are in this folder. Components are not directly visible by the user, but are always instantiated either by a page, or another component. Almost all the styling is done in components folder.

3. **Queries:** This folder holds the definitions of available GraphQL queries and mutations that a user can make from the frontend to the [server side](https://github.com/mmmikolay/reviewsapp_server). Queries and mutations are gathered under separate files for the sake of sanity and organization.

### Backend
All the review data is held in a MongoDB cluster, which is accessed by an Express GraphQL server I currently run on [Heroku](https://www.heroku.com/). The server handles the queries and mutations made from the client side. 

**_Available queries to a user are:_**

1. **Get Items:** This query is used to get Item lists in *Books*, *Games* or *Movies* pages as well as determining the next and previous items inside a *details* page. Currently, there are separate queries for accessing *Books*, *Games* and *Movies* data, although all the fields of these items are practically the same. The reason for this is to keep the data in separate tables. 
2. **Get Creator:** This query is used for getting the producer of a content in the details page of the viewed item.

**_Available mutations:_**
**Item Creation:**
1. **Add Item:** This mutation is used for adding an item to a reviews list. In It's present state, it is a simple form all the fields of which should be filled manually with either review data, or links to the image fields. 
2. **Add Creator:** This is for adding a producer. As every item must have a producer, and a producer without a content is pretty meaningless, only access to this field is from the *Add Item* page.

**Authentication**
1. **Log In:** I use a cookie-based JSON Web Token authentication system for user login. This mutation currently works only for me. However, I plan to extend it to enable a general registration system in the future.
2. **Sign Up:** Sign Up is used for adding a new user to the system. Although being fully functional, it is currently not in use until I feel satisfied with the add-item interface. This includes properly styling the forms as well as adding a drag & drop system to easily add image data.

## TODOs

1. Find a way to merge the *Books*, *Games* and *Movies* queries into a single one.
2. Files in the *Lists* folder have lots of shared code, make it a single list component by passing the query logic from outside.
3. Make a drag & drop system for adding items.
4. Make a public user login and signup system.