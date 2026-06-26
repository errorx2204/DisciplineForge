import {
  useEffect,
  useState,
} from "react";

import { getProfile }
  from "../services/authService";

import PageLayout from "../components/PageLayout";
import RankBadge from "../components/RankBadge";

function ProfilePage() {
  const [profile, setProfile] =
    useState(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const data =
        await getProfile();

      setProfile(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PageLayout>
      <h1>👤 Profile</h1>

      {profile && (
        <div
          style={{
            background: "#1e293b",
            padding: "30px",
            borderRadius: "20px",
            maxWidth: "500px",
            marginTop: "30px",
          }}
        >
          <h2>{profile.name}</h2>

          <p>Email: {profile.email}</p>

          <p>⚡ XP: {profile.xp}</p>

          <p>🔥 Streak: {profile.streak}</p>

          <div
            style={{
              marginTop: "20px",
            }}
          >
            <RankBadge
              rank={profile.rank}
            />
          </div>
        </div>
      )}
    </PageLayout>
  );
}

export default ProfilePage;