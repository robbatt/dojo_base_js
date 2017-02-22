# Dojo Base Project (JS)

## setup
* install nodejs 6+ LTS ([manual](https://nodejs.org/en/))
* run `npm install` in project root
* **Windows:** you might have to add `%APPDATA%\npm` to your `PATH`

## test
* `npm test` runs all unit tests under `src`

## coverage / test reports
* `npm run report` generates coverage and junit test reports

## looping tests / coverage reports
* `npm run loop-test` runs tests in loop/watch mode until cancelled
* `npm run loop-report` loops report generation (and test)
* use a browser plugin to refresh `coverage/lcov-report/index.html` every second to receive your test status
