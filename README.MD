# Adobe & AEM Engineering Test

## Requirements 

    Treat this project as you would treat any serious engineering effort for your employer.
    Your HTTP Endpoint must accept a URI in this format:
    http://localhost:8080/romannumeral?query={integer}
    {integer} must be any integer value in the range 1-255 unless you are asked for
    Extension 1 (see below). Errors can be returned in plain text format, but success
    responses must include a JSON payload with two string values, an ‘input’ value and an
    ‘output’ value. For example, if the input is 1, the response must be a JSON document
    equivalent to:
    {
    “input” : “1”,
    “output” : “I”
    }

## Extensions

## Extension 1: Expand the range of numbers to 1-3999.

## Extension 3: Include additional DevOps capabilities in your project to represent how you
    would prepare your project for ease of operation in a production environment (e.g. metrics,
    monitoring, logging, etc.). Add tooling to build a runnable Docker container for your service if
    you are familiar with Docker.


## Getting Started

## Running in local machine 
- To get started, clone this repo to your local machine.
Note: Node version used to build the server is v20.11.0

open other terminal on the roo of this project
```` bash
cd roman-numerals-code-challenge
yarn install
yarn dev
````
At this, the server should br running in development mode and you can locallly access http://localhost:8080/romannumeral?query=123

## Running on docker container
open other terminal on the roo of this project

```` bash
cd roman-numerals-code-challenge
docker buildx build -t romannumeral .
docker run -d -p 8080:8080 romannumeral

````

At this, the server should br running in development mode and you can locallly access http://localhost:8080/romannumeral?query=123