import {
  useEffect,
  useState,
} from "react";

import {
  getJournalEntries,
  createJournalEntry,
} from "../services/journalService";

import PageLayout from "../components/PageLayout";
import EmptyState from "../components/EmptyState";
import CustomButton from "../components/CustomButton";

function JournalPage() {
  const [entries, setEntries] =
    useState([]);

  const [title, setTitle] =
    useState("");

  const [content, setContent] =
    useState("");

  const [mood, setMood] =
    useState("Motivated");

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    try {
      const data =
        await getJournalEntries();

      setEntries(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddEntry =
    async () => {
      if (!title || !content)
        return;

      try {
        await createJournalEntry({
          title,
          content,
          mood,
        });

        setTitle("");
        setContent("");

        fetchEntries();
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <PageLayout>
      <h1>📝 Journal</h1>

      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          maxWidth: "600px",
        }}
      >
        <input
          placeholder="Title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          style={{
            padding: "12px",
            borderRadius: "10px",
            border: "none",
          }}
        />

        <textarea
          placeholder="Write your thoughts..."
          value={content}
          onChange={(e) =>
            setContent(e.target.value)
          }
          rows="5"
          style={{
            padding: "12px",
            borderRadius: "10px",
            border: "none",
          }}
        />

        <select
          value={mood}
          onChange={(e) =>
            setMood(e.target.value)
          }
          style={{
            padding: "12px",
            borderRadius: "10px",
          }}
        >
          <option>Motivated</option>
          <option>Happy</option>
          <option>Neutral</option>
          <option>Sad</option>
          <option>Stressed</option>
        </select>

        <CustomButton
          text="Add Entry"
          onClick={handleAddEntry}
        />
      </div>

      <div
        style={{
          marginTop: "40px",
        }}
      >
        {entries.length === 0 ? (
          <EmptyState message="No journal entries yet." />
        ) : (
          entries.map((entry) => (
            <div
              key={entry.id}
              style={{
                background: "#1e293b",
                padding: "20px",
                borderRadius: "15px",
                marginBottom: "15px",
              }}
            >
              <h3>{entry.title}</h3>

              <p>{entry.content}</p>

              <p>
                Mood: {entry.mood}
              </p>
            </div>
          ))
        )}
      </div>
    </PageLayout>
  );
}

export default JournalPage;