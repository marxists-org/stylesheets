# stylesheets

This repository maintains a series of stylesheets for marxists.org. The css
files within the src directory are transformed using
[postcss](https://postcss.org/) enabling more easily maintained and more
comprehensive consistent final css file for marxists.org visitors' browsers.

## Building

1. Install [Node.js](https://nodejs.org/en/)
2. Open your preferred command line interface (e.g. Terminal for macOS or
   Command prompt or PowerShell for Windows...)
3. Clone the repository with the command line
   `git@github.com:marxists-org/stylesheets.git; cd stylesheets` (or using
[Github Desktop](https://desktop.github.com/))
4. Install the required Node.js software and run the build script `npm install
   && npm run-script build`

The final result will be in your newly generated build directory.
