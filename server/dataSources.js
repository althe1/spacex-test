const { RESTDataSource } = require("apollo-datasource-rest");

class LaunchAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.spacexdata.com/v3/";
  }

  launchReducer(launch) {
    return {
      missionName: launch.mission_name,
      rocketName: launch.rocket.rocket_name,
      launchDate: launch.launch_date_utc,
      videoLink: launch.links.video_link,
    };
  }

  async getAllLaunches() {
    const response = await this.get("launches");
    return Array.isArray(response)
      ? response.map((launch) => this.launchReducer(launch))
      : [];
  }

  async getLaunchesByYear({ year }) {
    const response = await this.get("launches", { launch_year: year });
    return Array.isArray(response)
      ? response.map((launch) => this.launchReducer(launch))
      : [];
  }

  async getLaunchesByRocket({ name }) {
    const response = await this.get("launches", { rocket_name: name });
    return Array.isArray(response)
      ? response.map((launch) => this.launchReducer(launch))
      : [];
  }

  async getLaunchesByMission({ name }) {
    const response = await this.get("launches");
    return Array.isArray(response)
      ? response
          .filter((launch) => name === launch.mission_name)
          .map((launch) => this.launchReducer(launch))
      : [];
  }

  async getLaunchesBySearchTerm({ search }) {
    const searchByYear = await this.getLaunchesByYear({ year: search });
    const searchByRocket = await this.getLaunchesByRocket({ name: search });
    const searchByMission = await this.getLaunchesByMission({ name: search });

    if (searchByYear.length > 0) return searchByYear;
    if (searchByRocket.length > 0) return searchByRocket;
    if (searchByMission.length > 0) return searchByMission;
  }
}

module.exports = () => ({
  launchAPI: new LaunchAPI(),
});
