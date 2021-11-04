const graphql = require('graphql');
const _ = require ('lodash')
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema
} = graphql;

const users = [
    { name: 'Luke Skywalker', height: '172', mass: '77', gender: 'Male',},
    { name: 'obi', height: '795', mass: '85', gender: 'Female',}
];

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        name: { type: GraphQLString },
        height: { type: GraphQLInt },
        mass: { type: GraphQLInt },
        gender: { type: GraphQLString },
    

    }
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields : {
        user: {
        
                type: UserType,
                args: { name: { type: GraphQLString }},
                resolve(parentValue, args) {
                    return_find(user, { name: args.name});
                }
            
        }
    }
});

module.export = new GraphQLSchema({
    query: RootQuery
});