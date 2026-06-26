import {
  useEffect,
  useState,
} from "react";

import {
  getAssignments,
  createAssignment,
  completeAssignment,
} from "../services/assignmentService";

import PageLayout from "../components/PageLayout";
import EmptyState from "../components/EmptyState";
import CustomButton from "../components/CustomButton";

function AssignmentsPage() {
  const [assignments, setAssignments] =
    useState([]);

  const [title, setTitle] =
    useState("");

  const [subject, setSubject] =
    useState("");

  const [search, setSearch] =
    useState("");

  useEffect(() => {
    fetchAssignments();
  }, []);

  const fetchAssignments =
    async () => {
      try {
        const data =
          await getAssignments();

        setAssignments(data);
      } catch (error) {
        console.log(error);
      }
    };

  const handleAddAssignment =
    async () => {
      if (!title || !subject)
        return;

      try {
        await createAssignment({
          title,
          subject,
          deadline: "2026-12-31",
          priority: "Red",
        });

        setTitle("");
        setSubject("");

        fetchAssignments();
      } catch (error) {
        console.log(error);
      }
    };

  const handleComplete =
    async (id) => {
      try {
        await completeAssignment(id);

        fetchAssignments();
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <PageLayout>
      <h1>📚 Assignments</h1>

      <div style={{ marginTop: "20px" }}>
        <input
          placeholder="Subject"
          value={subject}
          onChange={(e) =>
            setSubject(e.target.value)
          }
          style={{
            padding: "12px",
            marginRight: "10px",
          }}
        />

        <input
          placeholder="Title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          style={{
            padding: "12px",
            marginRight: "10px",
          }}
        />

        <CustomButton
          text="Add Assignment"
          onClick={handleAddAssignment}
        />
      </div>

      <input
        placeholder="Search Assignments"
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
        {assignments.length === 0 ? (
          <EmptyState message="No assignments added yet." />
        ) : (
          assignments
            .filter((assignment) =>
              assignment.title
                .toLowerCase()
                .includes(
                  search.toLowerCase()
                )
            )
            .map((assignment) => (
              <div
                key={assignment.id}
                style={{
                  background: "#1e293b",
                  padding: "20px",
                  borderRadius: "10px",
                  marginBottom: "15px",
                }}
              >
                <h3>
                  {assignment.title}
                </h3>

                <p>
                  Subject:
                  {assignment.subject}
                </p>

                <CustomButton
                  text="Complete"
                  onClick={() =>
                    handleComplete(
                      assignment.id
                    )
                  }
                />
              </div>
            ))
        )}
      </div>
    </PageLayout>
  );
}

export default AssignmentsPage;