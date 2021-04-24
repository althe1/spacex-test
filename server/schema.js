const { gql } = require("apollo-server");

const typeDefs = gql`
  type Launch {
    missionName: String
    rocketName: String
    launchDate: String
    videoLink: String
  }

  type Query {
    launches: [Launch]
    launchesByYear(year: Int): [Launch]
    launchesByRocket(name: String): [Launch]
    launchesByMission(name: String): [Launch]
  }
`;

module.exports = typeDefs;
