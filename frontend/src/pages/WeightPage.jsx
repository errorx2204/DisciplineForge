import {
  useEffect,
  useState,
} from "react";

import {
  getWeightHistory,
  addWeightEntry,
} from "../services/weightService";

import PageLayout from "../components/PageLayout";
import EmptyState from "../components/EmptyState";
import CustomButton from "../components/CustomButton";
import WeightChart from "../components/WeightChart";

function WeightPage() {
  const [weights, setWeights] =
    useState([]);

  const [weight, setWeight] =
    useState("");

  const [notes, setNotes] =
    useState("");

  useEffect(() => {
    fetchWeights();
  }, []);

  const fetchWeights = async () => {
    try {
      const data =
        await getWeightHistory();

      setWeights(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddWeight =
    async () => {
      if (!weight) return;

      try {
        await addWeightEntry({
          weight,
          notes,
        });

        setWeight("");
        setNotes("");

        fetchWeights();
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <PageLayout>
      <h1>⚖️ Weight Tracker</h1>

      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          maxWidth: "500px",
        }}
      >
        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) =>
            setWeight(e.target.value)
          }
          style={{
            padding: "12px",
            borderRadius: "10px",
            border: "none",
          }}
        />

        <input
          placeholder="Notes"
          value={notes}
          onChange={(e) =>
            setNotes(e.target.value)
          }
          style={{
            padding: "12px",
            borderRadius: "10px",
            border: "none",
          }}
        />

        <CustomButton
          text="Add Weight"
          onClick={handleAddWeight}
        />
      </div>

      {weights.length > 0 && (
        <WeightChart data={weights} />
      )}

      <div
        style={{
          marginTop: "40px",
        }}
      >
        {weights.length === 0 ? (
          <EmptyState message="No weight records yet." />
        ) : (
          weights.map((entry) => (
            <div
              key={entry.id}
              style={{
                background: "#1e293b",
                padding: "20px",
                borderRadius: "15px",
                marginBottom: "15px",
              }}
            >
              <h3>
                {entry.weight} kg
              </h3>

              <p>{entry.notes}</p>

              <p>
                Date:
                {" "}
                {entry.entry_date}
              </p>
            </div>
          ))
        )}
      </div>
    </PageLayout>
  );
}

export default WeightPage;