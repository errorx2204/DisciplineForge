import API from "../api/axios";

// Get journal entries
export const getJournalEntries =
  async () => {
    const response = await API.get(
      "/journal"
    );

    return response.data;
  };

// Create journal entry
export const createJournalEntry =
  async (entryData) => {
    const response = await API.post(
      "/journal",
      entryData
    );

    return response.data;
  };