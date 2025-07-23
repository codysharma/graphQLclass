const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
} = graphql;

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: graphql.GraphQLString },
        firstName: { type: graphql.GraphQLString},
        age: { type: graphql.GraphQLInt},
        lastName: { type: graphql.GraphQLString},
    }
});