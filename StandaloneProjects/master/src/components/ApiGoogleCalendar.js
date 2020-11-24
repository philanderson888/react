import React from 'react'
import NavbarAPIs from './NavbarAPI'
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
                        let eventUrl = event.htmlLink
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
        const { isLoaded } = this.state
        if (!isLoaded) {
            return <div>
                    <NavbarAPIs />
                       Loading ...
                    </div>
        } else {
            return(
                <div>
                    <NavbarAPIs />
                    <h2>Google Calendar - List, Add, Remove Events</h2>
                    <div>
                        <button className="buttonSeparate" type='button' onClick={this.queryEvents}>List Events</button>
                        <button className="buttonSeparate" type='button' onClick={this.addNewEvent}>Add Google I/O Event</button>
                        <button className="buttonSeparate" type='button' onClick={this.deleteEvent}>List Events and Delete Google I/O Events</button>
                        <div id='discovery-docs'><p>{this.state.discoveryDocs}</p></div>
                        <div id='scope'><p>{this.state.scope}</p></div>
                        <div id='api-calendar'>{this.state.apiData}</div>
                        <div id='event-url'>{this.state.eventAdded}<a href={this.state.eventUrl}>{this.state.eventUrl}</a></div>
                        <div id='list-of-events'>
                            <ul>
                                {this.state.events.forEach(event=>{
                                    <li>{event.summary}</li>
                                })}
                            </ul>
                        </div>
                        <div id='event-details'>
                            <ul>
                                {this.state.eventDetails.forEach(event=>(
                                    <li className="eventList" key={event.id}><a href={event.htmlLink}>{event.summary}</a></li>
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
