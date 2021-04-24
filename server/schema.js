const { gql } = require('apollo-server');

const typeDefs = gql`
    # Your schema will go here
    type Launch {
        mission: Mission
        rocket: Rocket
        launchYear: Int
        link: Link
    }
    type Rocket {
        name: String
        type: Int
    }
    type Mission {
        name: String
    }
    type Link {
        videoLink: String
    }
    type Query {
        launches: [Launch]!
        launch: Launch
    }
`;

module.exports = typeDefs;