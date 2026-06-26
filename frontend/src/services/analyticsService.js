import API from "../api/axios";

export const getDashboardAnalytics =
  async () => {
    const response = await API.get(
      "/analytics/dashboard"
    );

    return response.data;
  };