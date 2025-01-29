# Context API

Assume there are many pages (Components) in your application. You have to pass the data to one smaller Component but there is no way to pass this data directly to smaller component. We have to pass this data to every component even if there is no need to pass data to other components.This problem can be solved by the single term State Management. The solution is to create a global variable; this global variable is called Context API.
By creating this global variable if some component needs the data it can directly access it through global variable
