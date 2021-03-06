import { ApolloServer } from 'apollo-server';
import { environment } from './environment';
import resolvers from './resolvers';
import typeDefs from './schemas';

const server = new ApolloServer({
  typeDefs,
  resolvers,  
  introspection: environment.apollo.introspection,
  playground: environment.apollo.playground
});

server.listen(environment.port)
  .then(({ url }) => console.log(`Server ready at ${url}. `));
