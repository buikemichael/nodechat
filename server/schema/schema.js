const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNotNull
} = require("graphql")

const getFriends = require('./friendSchema')
const models = require("../models/index");



const typeDefs = [`
    type User = {
        id:Int
        name:String
        email:String
    }
    type Query{
        user:User
    }
`]


//Friend Type
const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        friend: { type: GraphQLList }
    })
})




//Root Query
const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        user: {
            type: UserType,
            async resolve(parentValue, args) {
                try {
                    const userData = await models.user.findOne({
                        where: {
                            id: 1,
                        },
                        include: [{
                            model: models.friend,
                            include: [
                                // {
                                //     model: models.user,
                                //     as: "friendInfo",
                                // },
                                {
                                    model: models.message,
                                },
                            ],
                        }, ],
                    });
                    console.log(userData.toJSON())
                    return userData
                } catch (err) {
                    console.log(err);
                }
            }
        }
    }
})

const mutation = "mutation"

module.exports = new GraphQLSchema({
    query: RootQuery,
})