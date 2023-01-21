# 🗓 Event Calendar

Full stack app that renders data from a JSON file in a calendar-alike component.

# Cloning the repo and running it locally

In order to run the project locally, run the following command to install the node modules on both backend and frontend files:

1. /backend

```
npm install
```

2. /frontend

```
npm install
```

# 🔮 Backend

The backend was built using NodeJS and ExpressJS. 

- listens on port 3000
- sends data from the sportsData.json file

### Running the server

In order to run the server:

1. Navigate to the backend folder:

```
cd backend
```

2. Run the following command:

```
node server.js
```

👏 Server.js is now running on port 3000!

# 🎨 Frontend

The frontend was built using Vue 3, Vuex and vue-router.

### Running the frontend

In order to run the frontend, run the following command:

```
npm run serve
```

### 📐 Code Design and Architecture

The project was built under the following architecture:

```javascript
event-calendar/
├── backend/
│   └── server.js
|   └── sportData.json
└── frontend/
    ├── src/
    │   ├── CalendarComponent.vue
    │   ├── EventForm.vue
    │   ├── ui/
    │   │   └── Heading.vue
    │   ├── store/
    │   │   └── index.js
    │   ├── views/
    │   │   ├── HomeView.vue
    │   │   ├── AboutView.vue
    │   │   └── EventView.vue
    │   ├── router/
    │   │   └── index.js
    │   ├── App.vue
    │   └── main.js

```

🏛 The architecture described in the previous code snippet follows best practices and good design principles in the following ways:

- It separates the backend and frontend code into distinct folders, making it easy to understand the different responsibilities of the codebase and navigate it.
- The frontend code is further organized by grouping related components, views and functionality such as `CalendarComponent.vue`, `EventForm.vue` and `Heading.vue` into the same folder. This makes it easy to locate and understand the different parts of the application.
- The `ui` folder contains reusable UI components, which promotes code reusability and a consistent design across the application.
- The store and router folders contain the Vuex `store` and Vue `Router` configuration, respectively. This makes it easy to understand how the state management and routing works in the application.
- The `App.vue` is the root Vue component, this is the entry point for the Vue application and makes it easy to understand the structure of the application
- The `main.js` file is the entry point for the application, this makes it easy to understand the overall flow of the application.

This architecture also allows for easy scalability and maintenance of the codebase as it separates the different concerns of the application and follows the best practices for organization, reusability and maintainability.

#### Frontend

##### `CalendarComponent.vue`

This is the component that displays a table of events in a calendar format. 

The table uses the `v-for` directive to loop through an array of `event` objects, and each row has a `@click` event that calls a `function` to show the details of the selected event. The selected event is stored in the component's data and displayed in a separate section using the `v-if` directive. 

The same process applies for a `newEvent`, with a separate section displaying the details of the `newEvent`, but on the same `card` as the `events`.

The code also uses Vuex's `mapState` to map `state` properties to local component properties.

##### `EventForm.vue`

This is the component that renders a form that allows users to add new events to the calendar table in `CalendarComponent.vue`. 

The form uses `v-model` directives to bind the input fields to the `newEvent` object in the component's `data`. The form also has a `submit` event that calls the `onSubmit` method when the form is submitted. 

The `onSubmit` method dispatches a Vuex `action` to add the `newEvent` to the `store` and then clears the `newEvent` object. 

The form also checks if the input fields are not empty, and if the fields are not empty, it dispatches the `addEvent` action, which adds a new event to `newEvent`.

##### `index.js` (store)

The store of the project has the following properties and has been configured using the Vuex library bootstrapped uing the `vue-cli` on the `vue create frontend`:

- `state`: which contains `events`, `newEvent`, and `selectedEvent` properties.
- `getters`: which exposes the `events` and `newEvent` properties from the `state`.
- `mutations`: which are responsible for changing the `state` in a predictable way. The `SET_EVENTS` mutation sets the `events` `state` property, the `ADD_EVENT` mutation pushes the `newEvent` to the `state`, and the `CLEAR_SELECTED_EVENT` mutation sets the `selectedEvent` property to `null`.
- `actions`: which are responsible for handling the logic and `commit` mutations. The `fetchEvents` action makes an `HTTP` request to the server to fetch the `events` and then commits the `SET_EVENTS` mutation. The `addEvent` action commits the `ADD_EVENT` mutation and the `clearSelectedEvent` action commits the `CLEAR_SELECTED_EVENT` mutation.

The store uses the `axios` library to make an `HTTP` request to a `localhost` server running on `port 3000` to fetch events data and it's listening on the `"/events"` endpoint. Then the data is committed to the `state`.

#### 🔩 Backend

##### `server.js`
    
The server uses the `helmet()` middleware to add security-related `HTTP` headers to the response, helping protect the server from various security vulnerabilities.

The server reads the `sportData.json` file only once, improving the performance of the server by not having to read the file multiple times.

The server uses an `environment variable` to set the `port` number, allowing for easy configuration of the server without having to hardcode the port number.

The server includes a global `error handling middleware` that will handle any unexpected errors in the routes, allowing for the server to continue running even if a route throws an error and also providing a useful message to the client.

The server uses an `express()` Router to handle the `/events` route and make the code more modular, making the code easier to read and maintain.

The frontend fetches the events data from `server.js` to display it in the table of events in `CalendarComponent.vue`.
