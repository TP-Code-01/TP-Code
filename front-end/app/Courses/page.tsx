import CoursesHero from "./courses_components/CoursesHero";
import CoursesFilters from "./courses_components/CoursesFilters";
import CoursesGrid from "./courses_components/CoursesGrid";

export default function CoursesPage() {
  return (
    <main className="flex-grow pt-[80px] w-full min-h-screen">
      <CoursesHero />
      <CoursesFilters />
      <CoursesGrid />
    </main>
  );
}
