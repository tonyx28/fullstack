# Frontend

As a single-page application, Tripsplit utilizes the React.js framework and follows the Redux architecture to deliver the frontend.

## npm

Node package manager (npm) is used to install all of the frontend dependencies.

A post-install script is configured so that webpack bundles all of the frontend files after the deployment to Heroku is complete.

## Webpack

Webpack conveniently bundles all of the frontend components and Redux parts. The bundled file is located in `/app/assets/javascripts` and included in the main `application.js` file.

## React & Redux

All of the React components, Redux action creators, API utilities, dispatcher, and stores are located in the [frontend](../frontend) directory.

## jQuery

jQuery is only used to make AJAX requests with the Rails server.


## Open Source React Libraries

Other frontend dependencies are:

- React DOM
- React Router
- React History to manipulating the browser history
- Babel for transpiling JSX into JavaScript.
