# [4b Testing the backend](https://fullstackopen.com/en/part4/testing_the_backend)

- No complicated logic => no unit tests
- Test backend by mocking database => [mongo-mock](https://github.com/williamkapke/mongo-mock)
- Backend test the entire application through REST API (DB included)
  - *Integration Testing*: Things tested as a group.

## Testing Environment

- Backend in Heroku is production mode
- Node convention to define execution mode of application with `NODE_ENV` environment variable.
  - Current app only loads `.env` file if `not` in production mode.
  - Modify way application runs in different modes. E.g. separate testing database for tests.

- Common practice to have separate modes for *development* and *testing*.
  - In `package.json`, prefix command with environment variable `NODE_ENV=production|development|test`
- `--runInBand` alias `-i`. Running in band runs all tests serially rather than creating a pool of test processes. More useful for debugging. Prevents parallel tests.
  - Necessary if using a single test database. But if you mocked for each and every test... Boom, parallel tests.

- Windows needs some love when it comes to environment variables
  - Install the `cross-env` package to `--save-dev`

- Best to have a database installed and running on the local developer machine
  - Isolated from the real production database
  - Using a separate test database on the centralized DB still isn't good; chance for interference if others are also running tests / there are collaboration clashes.
  - "Test execution requires a database instance is not used by concurrent tests." => Parallelized tests all hitting the same DB will cause chaos.
  - Optimal solution would have every test execution have its own separate database.
  - Single use databases: Mongo "in-memory", or docker containers could spin up a database per test case.

- We implemented our own `config.js` module, but there is a [node-config](https://github.com/lorenwest/node-config) package.

## supertest testing package

[Supertest](https://github.com/visionmedia/supertest) for testing API

- Install as development dependency
- Wrap express server with supertest to create a [superagent](https://github.com/visionmedia/superagent)