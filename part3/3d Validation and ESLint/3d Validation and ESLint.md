# 3d Validation and ESLint
https://fullstackopen.com/en/part3/validation_and_es_lint

Constraints on data in the database.
Check in POST route, respond with 400.

Mongoose validation functionality
Schema validation rules
- Required and min-length are built-in by Mongoose
- Custom validators can be written
- Catch Validation errors in the errorHandler

# Promise Chaining
`toJSON` method was being called inside `then`, but instead we can promise chain.

The `then` method of a promise also returns a promise.

# Deploying the database backend to production
`heroku config` and subcommands like `config:set`.
Tail logs to see errors.

# Lint 
https://fullstackopen.com/en/part3/validation_and_es_lint#lint

Lint, or a Linter, detects and flags errors in programming languages.
- *Static analysis*, style errors, suspicious language usage

[ESLint](https://eslint.org) is the leading JS static analysis tool.
ESLint json config file.
Asks questions about your code style.