# JavaScript2 - Course Assignment
<p align="center">
  <img src="https://user-images.githubusercontent.com/71286689/171594892-29a12dd8-3d92-40ff-8b28-5a273a495ef6.png" alt="JS2 course assignment homepage" />
</p>

## Description
Use the given Strapi API or build your own API using any technology but it MUST BE publicly hosted. (Do not submit your API code if you create your own. If you do build and host your own API, the content type it serves must include at least 3 properties)<br/>
Choosing appropriate variable and function names will form part of your assessment, as will proper and consistent formatting of your code.

### Project requirements
#### ***Home page***
Make a GET request to fetch a list of resources from your API.<br/>
Create HTML for each item and display at least 3 properties for each.<br/>
Each item should also display a button or icon. Clicking on this button should toggle the item in and out of an array stored in localStorage.<br/>
There should be a text input on this page that filters the array of results on one of the properties.

#### ***Favourites page***
This page should fetch the array of items stored in localStorage and display them or display a message that there are no items.<br/>
There should be a “Clear all” button that clears localStorage (or just a specific key in localStorage) and reloads the display. Don’t reload the page, just redraw the HTML.

### Level 2 (Optional)
Add a login form to your frontend that will allow a logged in admin user to perform the following tasks:
- Adding new resources to the API
- Updating resources through an edit form
- Deleting resources

#### ***Login details:***
Username: admin@admin.com<br/>
Password: Pass1234

## Built With
![Strapi](https://img.shields.io/badge/-Strapi-white?style=for-the-badge&logo=Strapi&logoColor=4e26e0)
![HTML5](https://img.shields.io/badge/-HTML5-white?style=for-the-badge&logo=html5)
![CSS3](https://img.shields.io/badge/-CSS3-white?style=for-the-badge&logo=css3&logoColor=264de4)
![JavaScript](https://img.shields.io/badge/-JavaScript-white?style=for-the-badge&logo=javascript)

## Getting Started

### Installing

1. Clone the repo:<br/>
(Note that you will need to replace uppercase letters when cloning in order for React to run)

```bash
git clone git@github.com:InfiAest/JavaScript2-course-assignment.git
```

2. Install the dependencies:

```
npm install
```

### Running

To start the Strapi project:
```
npm run develop
```

## Contact

[![Linkedin Badge](https://img.shields.io/badge/-CharlotteLucas-white?style=for-the-badge&logo=Linkedin&logoColor=0077b5&link=https://www.linkedin.com/in/charlotte-lucas-31544b32/)](https://www.linkedin.com/in/charlotte-lucas-31544b32/)
[![Instagram Badge](https://img.shields.io/badge/-Infiaest-white?style=for-the-badge&logo=instagram&link=https://instagram.com/infiaest/)](https://instagram.com/infiaest)
