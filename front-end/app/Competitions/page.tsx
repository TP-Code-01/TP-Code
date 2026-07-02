import CompetitionsHero from "./competitions_components/CompetitionsHero";
import CompetitionsGrid from "./competitions_components/CompetitionsGrid";

export default function CompetitionsPage() {
  return (
    <main className="flex-grow flex flex-col pt-[80px]">
      <CompetitionsHero />
      <CompetitionsGrid />
    </main>
  );
}
