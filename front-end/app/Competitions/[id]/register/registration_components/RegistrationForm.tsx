"use client";
import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import TeamInfoSection from "./TeamInfoSection";
import LeaderDetailsSection from "./LeaderDetailsSection";
import MembersDetailsSection from "./MembersDetailsSection";
import TechnicalBackgroundSection from "./TechnicalBackgroundSection";
import AgreementSection from "./AgreementSection";

export default function RegistrationForm() {
  const [members, setMembers] = useState([{ name: "", email: "" }]);
  const params = useParams();
  const id = params?.id as string;

  const addMember = () => {
    if (members.length < 3) setMembers([...members, { name: "", email: "" }]);
  };

  const removeMember = (idx: number) => {
    setMembers(members.filter((_, i) => i !== idx));
  };

  return (
    <div className="w-full max-w-4xl bg-surface-container-lowest border border-surface-variant rounded-xl shadow-[0px_10px_25px_rgba(13,0,77,0.05)] overflow-hidden">
      <form className="p-lg flex flex-col gap-xl">
        <TeamInfoSection />
        <LeaderDetailsSection />
        <MembersDetailsSection members={members} onAdd={addMember} onRemove={removeMember} />
        <TechnicalBackgroundSection />
        <AgreementSection />

        {/* Actions */}
        <div className="flex flex-col-reverse md:flex-row justify-end items-center gap-md mt-md pt-lg border-t border-surface-variant">
          <Link
            href={`/Competitions/${id}`}
            className="w-full md:w-auto font-label-sm text-label-sm text-secondary border-2 border-secondary px-lg py-sm rounded-lg hover:bg-secondary-fixed transition-colors text-center flex items-center justify-center gap-sm"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            Back to Competition / العودة
          </Link>
          <button
            className="w-full md:w-auto font-label-sm text-label-sm bg-primary-container text-on-primary-container px-lg py-sm rounded-lg hover:opacity-90 shadow-md hover:shadow-lg transition-all text-center flex items-center justify-center gap-sm"
            type="submit"
          >
            Submit Registration / إرسال
            <span className="material-symbols-outlined">send</span>
          </button>
        </div>
      </form>
    </div>
  );
}
