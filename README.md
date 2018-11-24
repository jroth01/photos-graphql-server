# photos-graphql-server

https://graphql-photos.herokuapp.com/

Simple Apollo Server for a self-documenting GraphQL API.
Supports basic querying of photo albums. 

Used by a React + React-Router + Apollo Client UI with in memory caching. 
https://github.com/jroth01/photos

Exploring use case as a layer over a legacy REST api that serves relational data. Resolver functions might perform fetch calls to a set of existing endpoints. 

For now, resolvers use static info under `/data`.

Inspired by this Prisma blog post:
https://www.prisma.io/blog/how-to-wrap-a-rest-api-with-graphql-8bf3fb17547d/


# Running GraphQL Query Playground locally

```
npm install
npm start
```

