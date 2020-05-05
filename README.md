This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Code library

## Getting Started

In order to run the project you'll need [node](https://nodejs.org/en/) installed on your machine and a package manager of your choice ([npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)).
Make sure to install the depencies of the application before starting the development server.

### Installing dependenies

```
yarn install
```

### Running the development server locally

```
yarn run
```

Access the server on [http://localhost:3000](http://localhost:3000) to view it in the browser.

###

### Building the application for deployment

```
yarn build
```

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

# Folder Structure Conventions

The application revolves around the Redux store, which is the central place where all application logic is kept.

## Project directory layout

    .
    ├── src                     # Source files
        ├── api                 # Api utility files
        ├── components          # Presentational components
        ├── hooks               # Custom hooks
        ├── pages               # Stateful views
        ├── store               # Redux store
        ├── routes.js           # Mapping of page components to routes
        └── App.js              # Main app component

`api` - Utility functions that make http calls to the CODE library backend
`components` - Presentational components which keep as little local state as possible and do not have direct access to the global state.
`hooks` - A collection of [hook functions](https://reactjs.org/docs/hooks-intro.html) which have read and write access to the global state (Redux store).
`pages` - Each page is composed of presentational components and corresponds to a route. Pages have access to the global state via `hooks` and are thus intermediaries between components and global state;
`store` - Central storage of the whole application; follows the [ducks pattern](https://github.com/erikras/ducks-modular-redux)

## Built With

-   [Create React App](https://create-react-app.dev/docs/getting-started/) - Officially supported way to create single-page React applications.
    It offers a modern build setup with no configuration.
-   [Node](https://nodejs.org/en/) - A JavaScript runtime built on Chrome's V8 JavaScript engine
-   [Yarn](https://yarnpkg.com/) - Our package manager of choice
-   [React](https://reactjs.org/) - A JavaScript library for building user interfaces
-   [Redux](https://redux.js.org/) - A Predictable State Container for JS Apps
-   [ReduxSaga](https://redux-saga.js.org/) - A library that aims to make application side effects (i.e. asynchronous things like data fetching and impure things like accessing the browser cache) easier to manage, more efficient to execute, easy to test, and better at handling failures.
-   [ChakraUI](https://chakra-ui.com/) - A simple, modular and accessible React components library

## Authors

-   **Denis Ismail** - [sanevillain](https://github.com/sanevillain)
-   **Wail Abu Ahmad** - [Wailla](https://github.com/Wailaa)
