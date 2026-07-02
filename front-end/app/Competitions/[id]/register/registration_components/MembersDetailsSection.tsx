"use client";

interface Member {
  name: string;
  email: string;
}

interface MembersDetailsSectionProps {
  members: Member[];
  onAdd: () => void;
  onRemove: (idx: number) => void;
}

export default function MembersDetailsSection({ members, onAdd, onRemove }: MembersDetailsSectionProps) {
  return (
    <section className="flex flex-col gap-md border-b border-surface-variant pb-xl">
      <div className="flex items-center justify-between mb-xs">
        <div className="flex items-center gap-sm text-primary">
          <span className="material-symbols-outlined text-[28px]">group_add</span>
          <h3 className="font-headline-md text-headline-md">
            3. Members Details <span className="font-arabic-body text-[20px] text-on-surface-variant ml-xs">بيانات الأعضاء</span>
          </h3>
        </div>
        {members.length < 3 && (
          <button
            className="text-secondary font-label-sm text-label-sm flex items-center gap-xs hover:bg-secondary-fixed py-xs px-sm rounded-md transition-colors"
            type="button"
            onClick={onAdd}
          >
            <span className="material-symbols-outlined text-[16px]">add</span> Add Member
          </button>
        )}
      </div>
      <div className="flex flex-col gap-md">
        {members.map((_, idx) => (
          <div key={idx} className="bg-surface p-md rounded-lg border border-outline-variant border-dashed flex flex-col gap-md">
            <div className="flex justify-between items-center pb-sm border-b border-surface-variant">
              <h4 className="font-label-sm text-label-sm text-on-surface">Member {idx + 1}</h4>
              <button
                className="text-error hover:bg-error-container p-xs rounded-full transition-colors"
                type="button"
                onClick={() => onRemove(idx)}
              >
                <span className="material-symbols-outlined text-[18px]">delete</span>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
              <div className="flex flex-col gap-xs">
                <label className="font-label-sm text-label-sm text-on-surface-variant">Name</label>
                <input className="px-md py-sm rounded-lg border border-outline-variant bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent font-body-md text-body-md transition-shadow w-full" type="text" />
              </div>
              <div className="flex flex-col gap-xs">
                <label className="font-label-sm text-label-sm text-on-surface-variant">Email</label>
                <input className="px-md py-sm rounded-lg border border-outline-variant bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent font-body-md text-body-md transition-shadow w-full" type="email" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center py-sm">
        <span className="font-label-sm text-label-sm text-outline-variant italic">Up to 3 additional members allowed.</span>
      </div>
    </section>
  );
}
