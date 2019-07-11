# Part 0b - Fundamentals of Web-apps
https://fullstackopen.com/en/part0/fundamentals_of_web_apps

Example app: https://fullstack-exampleapp.herokuapp.com/
- Demonstrates fundamentals, not good practices

Use Chrome browser now and all throughout the course

ALWAYS keep Developer Console open! F12 or alt cmd and i on Mac
Console and Network tabs

# HTTP GET
Server and browser commmunicate with [HTTP protocol](https://developer.mozilla.org/en-US/docs/Web/HTTP) (Hypertext Transfer Protocol)
    - Application layer protocal for transmitting hypermedia documents, such as HTML
    - Stateless protocol

Network requests
- *Headers*
    - General
        - HTTP method
        - Status code 
    - Response Headers
        - Content-Type
            - `text/html; charset=utf-8` lets browser know the response is an HTML-page and to render it to the browser like a web page
    - Request Headers
- Response
    - Raw response data
        - May be HTML document 

`img` tags cause subsequent HTTP-requests to fetch the images from the server

[Sequence Diagram](https://www.geeksforgeeks.org/unified-modeling-language-uml-sequence-diagrams/)
- A type of UML diagram (Unified Modeling Language)
- A sequence diagram is the most commonly used interaction diagram.
- Depicts interaction between objects in sequential order
- An _Actor_ is a role which interacts with the system and its objects
    - An actor is _always_ outside the scope of the system we aim to model
    - Multiple actors may be present in a sequence diagram

Sequence diagram each HTTP protocol request and its response

The HTML page begins to render before the image has been fetched from the server.

# Traditional web applications
- Browser fetches content and textual content from the server
- Document can be _static_ file saved in server directory, or server can form HTML documents dynamically using application code and a database (HTML formed dynamically)
- Writing HTML in the middle of code isn't smart, but that's how it used to be (PHP)
- Traditional web apps = dumb browser which only fetches HTML from server. All application logic is on the server.
    - Some servers: Express.js, Java Spring, Python Flask, and Ruby on Rails

We'll use Node.js and Express to create web servers.

# Running application logic on the browser
- Browser fetches resources in order it sees them in the HTML document
    - CSS stylesheets, JS files, Images, etc.

XHTTP vs Fetch: Fetch uses promises, so XHTTP is "simpler" but older. The course will move to Fetch in Part 2.

Browser executes the code directly after fetching the script .js file

JSONView Plugin https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc

console.log and Console tab will be heavily used

# Event handlers and Callback functions
Event handlers are triggerd asynchronously via events (e.g. onreadystatechange for XHTTP).
Event handlers are called callback functions. Application does not invoke the functions directly; the runtime invokes them when the event occurs.
(The browser == the runtime)

# DOM  (Document Object Model)
HTML pages as implicit tree structures
Developer Console > Elements tab

Document Object Model (DOM) is an API for programmatic modification of element trees in web pages.
- Entire DOM tree branches can be made, then inserted all at once into the HTML tree of the whole page

## Manipulating document-object from console
Topmost node of the DOM tree of an HTML document is called the `document` object.
`document` is available as an object from the Console tab.
The `document` object is your API into the DOM. E.g. `document.createElement('li')` which creates an orphan `li` element.

# CSS
_class_ is an _attribute_. Elements can have attributes.

# Loading a page containing Javascript - Revised
Oh here we go, it's time to do sequence diagrams.
https://fullstack-exampleapp.herokuapp.com/notes

Sequence Diagram between browser and server objects
Message: HTTP request - method - resource
Message Response: Some resource object
Computation on the browser side or server side

Browser executes JS as soon as it gets the main.js resource back from the server.
JS file requests the JSON data from the server, in this case.
Browser executes the event handler to render the notes we got from the JSON data request made in the Javascript.

# Forms and HTTP POST
POST action sends POST to certain place (URL)
Redirect causes page reload.
Data is sent as the body of the POST-request. Viewable in the POST request in Network tab.

# AJAX
Ajax is early 2000's web technology.
AJAX (Asynchronous Javascript and XML) - fetch content to webpages using Javscript included within the HTML, without needing to rerender the page.
One step better than traditional web applications which do one request for static or server generated HTML content.

The example URLS are not acceptable nowadays, don't follow conventions of RESTful APIs.

Ajax now so commonplace it's taken for granted.

# Single Page App (SPA)
Traditional Web apps vs Single Page Apps (SPAs)
Traditional - All logic is on the server, and browser only renders HTML as instructed
SPA - Don't fetch all their pages separately from the server. Comprises only one HTML page, the contents of which are maniuplated with Javscript that executes in the browser.

Traditional style form submit is not SPA yet. The redirect on form POST causes the page to reload.
SPA `form` has no `action` or `method` attributes.

SPA request is XHR: XMLHttpRequest (XHR) is an API in the form of an object whose methods transfer data between a web browser and a web server. The object is provided by the browser's JavaScript environment.


Example App Code: https://github.com/mluukkai/example_app , this app is bad though. Don't use as an example. 

# Javascript libraries
Vanilla javascript only with DOM-API.
There are different libraries, such as jQuery. jQuery was developed during the traditional era of server generating HTML pages. At the time, it was popular because it was cross-browser compatible.
Vanilla JS is better now so jQuery isn't justified.
Historically, BackboneJS and AngularJS came around as modern libraries. Angular made a breaking update which killed popularity.
React.js is most popular right now.
This course will cover React.js and [Redux](https://github.com/reactjs/redux), used together.
VueJS is a strong newcomer.

# Full Stack Web Development
Frontend and Backend. Web Applications have an architecture that is a _stack_ of layers.
Browser, end user = Top Layer = Frontend
Server = Bottom layer = Backend
Database too
Software on Server and operating system are sometimes part of stack, but we won't go into those

Full stack developers must also have enough configurationa nd administration skills to operate their application; for example, in the cloud.

Debugging is a bit harder than with regular desktop applications. Javscript is weird, Async is weird. Need to know the HTTP protocol.
- Also handle databases, server administration, and configuration