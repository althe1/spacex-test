module.exports = {
    Query: {
        launches: (_, __, { dataSources }) => dataSources.launchAPI.getAllLaunches(),
        launch: (_, { year }, { dataSources }) => dataSources.launchAPI.getLaunchByYear({ launchYear: year})
    }
}