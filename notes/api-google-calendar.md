## API Google Calendar

## Contents

- [API Google Calendar](#api-google-calendar)
- [Contents](#contents)
- [Introduction](#introduction)
- [Reference](#reference)
- [Getting data](#getting-data)
- [API Google Calendar](#api-google-calendar-1)
- [Google Calendar API using `try it`](#google-calendar-api-using-try-it)
- [React with Google Calendar](#react-with-google-calendar)

## Introduction

This shows the code for building a web application which talks to Google Calendar.

For the `Javascript` version (non-react) visit https://github.com/philanderson888/javascript/api/api-google/README.md

For the `react` version please follow below

## Reference

- https://developers.google.com/calendar

To make an app which takes data from Google Calendar do the following

1. Enable the API on Google Calendar

2. Store ClientID and Secret in `.env` in project root prepended with `REACT_APP`
   
```js
REACT_APP_CLIENT_ID = ...
REACT_APP_CLIENT_SECRET = ...
```

3. Manage your API keys in the `google developers console` https://console.developers.google.com

4. Experiment with the API settings using `try this api` eg for google calendar it is https://developers.google.com/calendar/v3/reference/?apix=true 

5. Enable the `Google Calendar` API for your project

6. Click to `Create Credentials` from a web browser

7. Add `http://localhost:3000` to authorised javascript origins.  

*Note - when you run your app ensure it's using `http://localhost` and not `http://127.0.0.0.1` as the latter tends not to work with Google API Whitelisting*

8.  Click to create OAuth client ID

9.  Set up `OAuth User Consent` and download the JSON file which looks like

```json
{
    "web":
    {
        "client_id":"..",
        "project_id":"time-tracker-295006",
        "auth_uri":"https://accounts.google.com/o/oauth2/auth",
        "token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs",
        "client_secret":"..",
        "javascript_origins":["http://localhost:3000"]
    }
}
```
10. Click to configure the `Consent Screen`
11. Ensure `.env` is an entry in your `.gitignore` file
12. Use them in your app with

```js
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET
```
13. On the `console.developers.google.com` Credentials screen click to `create credentials` and add an `API key` and add to your .env file as well

```js
REACT_APP_API_KEY = ...
```

Following https://www.youtube.com/watch?v=zaRUq1siZZo&ab_channel=GrantSingleton visiting this page.  https://developers.google.com/calendar/v3/reference/events/insert and start at this page https://developers.google.com/calendar/quickstart/js and for project 'Quickstart' get client id, secret and api key.  

Getting started https://developers.google.com/calendar => Javascript > 

sample links https://developers.google.com/calendar/v3/reference/?apix=true 

Follow these instructions https://developers.google.com/identity/sign-in/web/sign-in

Go to https://console.developers.google.com/apis/credentials and Create Credentials => OAuth ClientID => Web Application and add URI http://localhost:5500 and get the clientID and client secret.

Keys https://console.developers.google.com/apis/credentials


Now in the react app in the `index.html` file add

```html
<script src="https://apis.google.com/js/api.js" type="text/javascript"></script>
```


## Getting data

Using this page to get our data urls https://developers.google.com/calendar/v3/reference/?apix=true

try and get data from

https://www.googleapis.com/calendar/v3 which is the root url, plus /users/me/calendarList/calendarId

## API Google Calendar

Existing data at https://console.developers.google.com

Existing keys https://console.developers.google.com/apis/credentials

Walkthrough https://www.youtube.com/watch?v=zaRUq1siZZo&ab_channel=GrantSingleton

https://developers.google.com/calendar

Before we run this code we must first clear the browser cache at `Chrome => Settings => Clear Browsing Data => Cached Images And Files`

Also add http://localhost:5500 to the API OAuthAPI2 whitelist 

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Google Calendar API Quickstart</title>
    <meta charset="utf-8" />
  </head>
  <body>
    <p>Google Calendar API Quickstart</p>

    <!--Add buttons to initiate auth sequence and sign out-->
    <button id="authorize_button" style="display: none;">Authorize</button>
    <button id="signout_button" style="display: none;">Sign Out</button>

    <pre id="content" style="white-space: pre-wrap;"></pre>

    <script type="text/javascript">    
      const CLIENT_ID = `client_id`
      const API_KEY = `api_key`

      // Array of API discovery doc URLs for APIs used by the quickstart
      var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];

      // Authorization scopes required by the API; multiple scopes can be
      // included, separated by spaces.
      var SCOPES = "https://www.googleapis.com/auth/calendar.readonly";

      var authorizeButton = document.getElementById('authorize_button');
      var signoutButton = document.getElementById('signout_button');

      /**
       *  On load, called to load the auth2 library and API client library.
       */
      function handleClientLoad() {
        gapi.load('client:auth2', initClient);
      }

      /**
       *  Initializes the API client library and sets up sign-in state
       *  listeners.
       */
      function initClient() {
        gapi.client.init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: DISCOVERY_DOCS,
          scope: SCOPES
        }).then(function () {
          // Listen for sign-in state changes.
          gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

          // Handle the initial sign-in state.
          updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
          authorizeButton.onclick = handleAuthClick;
          signoutButton.onclick = handleSignoutClick;
        }, function(error) {
          appendPre(JSON.stringify(error, null, 2));
        });
      }

      /**
       *  Called when the signed in status changes, to update the UI
       *  appropriately. After a sign-in, the API is called.
       */
      function updateSigninStatus(isSignedIn) {
        if (isSignedIn) {
          authorizeButton.style.display = 'none';
          signoutButton.style.display = 'block';
          listUpcomingEvents();
        } else {
          authorizeButton.style.display = 'block';
          signoutButton.style.display = 'none';
        }
      }

      /**
       *  Sign in the user upon button click.
       */
      function handleAuthClick(event) {
        gapi.auth2.getAuthInstance().signIn();
      }

      /**
       *  Sign out the user upon button click.
       */
      function handleSignoutClick(event) {
        gapi.auth2.getAuthInstance().signOut();
      }

      /**
       * Append a pre element to the body containing the given message
       * as its text node. Used to display the results of the API call.
       *
       * @param {string} message Text to be placed in pre element.
       */
      function appendPre(message) {
        var pre = document.getElementById('content');
        var textContent = document.createTextNode(message + '\n');
        pre.appendChild(textContent);
      }
      function listUpcomingEvents() {
          console.log(`in a function`)
        gapi.client.calendar.events.list({
          'calendarId': 'primary',
          'timeMin': (new Date()).toISOString(),
          'showDeleted': false,
          'singleEvents': true,
          'maxResults': 10,
          'orderBy': 'startTime'
        }).then(function(response) {
          var events = response.result.items;
          appendPre('Upcoming events:');

          if (events.length > 0) {
            for (i = 0; i < events.length; i++) {
              var event = events[i];
              var when = event.start.dateTime;
              if (!when) {
                when = event.start.date;
              }
              appendPre(event.summary + ' (' + when + ')')
            }
          } else {
            appendPre('No upcoming events found.');
          }
        });
      }

    </script>

    <script async defer src="https://apis.google.com/js/api.js"
      onload="this.onload=function(){};handleClientLoad()"
      onreadystatechange="if (this.readyState === 'complete') this.onload()">
    </script>
  </body>
</html>
<!-- 
Google Calendar API Quickstart
Authorize
-->
```

Change the `url` to `http://localhost:5500....` (remove the 127.0.0.1)

We should now see the `authorize` button and clicking on it should show the Google authorization panel


https://developers.google.com/calendar/v3/reference/?apix=true

https://github.com/google/google-api-javascript-client/blob/master/docs/reference.md

https://www.googleapis.com/calendar/v3/users/me/calendarList

Headers : Authorization: Basic or other type defined here http://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml 

Headers { Authorization: Basic KEY123 }

## Google Calendar API using `try it`

https://developers.google.com/calendar/v3/reference/calendarList/list?apix=true#try-it

Executing this code for us 

```js
curl \
  'https://www.googleapis.com/calendar/v3/users/me/calendarList?key=[YOUR_API_KEY]' \
  --header 'Authorization: Bearer [YOUR_ACCESS_TOKEN]' \
  --header 'Accept: application/json' \
  --compressed

```


## React with Google Calendar

https://www.youtube.com/watch?v=zaRUq1siZZo&ab_channel=GrantSingleton

Add this to `index.html`

```html
<script src="https://apis.google.com/js/api.js" type="text/javascript"></script>
```

Here is the Google Calendar app to list, add and remove Google calendar items

```jsx
import React from 'react'
class ApiGoogleCalendar extends React.Component {
    constructor(){
        super()
        this.state = {
            error:null,
            isLoaded:false,
            DISCOVERY_DOCS:'discovery docs',
            SCOPES:'scope',
            eventAdded:'',
            eventUrl:'',
            events:[],
            eventDetails:[],
        }
    }
    componentDidMount(){
        this.setState({
            error:null,
            isLoaded:true
        })
    }
    queryEvents = () => {
        console.clear()
        let eventDetails = this.state.eventDetails;
        let eventUrl = '';
        let gapi = window.gapi
        console.log('windows.gapi',window.gapi);
        gapi.load('client:auth2',()=>{
            console.log('loading gapi')
            gapi.client.init({
                clientId:process.env.REACT_APP_CLIENT_ID,
                apiKey:process.env.REACT_APP_API_KEY,
                discoveryDocs:["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
                scope: "https://www.googleapis.com/auth/calendar.readonly",
            })
            console.log('initialization completed')
            gapi.load('calendar','v3',()=>console.log('loading calendar'))
            gapi.auth2.getAuthInstance().signIn()
            .then(()=>{
                console.log(`signed in to google calendar`)
                gapi.client.calendar.events.list({calendarId:'primary', maxResults:2500, timeMin:'2020-11-11T00:00:00Z'})
                .then(response=>{
                        const events = response.result.items.filter(event=>{
                            const created = event.created
                            const dateNow = new Date();
                            const today = new Date(Date.UTC(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate()))
                            const createdDate = new Date(created)
                            console.log('created',created)
                            console.log('created', `${createdDate.getFullYear()}-${createdDate.getMonth()}-${createdDate.getDate()}`)
                            console.log('today',today)
                            console.log(`${event.id} -- ${event.summary}`)
                            if(event.summary==='Google I/O 2015'){
                                console.log('found a google event')
                                gapi.client.calendar.events.delete({calendarId:'primary', eventId:event.id})
                                .then(response=>{
                                    if(response.error || response===false ){
                                        console.log('no record deleted')
                                    }
                                    else{
                                        console.log('event deleted with id',event.id)
                                    }  
                                })    
                            }
                            if(created !== 'undefined' && typeof event.summary !== 'undefined') {
                                eventDetails.push({
                                    summary: event.summary, 
                                    id: event.id, 
                                    htmlLink: event.htmlLink
                                })   
                            }
                            // just items created today or later!
                            return (createdDate>today && created !== 'undefined')
                        })
                        console.log('events',events)
                        this.setState({
                            events,
                            eventDetails
                        })
                    })
            })
        })
        this.setState({
            eventUrl:'',
            eventAdded:'',
        })
    }
    addNewEvent = () => {
        console.clear()
        let eventDetails = this.state.eventDetails;     
        let eventUrl = '';
        let gapi = window.gapi
        console.log('windows.gapi',window.gapi);
        gapi.load('client:auth2',()=>{
            console.log('loading gapi')
            gapi.client.init({
                clientId:process.env.REACT_APP_CLIENT_ID,
                apiKey:process.env.REACT_APP_API_KEY,
                discoveryDocs:["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
                scope: "https://www.googleapis.com/auth/calendar.readonly",
            })
            console.log('initialization completed')
            gapi.load('calendar','v3',()=>console.log('loading calendar'))
            gapi.auth2.getAuthInstance().signIn()
            .then(()=>{
                console.log(`signed in to google calendar`)
                var event = {
                    'summary': 'Google I/O 2015',
                    'location': '800 Howard St., San Francisco, CA 94103',
                    'description': 'A chance to hear more about Google\'s developer products.',
                    'start': {
                      'dateTime': '2020-11-12T10:15:00',
                      'timeZone': 'GMT'
                    },
                    'end': {
                      'dateTime': '2020-11-12T10:30:00',
                      'timeZone': 'GMT'
                    },
                    'recurrence': [],
                    'attendees': [],
                    'reminders': {
                      'useDefault': false,
                      'overrides': [
                        {'method': 'email', 'minutes': 24 * 60},
                        {'method': 'popup', 'minutes': 10}
                      ]
                    }
                  };
                  console.log('about to log an event',event)
                  let request = gapi.client.calendar.events.insert({
                      'calendarId': 'primary',
                      'resource': event
                  })
                  request.execute(event => {
                        // htmlLink is link to new google event
                        eventUrl = event.htmlLink
                        console.log('event url is ',eventUrl)
                        this.setState({
                        eventAdded:'Event added ',
                        eventUrl,
                        events:[],
                        eventDetails:[],
                    })
                })
            })
        })
        this.setState({
            eventUrl:'creating event ...',
        })
    }
    deleteEvent = () => {
        console.clear()
        let eventDetails = this.state.eventDetails;   
        let gapi = window.gapi
        console.log('windows.gapi',window.gapi);
        gapi.load('client:auth2',()=>{
            console.log('loading gapi')
            gapi.client.init({
                clientId:process.env.REACT_APP_CLIENT_ID,
                apiKey:process.env.REACT_APP_API_KEY,
                discoveryDocs:["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
                scope: "https://www.googleapis.com/auth/calendar.readonly",
            })
            console.log('initialization completed')
            gapi.load('calendar','v3',()=>console.log('loading calendar'))
            gapi.auth2.getAuthInstance().signIn()
            .then(()=>{
                console.log(`signed in to google calendar`)
                gapi.client.calendar.events.list({calendarId:'primary', maxResults:2500, timeMin:'2020-11-11T00:00:00Z'})
                .then(response=>{
                        let eventCount = 0;
                        const events = response.result.items.filter(event=>{
                            const created = event.created
                            const dateNow = new Date();
                            const today = new Date(Date.UTC(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate()))
                            const createdDate = new Date(created)
                            console.log('created',created)
                            console.log('created', `${createdDate.getFullYear()}-${createdDate.getMonth()}-${createdDate.getDate()}`)
                            console.log('today',today)
                            console.log(`${event.id} -- ${event.summary}`)
                            if(event.summary==='Google I/O 2015'){
                                eventCount++;
                                console.log('found a google event')
                                gapi.client.calendar.events.delete({calendarId:'primary', eventId:event.id})
                                .then(response=>{
                                    if(response.error || response===false ){
                                        console.log('no record deleted')
                                    }
                                    else{
                                        console.log('event deleted with id',event.id)
                                    }  
                                })    
                            }
                            if(created !== 'undefined' && typeof event.summary !== 'undefined') {
                                eventDetails.push({
                                    summary: event.summary, 
                                    id: event.id, 
                                    htmlLink: event.htmlLink,
                                })   
                            }
                            return (createdDate>today && created !== 'undefined')
                        })
                        console.log('events',events)
                        this.setState({
                            events,
                            eventDetails,
                            eventUrl: eventCount>0?`${eventCount} events deleted`:'no events deleted',
                        })
                    })
            })
        })
        this.setState({
            eventUrl:'deleting Google I/O events ....',
            eventAdded:'',
        })
    }
    render(){
        const { error, isLoaded } = this.state
        if(error) {
            return <div>Error : {error.message}</div>
        } else if (!isLoaded) {
            return <div>Loading ...</div>
        } else {
            return(
                <div>
                    <h2>Google Calendar - List, Add, Remove Events</h2>
                    <div>
                        <button className="buttonSeparate" type='button' onClick={this.queryEvents}>List Events</button>
                        <button className="buttonSeparate" type='button' onClick={this.addNewEvent}>Add Google I/O Event</button>
                        <button className="buttonSeparate" type='button' onClick={this.deleteEvent}>List Events and Delete Google I/O Events</button>
                        <div id='discovery-docs'><p>{this.state.discoveryDocs}</p></div>
                        <div id='scope'><p>{this.state.scope}</p></div>
                        <div id='api-calendar'>{this.state.apiData}</div>
                        <div id='event-url'>{this.state.eventAdded}<a href={this.state.eventUrl} target="_blank" rel="noreferrer">{this.state.eventUrl}</a></div>
                        <div id='list-of-events'>
                            <ul>
                                {this.state.events.map(event=>{
                                    <li>event.summary</li>
                                })}
                            </ul>
                        </div>
                        <div id='event-details'>
                            <ul>
                                {this.state.eventDetails.map(event=>(
                                    <li className="eventList" key={event.id}><a href={event.htmlLink} target='_blank'>{event.summary}</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div> 
            )
        }
    }
}
export default ApiGoogleCalendar
```

with CSS in `index.html` or `App.css` (have to import with `import './App.css'`)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>API Google Calendar</title>
    <script src="https://apis.google.com/js/api.js" type="text/javascript"></script>
    <style>
      html{
          font-family: Verdana, Geneva, Tahoma, sans-serif;
      }
      div.container{
          width:80vw;
          margin:auto;
      }
      #buttonCalendar{
          margin-top:3vh;
      }
      .iconDelete{
        width:0.7vw;
      }
      .iconEdit{
        width:0.7vw;
      }
      .eventList{
        background-color: #d4dce6;
        margin:1vmin 0;
        border:1px solid #92abc3;
        list-style-type: none;
        padding:1vmin 2vmin;
      }
      .buttonSeparate{
        margin:1vmin 2vmin;
        background-color: #c2c6ec;
        border-radius:2vmin;
        border:1px solid #8d95e0;
      }
      .buttonSeparate:hover{
        background-color: #969ee7;
        border:1px solid #4f5dd3;
      }
    </style>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```