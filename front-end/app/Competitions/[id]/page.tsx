import CompetitionDetailsHero from "./competition_details_components/CompetitionDetailsHero";
import CompetitionOverviewRules from "./competition_details_components/CompetitionOverviewRules";
import CompetitionTimeline from "./competition_details_components/CompetitionTimeline";
import CompetitionPrizes from "./competition_details_components/CompetitionPrizes";
import CompetitionFAQ from "./competition_details_components/CompetitionFAQ";
import CompetitionCTA from "./competition_details_components/CompetitionCTA";

export default function CompetitionDetailsPage() {
  return (
    <main className="pt-24 flex flex-col">
      <CompetitionDetailsHero />
      <CompetitionOverviewRules />
      <CompetitionTimeline />
      <CompetitionPrizes />
      <CompetitionFAQ />
      <CompetitionCTA />
    </main>
  );
}
