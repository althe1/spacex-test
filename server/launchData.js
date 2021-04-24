const { RESTDataSource } = require("apollo-datasource-rest");

class LaunchAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.spacexdata.com/v3/";
  }

  async getAllLaunches() {
    const response = await this.get("launches");
    return Array.isArray(response)
      ? response.map((launch) => this.launchReducer(launch))
      : [];
  }

  launchReducer(launch) {
    return {
      launchYear: launch.launch_year,
      mission: {
        name: launch.mission_name,
      },
      rocket: {
        name:  launch.rocket.rocket_name
      },
      links: {
        videoLink: launch.links.video_link
      }
    }
  }

  async getLaunchesByYear({ launchYear }) {
    const response = await this.get('launches', { launch_year: launchYear });
    return this.launchReducer(response)
  }
}

module.exports = LaunchAPI;
