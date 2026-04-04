import { GitHubCalendar } from "react-github-calendar";

export const GithubHeatmap = () => {
  return (
    <div className="flex flex-col gap-8">
      <GitHubCalendar username="dream-world-coder" year={2026} />
      <GitHubCalendar username="dream-world-coder" year={2025} />
      <GitHubCalendar username="dream-world-coder" year={2024} />
    </div>
  );
};
