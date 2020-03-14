const GraphQL = require('graphql');
const _= require('lodash');
const DBUsers = require('../models/SampleData');

const {GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLList} = GraphQL;

const DBSampleData = new GraphQLObjectType({
    name:'DBSample',
    fields:()=>({
        year : {type: GraphQLString},
        months: {
            type: new GraphQLList(new GraphQLObjectType({
                name:'Months',
                fields:()=>({
                    name:{type: GraphQLString},
                    value:{type: GraphQLString},
                })
            }))
        }
        // [{type: new GraphQLList(GraphQLString)}]
    })
});

const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        DemoData: {
            type: new GraphQLList(DBSampleData),
            resolve(parent,args){
                const result = DBUsers.find({});
                return result;
            }
        },
    }
});

module.exports = new GraphQLSchema({
    query:RootQuery
});