# Blog Rendering backend

This is Nodejs-express project. Which is implemented to learn the fundamentals of express. In this project we make the server using express and having api

- /blogs - to fetch the all blogs
- /blogs/:id - to fetch blog with respective id
- /blogs/?name=sumil - to fetch the blog with query params
- /blogs - to create the blog
- /blogs/:id -to update the blog with id

#### send the post and update request with body in following manner

```json
{
  "author": "<author name>",
  "title": "<title of the blog>",
  "content": "<here the content of the blog> ",
  "links": [
    { "title": "<title of the link>" },
    { "title": "<title of the link>" }
  ],
  "imageUrl": "<CDN link of image>"
}
```

## folder structure

```
├── app.js
├── controllers
│   └── blogController.js
├── DATA
│   └── blog.json
├── middleware
│   └── blogPostverify.js
├── models
│   ├── BlogConstructor.js
│   └── blogModels.js
├── package.json
├── package-lock.json
├── README.md
└── router
    └── blogsRouter.js
```

## Installation

Install the dependencies and start the server.

### prerequisite

1. vscode editor
2. node js installed
3. npm installed

### steps

1. > clone this project
2. > go into to the the project folder
3. > open the terminal

4. > open vscode using following command

```sh
$ code .
```

5. > Install the dependencies

```sh
$ npm install

```

6. > run the project

```sh
$ npm run start
```

## Link to fetch blogs

[fetch api](https://blog-app-raweng.herokuapp.com/)
