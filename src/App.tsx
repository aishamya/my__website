import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProfileSection } from './components/ProfileSection';
import { QuantMindsetSection } from './components/QuantMindsetSection';
import { EducationSection } from './components/EducationSection';
import { SkillsSection } from './components/SkillsSection';
import { TrajectorySection } from './components/TrajectorySection';
import { ProjectsSection } from './components/ProjectsSection';
import { LeadershipSection } from './components/LeadershipSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { ProjectModal } from './components/ProjectModal';
import { Toast } from './components/Toast';
import { ProjectItem } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleScrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-slate-100 relative selection:bg-sky-500/30 selection:text-sky-200">
      {/* Background Dot Matrix Pattern */}
      <div className="fixed inset-0 bg-grid-matrix opacity-70 pointer-events-none z-0" />

      {/* Atmospheric Ambient Glows (Frozen Light theme) */}
      <div className="fixed top-[-10%] left-[-10%] w-[45vw] h-[45vw] rounded-full bg-sky-500/5 blur-[140px] pointer-events-none z-0" />
      <div className="fixed top-[40%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-sky-400/5 blur-[160px] pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-purple-500/5 blur-[150px] pointer-events-none z-0" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar onOpenProjects={handleScrollToProjects} />

        <main className="flex-grow">
          <HeroSection />
          <ProfileSection />
          <QuantMindsetSection />
          <EducationSection />
          <SkillsSection />
          <TrajectorySection />
          <ProjectsSection onSelectProject={(p) => setSelectedProject(p)} />
          <LeadershipSection />
          <CertificationsSection />
          <ContactSection onShowToast={showToast} />
        </main>
      </div>

      {/* Interactive Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Toast Notification */}
      <Toast message={toastMessage} />
    </div>
  );
}
