# RESTFul API - ShortUrl

This is a OpenSource project to learn NodeJS, MongoDB and All ecosystem arround this tech...
This project is host on heroku.

![Heroku](https://heroku-badge.herokuapp.com/?app=appshorturl)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Challange VanHack

This project contains all the information to complete my challenge at:
<a href="https://gist.github.com/FylmTM/e3c4e5f337a176e94d6dd51703068925" target="_blank">
Vanhack Challenge</a>

## Check here

<a href="https://appshorturl.herokuapp.com/" target="_blank">Short URL - ShortURL</a>

# Getting Started

yes, I'm using `yarn` :)

## Install yarn:

[yarn](https://yarnpkg.com/) is a fast, reliable, and secure dependency management tool. You can now use yarn to install reason and manage its dependencies.

To install Yarn, it is best to [consult the official documentation](https://yarnpkg.com/en/docs/install) for your particular platform.

## Installing:

```sh
git clone https://github.com/shpsyte/urlshortener
cd urlshortener
yarn cache clean
yarn
yarn dev
```

> yarn dev using nodemon to rebuild on change js files.. :)

## Configue Database

Create a .ENV file with:

```cmd
NODE_ENV=development,
DATABASE_HOST= mongodb://localhost:27017/urlshortener
```

Change your connection string!
I'm using Docker, so you need create a Docker to use MongoDB (Or if you preffer use MongoAtlas!)

So, to run MondoDb on Docker!

```cmd
docker run --name mongonode -p 27017:27017 -d -t mongo
```

## Built With

- [x] [nodejs](https://nodejs.org/en/) - NodeJS
- [x] [expressjs](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for NodeJS
- [x] [mongoDb](https://www.mongodb.com/) - MongoDB Atlas Deploy a fully managed cloud database in minutes
- [x] [Docker](https://www.docker.com/) - Future proof your Windows apps and drive continuous innovation
- [x] [ES6 - VanilaJS](http://es6-features.org/) - Pure Javascript

Ps. Use MondoDB to scale!!

To developer this simple APP, I use Scrum. hahaha
Check board here: (Now, all task is DONE. )

https://trello.com/b/K0deONn3/urlshortener

# How to use API

There is a three API to use

//appshorturl.herokuapp.com/short

Short the URL

//appshorturl.herokuapp.com/show/<hey_to_find>

Get URL from short Key

//appshorturl.herokuapp.com/data/<hey_to_find>

Get Statists from short Key

1. https://appshorturl.herokuapp.com/short

   You need send json body:

```json
{
  "completeUrl": "URL_TO_ENCODE"
}
```

The return will be: <exemple>

```json
{
  "qtUse": 0,
  "_id": "5c44d6121ed99171a756058e",
  "completeUrl": "http://www.vanhack.com/",
  "keyOfUrl": "50UnUbM",
  "createAt": "2019-01-20T20:12:02.849Z",
  "__v": 0
}
```

2. https://appshorturl.herokuapp.com/show
   Here you can send with parameters or json body

With json body:

```json
{
  "key": "keytofind"
}
```

With parameter:
https://appshorturl.herokuapp.com/show/<keytoFind>

The return will be: <exemple>

```json
{
  "qtUse": 2,
  "_id": "5c44cd5497491f63f663cece",
  "completeUrl": "http://uol",
  "keyOfUrl": "GNCcpHw",
  "createAt": "2019-01-20T19:34:44.640Z",
  "__v": 0
}
```

3. https://appshorturl.herokuapp.com/Data
   Here you can send with parameters or json body

With json body:

```json
{
  "key": "keytofind"
}
```

With parameter:
https://appshorturl.herokuapp.com/data/<keytoFind>

The return will be a collection OF: <exemple>

```json
[
  {
    "_id": "5c44ca7230afc960afc77152",
    "keyOfUrl": "yHktMkL",
    "fromIp": "::ffff:127.0.0.1",
    "fromCity": "Curitiba",
    "createAt": "2019-01-20T19:22:26.419Z",
    "__v": 0
  },
  {
    "_id": "5c44ca7530afc960afc77153",
    "keyOfUrl": "yHktMkL",
    "fromIp": "::ffff:127.0.0.1",
    "fromCity": "Curitiba",
    "createAt": "2019-01-20T19:22:29.818Z",
    "__v": 0
  },
  {
    "_id": "5c44ca7630afc960afc77154",
    "keyOfUrl": "yHktMkL",
    "fromIp": "::ffff:127.0.0.1",
    "fromCity": "Curitiba",
    "createAt": "2019-01-20T19:22:30.426Z",
    "__v": 0
  },
  {
    "_id": "5c44caea59083d616aa9cbc3",
    "keyOfUrl": "yHktMkL",
    "fromIp": "::ffff:127.0.0.1",
    "fromCity": "localhost",
    "fromCountry": "Brazil",
    "createAt": "2019-01-20T19:24:26.747Z",
    "__v": 0
  }
]
```

# Learning More

For more information, contact me, out the joseluiz.net. It should answer any questions you have not covered by the versions documentation.

Send me message at:
joseluiz@joseluiz.net

Built and maintained by <a href="http://joseluiz.net">José Luiz</a>
