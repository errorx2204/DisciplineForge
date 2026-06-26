import API from "../api/axios";

// Get all habits
export const getHabits = async () => {
  const response = await API.get("/habits");
  return response.data;
};

// Create new habit
export const createHabit = async (habitData) => {
  const response = await API.post(
    "/habits",
    habitData
  );

  return response.data;
};

// Complete habit
export const completeHabit = async (id) => {
  const response = await API.put(
    `/habits/${id}/complete`
  );

  return response.data;
};