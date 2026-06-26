import API from "../api/axios";

// Get all assignments
export const getAssignments =
  async () => {
    const response = await API.get(
      "/assignments"
    );

    return response.data;
  };

// Create assignment
export const createAssignment =
  async (assignmentData) => {
    const response = await API.post(
      "/assignments",
      assignmentData
    );

    return response.data;
  };

// Complete assignment
export const completeAssignment =
  async (id) => {
    const response = await API.put(
      `/assignments/${id}/complete`
    );

    return response.data;
  };