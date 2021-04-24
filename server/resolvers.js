module.exports = {
  Query: {
    launches: (_, __, { dataSources }) =>
      dataSources.launchAPI.getAllLaunches(),
    launchesByYear: (_, { year }, { dataSources }) =>
      dataSources.launchAPI.getLaunchesByYear({ year }),
    launchesByRocket: (_, { name }, { dataSources }) =>
      dataSources.launchAPI.getLaunchesByRocket({ name }),
    launchesByMission: (_, { name }, { dataSources }) =>
      dataSources.launchAPI.getLaunchesByMission({ name }),
  },
};
