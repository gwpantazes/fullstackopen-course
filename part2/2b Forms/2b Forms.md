# [Part 2b Forms](https://fullstackopen.com/en/part2/forms)

- Store notes in the App component state so page updates when new notes are added
- Store notes as state using `useState` function hook

- `event` _is_ the event that triggers the call to the event handler function
`event.preventDefault()` prevents default behavior, which reloads the page.
`event.target` is the form element the event is coming from
    - onSubmit is the top level `form`
    - onChange is the form element, such as the `input`
`event.target.value` is the value coming out

Controlled Component are React components which control the form input state, instead of those form inputs keeping their own state.

How to get the form input out?

Use ***Controlled Components***
- Set a component state as `value` attribute
- Provide `onChange` event handler to enable editing and sync React and the controlled component
    - onChange has no default behavior, so no need to call `event.preventDefault()`

set state for two things in the same event handler, it's fine

Remember to never mutate state

# Filtering Displayed Elements
Conditional operator into const var, and you're good to go.
Safer to use `===` when making comparisons.