const graphql = require('graphql');
// const _ = require('lodash')
const axios = require('axios');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
} = graphql;

// const users = [
//     {id: '23', firstName: 'Bill', age: 20},
//     {id: '47', firstName: 'Samantha', age: 21}
// ]

const CompanyType = new GraphQLObjectType({
    name: 'Company', 
    fields: {
        id: { type: GraphQLString},
        name: { type: GraphQLString},
        description: { type: GraphQLString}
    }
});

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: graphql.GraphQLString },
        firstName: { type: graphql.GraphQLString},
        age: { type: graphql.GraphQLInt},
        // lastName: { type: graphql.GraphQLString},
        company: { 
            type: CompanyType
        }
    }
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLString}},
            resolve(parentValue, args) {
                // calls lodash
                // return _.find(users, { id: args.id });
                return axios.get(`http://localhost:3000/users/${args.id}`)
                // .then(resp => resp);    
                .then(resp => resp.data);
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})