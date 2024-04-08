import { AboutMeSection } from "@/components/about-me-section";
import { ProjectsSection } from "@/components/projects-section";
import { ProfileSection } from "@/components/profile-section";

export default function Home() {
  return (
    <>
      <main className="w-full h-screen">
        <main className="h-full flex flex-col md:flex-row gap-4 py-4 px-4">
          <ProfileSection />
          <ProjectsSection />
          <AboutMeSection />
        </main>
      </main>
    </>
  );
}