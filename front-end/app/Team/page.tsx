import TeamHero from "./team_components/TeamHero";
import TeamLeadership from "./team_components/TeamLeadership";
import TeamCommittees from "./team_components/TeamCommittee";

export default function TeamPage() {
  return (
    <main className="flex-grow pt-24 pb-xl w-full">
      <TeamHero />
      <TeamLeadership />
      <TeamCommittees />
    </main>
  );
}
