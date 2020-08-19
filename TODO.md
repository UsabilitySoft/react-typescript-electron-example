# Vercer Take Home Technical Challenge IMPROVEMENTS

## Complete all challenge tasks
* - Missing request: filter by trade price.

## Application General
- Sort all problems in "problems" panel (VSCode).
- there is no persisted application state management such as redux.
- Add (Redux) persisted application state (and use e.g. Redux Sagas for side effects).
- 404's currently falling back to index.html

## Maintainability
- Write retrospective unit tests.
- Use TDD moving forwards for data functions and API.
- Abstract data functions to different file.

## UI
- Make use of some Electron stuff (windows, maximise etc).
- Give user the option to switch between light/dark themes.
- Format table field value colours e.g. 'buy' (light) 'sell' dark (cancelled/matched etc.).

## Components
### Table
- Dynamically generate headers with 'sort by' function (based on field object 'selected' value).
- Dynamically generate row containers with row highlight.
* UI - Format dates to be readable and consistent.
- Add Paging.
- Cancelled/matched no data.

### Filter Form
* - Dynamically assign broker dropdown options (based on seperate tbl or current data) these are hard coded.
* - Bug: selecting 'All' as an option does not work.
* - UI Width of filter select fields too narrow.
* - Typescript lots have implicit (any) types
- 'Clear' button to apply cleared filter.
- Mention that data is filtered.
* UI - not catered for no data.