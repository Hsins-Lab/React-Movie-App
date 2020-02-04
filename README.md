<div align="right">
  <img src="https://img.shields.io/badge/Completion-100%25-blue.svg" />
  <a href="https://github.com/Hsins/udemy_React-Movie-App/blob/master/LICENSE" alt="License">
    <img src="https://img.shields.io/github/license/Hsins/udemy_React-Movie-App.svg" />
  </a>
</div>

# Udemy Project: Movie App

This is a hands-on project from the Udemy course - [Beginner React. Create a Movie Web App](https://www.udemy.com/course/learn-react-the-fun-way/) by Thomas Weibenfalk.

# Demo

<div align="center">
  <img src="demo/demo.gif" />
</div>

You can see a complete working example [here](https://hsins-til.github.io/udemy_React-Movie-App/). Or you can run the demo on your local machine, please follow the instructions in [Getting Started](#getting-started).

# Features

- A Movie App from scratch based on The Movie DB API.
- Focus more on class based components.
- Store data with browser's [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).

# Technologies

- [React](https://reactjs.org/)
- [Create React App](https://create-react-app.dev/docs/getting-started/)

Check [`package.json`](./package.json) file for more information.

# Getting Started

Follow the instructions below to set up the environment and run this project on your local machine.

1. Clone this repository.

```bash
# Clone repository
$ git clone https://github.com/Hsins-TIL/udemy_React-Movie-App.git
```

2. Install dependencies via NPM or Yarn

```bash
# Install dependencies via npm
$ npm install

# Install dependencies via yarn
$ yarn install
```

3. Run the server.

```bash
# Build with webpack
$ npm run build

# Run server
$ npm run server
```

Deploy to GitHub Page with `gh-pages` package. Check [Deploment](https://create-react-app.dev/docs/deployment/#github-pages) for more information. To deal with the hostname problem, there are two more things to do:

- Change `<Link to='/...' >` to `<Link to='/<Repo Name>/...' >`
- Change `<Route path='/...'` to `<Route exact path='/<Repo Name>/...'`

# More Information

All the notes I took in [Markdown](https://daringfireball.net/projects/markdown/syntax) (.md) format. You can find them in my [Udemy-Notes](https://github.com/Hsins/Udemy-Notes) repository.
# License

Licensed under the MIT License, Copyright © 2019-present Hsins.
