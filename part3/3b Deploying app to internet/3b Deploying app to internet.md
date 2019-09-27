# 3b Deploying App to internet
https://fullstackopen.com/en/part3/deploying_app_to_internet

# Same origin policy and CORS
CORS = Cross-origin resource sharing
- **Browsers/Web Applications** restrict resources from other domains (same-origin security policy)
    - Freely embed cross-origin images, stylesheets, **scripts** (??), iframes, and videos
    - Ajax and other certain requests are forbidden by default

By default, JS code of an application running in a browser can only communicate with server in the same origin

**Origin**
- Two URLs have the same **origin** if the protocol, port (if specified), and host are the same for both.
    - https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy
    - Must have matching "scheme/host/port tuple", or just "tuple"
    - Different protocol
    - Different port
    - Different host
        - Different subdomain is different host
    - `file:` URLs have more complicated origin rules

---

NPM cors middleware
Can enable all requests allow cors, or only some routes.

# Application to the Internet
Heroku
https://www.heroku.com/
https://devcenter.heroku.com/articles/getting-started-with-nodejs

`Procfile` tells heroku what to do.
`process.env.PORT` environment variable provided by Heroku.

# Frontend production build
`npm run build`

# Serving static files from the backend
- One option to deploy the frontend is to copy the production build (`build` directory) to the root of the backend repository.
- `app.use(express.static('build'))` will check build first for any static matching files, then move onto routes
    - www.serversaddress.com/index.html and www.serversaddress.com/

# Streamlining deploying of the frontend
- Add some package.json scripts to the backend to automate building frontend, copying, deploying, etc.

# Backend URLs
- Nice to offer backend API behind "/api/" route
- Api route can be versioned, but it's debated whether that's a good idea https://stackoverflow.com/questions/389169/best-practices-for-api-versioning

# Proxy
Relative URL breaks relationship between frontend/backend on different ports.

Add proxy to `package.json` to loop relative URLs to other localhost:port.
- A request to localhost:3000 not to the React application itself will proxy/redirect to localhost:3001.

Proxy fixes local development mode for server with relative URL.

Negative: Hard to deploy the frontend.
- Same repo can fix this: https://github.com/mars/heroku-cra-node
- Or, frontend react app as own application: https://github.com/mars/create-react-app-buildpack

How to set up Heroku with monorepo
https://medium.com/inato/how-to-setup-heroku-with-yarn-workspaces-d8eac0db0256
