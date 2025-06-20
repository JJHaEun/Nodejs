import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
    type BoardReturn {
        number: Int
        writer: String
        title: String
        contents: String
    }

    type Query {
        fetchBoards: [BoardReturn]
    }

    input CreateBoardInput {
        writer: String
        title: String
        contents: String
    }

    type Mutation {
        createBoard(createBoardInput: CreateBoardInput!): String
    }
`;

const resolvers = {
    Query: {
        fetchBoards: () => {
            const result = [
                {
                    number: 1,
                    writer: '철수',
                    title: '제목입니다',
                    contents: '내용이에요'
                },
                {
                    number: 2,
                    writer: '영희',
                    title: '영희 제목입니다',
                    contents: '영희 내용이에요'
                },
                {
                    number: 3,
                    writer: '짱구',
                    title: '짱구 제목입니다',
                    contents: '짱구 내용이에요'
                },
            ];
            return result;
        },
    },
    Mutation: {
        createBoard: (_, args) => {
            console.log(args);
            console.log(args.createBoardInput);

            return '게시물 등록에 성공하였습니다!!'
        }
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