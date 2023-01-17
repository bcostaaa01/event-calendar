# event-calendar
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

# Backend

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

# Frontend

The frontend was built using Vue 3, Vuex and vue-router.

### Running the frontend

In order to run the frontend, run the following command:

```
npm run serve
```

### Code Design explanation

This is a Vue.js component that renders a table of events. Each event has a date, a home team, an away team, and a time. The component also includes a button that can be used to toggle the visibility of a form that can be used to add new events to the table.

The `template` of the component starts by rendering a table, with a header that includes a button with the "+" label. The button has a `@click` event listener, which triggers the toggle of the `showForm` data property.

The table's body is populated by using a `v-for` directive to loop through an array of events, and for each event, it renders a table row. Each column of the row contains data properties of the event, such as the date, home team name, away team name and time, which are displayed using string interpolation. The row also has a `@click` event that triggers the `showDetails` method, passing the event as an argument.

The component also includes a `div` element that is rendered if the `showForm` data property is true. This `div` contains a form that allows the user to add new events. The form has several input fields for date, home team, away team and time, each of which is bound to a corresponding property of the `newEvent` data object. The form also has a submit button that, when clicked, triggers the `addEvent` method.

The `addEvent` method creates a new object that represents the event, populates it with data from the form's input fields, and pushes it to the events array. It then resets the `newEvent` data object and sets the `showForm` data property to `false`, which hides the form.

The component also includes another div element that is rendered if the selectedEvent data property is not null. This div displays detailed information of the selected event, such as the home team name, away team name, date, time, and result.

The component uses the mapState utility from the Vuex library to map the events state to the component's computed properties.

The component also includes computed properties that give additional information about the selected event. The `yellowCards` computed property returns the number of yellow cards shown in the selected event. If no event is selected or if the event does not have the yellow cards information, the computed property returns "No Data". Similarly, the component has computed properties for second yellow cards, direct red cards and the championship name.
