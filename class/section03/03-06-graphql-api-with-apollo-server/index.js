import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
    type Query {
        qqq: String
    }
`;

const resolvers = {
    Query: {
        qqq: () => {
            return "Hello World!";
        },
    },
};

const app = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
    cors: true, // 모든 사이트 접근 허용
});

app.listen(3000).then(()=>{
    console.log("백엔드 API서버가 켜졌어요!")
})