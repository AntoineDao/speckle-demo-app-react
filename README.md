# Getting Started with Speckle Demo React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/en/) (version 14 or higher)
- [Yarn](https://yarnpkg.com/) (version 1.22 or higher)

### Installation

To get started, clone this repository and install the dependencies:

```bash
git clone https://github.com/antoinedao/speckle-demo-app-react.git
cd speckle-demo-app-react
yarn install
```

### Configuration

The application requires a Speckle Server to be running and a [Speckle Application](https://speckle.guide/dev/apps.html) to be configured on the server. The application will use the `http://localhost:3000` URL by default, so make sure to configure the application with this URL.

This template uses the main [Speckle Server](https://speckle.xyz) by default. To use a different server, you can change the `REACT_APP_SERVER_URL` environment variable in the `.env` file.

This template also comes pre-packages with the Application id and secret for the Speckle React App Demo owned by Antoine Dao. You can use it to test the code out before creating you own Application. To use your own Application, you can change the `REACT_APP_APP_ID` and `REACT_APP_APP_SECRET` environment variables in the `.env` file.

## Application Structure

The application is structured as follows:

- `src/components` - contains the React UI components. The subfolders follow the [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) methodology:
  - `src/components/atoms` - contains the smallest components, such as buttons, inputs, etc.
  - `src/components/molecules` - contains components that are composed of atoms
  - `src/components/organisms` - contains components that are composed of molecules and/or atoms
  - `src/components/templates` - contains components that are composed of organisms, molecules and/or atoms
  - `src/components/pages` - contains components that are composed of templates, organisms, molecules and/or atoms
- `src/context` - contains React Context objects used to share authentication, user and graphql clients across the application
- `src/hooks` - contains an example React Hook that to featch a list of streams from the Speckle Server
- `src/App.tsx` - the main application component


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
