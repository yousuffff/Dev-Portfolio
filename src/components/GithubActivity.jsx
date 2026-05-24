import { useEffect, useState, useRef } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { motion } from "framer-motion";
import {
  FiFolder,
  FiUsers,
  FiGithub,
  FiUserPlus,
} from "react-icons/fi";

function GitHubActivity() {
  const [githubData, setGithubData] = useState(null);
  const [loading, setLoading] = useState(true);
  const ref = useRef(null);

  useEffect(() => {
    async function fetchGithubData() {
      try {
        const res = await fetch("https://api.github.com/users/yousuffff");
        const data = await res.json();

        setGithubData({
          name: data.name,
          avatar: data.avatar_url,
          bio: data.bio,
          repos: data.public_repos,
          followers: data.followers,
          following: data.following,
          profile: data.html_url,
        });
      } catch (error) {
        console.error("GitHub fetch failed:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchGithubData();
  }, []);

  if (loading) return <p>Loading GitHub data...</p>;

  const stats = [
    {
      num: githubData.repos,
      label: "Public Repos",
      icon: <FiFolder />,
    },
    {
      num: githubData.followers,
      label: "Followers",
      icon: <FiUsers />,
    },
    {
      num: githubData.following,
      label: "Following",
      icon: <FiUserPlus />,
    },
  ];

  return (
    <section className="github-section section" ref={ref} id="github">
      <div className="sec-header">
        <div>
          <div className="sec-tag">
            <FiGithub />
            <span>Open Source</span>
          </div>
          <div className="sec-title">GitHub Activity</div>
        </div>
      </div>

      <div className="github-inner">
        {/* Profile Card */}
        <motion.div
          className="github-profile"
          whileHover={{ y: -2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div>
            <div className="github-avatar-wrap">
              <img
                src={githubData.avatar}
                alt={githubData.name}
                className="github-avatar"
              />
              <div>
                <div className="github-name">{githubData.name}</div>
                <div className="github-handle">@yousuffff</div>
              </div>
            </div>

            <div className="github-bio" style={{ marginTop: 16 }}>
              {githubData.bio}
            </div>
          </div>

          <a
            href={githubData.profile}
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            View Profile ↗
          </a>
        </motion.div>

        {/* Stats */}
        <div className="github-stats-col">
          {stats.map((s) => (
            <motion.div key={s.label} className="github-stat">
              <div className="github-stat-info">
                <div className="github-stat-num">{s.num}+</div>
                <div className="github-stat-label">{s.label}</div>
              </div>
              <div className="github-stat-icon">{s.icon}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contribution Heatmap */}
      <div className="contrib-card">
        <div className="contrib-header">
          <span className="contrib-title">
            Contribution Activity — Last 12 Months
          </span>
        </div>

        <GitHubCalendar
          username="yousuffff"
          blockSize={11}
          blockMargin={3}
          fontSize={9}
          hideColorLegend
          colorScheme="dark"
          theme={{
            light: [
              "#e5e7eb", // empty
              "#86efac", // light green (better visibility)
              "#4ade80", // medium
              "#22c55e", // strong
              "#15803d", // dark
            ],
            dark: ["var(--bg)", "#14532d", "#16a34a", "#22c55e", "#4ade80"],
          }}
          transformData={(data) => {
            const sixMonthsAgo = new Date();
            sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 12);

            return data.filter((day) => new Date(day.date) >= sixMonthsAgo);
          }}
        />
      </div>
    </section>
  );
}

export default GitHubActivity;
