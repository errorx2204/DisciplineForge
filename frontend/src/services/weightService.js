import API from "../api/axios";

// Get weight history
export const getWeightHistory =
  async () => {
    const response = await API.get(
      "/weights"
    );

    return response.data;
  };

// Add weight entry
export const addWeightEntry =
  async (weightData) => {
    const response = await API.post(
      "/weights",
      weightData
    );

    return response.data;
  };