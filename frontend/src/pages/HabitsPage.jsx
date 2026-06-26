import { useEffect, useState } from "react";

import {
  getHabits,
  createHabit,
  completeHabit,
} from "../services/habitService";

import PageLayout from "../components/PageLayout";
import EmptyState from "../components/EmptyState";
import CustomButton from "../components/CustomButton";

function HabitsPage() {
  const [habits, setHabits] = useState([]);
  const [habitName, setHabitName] =
    useState("");

  const [search, setSearch] =
    useState("");

  useEffect(() => {
    fetchHabits();
  }, []);

  const fetchHabits = async () => {
    try {
      const data = await getHabits();
      setHabits(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddHabit = async () => {
    if (!habitName) return;

    try {
      await createHabit({
        habitName,
        xpAwarded: 50,
      });

      setHabitName("");
      fetchHabits();
    } catch (error) {
      console.log(error);
    }
  };

  const handleComplete = async (id) => {
    try {
      await completeHabit(id);
      fetchHabits();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PageLayout>
      <h1>🔥 Habits</h1>

      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Enter habit name"
          value={habitName}
          onChange={(e) =>
            setHabitName(e.target.value)
          }
          style={{
            padding: "12px",
            width: "300px",
            borderRadius: "8px",
            border: "none",
            marginRight: "10px",
          }}
        />

        <CustomButton
          text="Add Habit"
          onClick={handleAddHabit}
        />
      </div>

      <input
        placeholder="Search Habits"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        style={{
          padding: "12px",
          marginTop: "20px",
          width: "300px",
          borderRadius: "10px",
          border: "none",
        }}
      />

      <div style={{ marginTop: "40px" }}>
        {habits.length === 0 ? (
          <EmptyState message="No habits yet. Create your first habit!" />
        ) : (
          habits
            .filter((habit) =>
              habit.habit_name
                .toLowerCase()
                .includes(
                  search.toLowerCase()
                )
            )
            .map((habit) => (
              <div
                key={habit.id}
                style={{
                  background: "#1e293b",
                  padding: "20px",
                  borderRadius: "10px",
                  marginBottom: "15px",
                }}
              >
                <h3>
                  {habit.habit_name}
                </h3>

                <p>
                  XP: {habit.xp_awarded}
                </p>

                <CustomButton
                  text="Complete"
                  onClick={() =>
                    handleComplete(habit.id)
                  }
                />
              </div>
            ))
        )}
      </div>
    </PageLayout>
  );
}

export default HabitsPage;