import VideoPlayerSection from "./course_player_components/VideoPlayerSection";
import PlayerTabs from "./course_player_components/PlayerTabs";
import PlayerSidebar from "./course_player_components/PlayerSidebar";

export default function CoursePlayerPage() {
  return (
    <main className="flex-grow pt-24 pb-lg px-4 md:px-gutter max-w-[1600px] mx-auto w-full flex flex-col lg:flex-row gap-gutter">
      {/* Left Column: Video Player & Tabs */}
      <div className="flex-grow w-full lg:w-2/3 flex flex-col gap-6">
        <VideoPlayerSection />
        <PlayerTabs />
      </div>

      {/* Right Column: Curriculum Sidebar */}
      <PlayerSidebar />
    </main>
  );
}
