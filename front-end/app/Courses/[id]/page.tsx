import CourseDetailsHero from "./course_details_components/CourseDetailsHero";
import CourseAbout from "./course_details_components/CourseAbout";
import CourseOutcomes from "./course_details_components/CourseOutcomes";
import CourseCurriculum from "./course_details_components/CourseCurriculum";
import CourseSidebar from "./course_details_components/CourseSidebar";

export default function CourseDetailsPage({ params }: { params: { id: string } }) {
  return (
    <main className="pt-24 pb-xl bg-background">
      <CourseDetailsHero />
      <div className="max-w-container-max mx-auto px-gutter pb-xl -mt-[40px] relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl relative">
          {/* Left Column: Deep Dive Details */}
          <div className="lg:col-span-8 flex flex-col gap-xl">
            <CourseAbout />
            <CourseOutcomes />
            <CourseCurriculum />
          </div>

          {/* Right Column: Sticky Sidebar */}
          <div className="lg:col-span-4 relative">
            <CourseSidebar id={params.id} />
          </div>
        </div>
      </div>
    </main>
  );
}
