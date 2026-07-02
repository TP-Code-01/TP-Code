const memberImgs = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAlh13DQUdmhvUSGAFvGTHDvKu1WGuWdq-Bs7Gil22PSWZvFpw8te0Ot-jFlSbBq6vbE8BhooDwb0R3k3Gfe6RPpOLJD7NSgtPpXexTBFlZ3-A7TOktybm3z43VI19PAdxBmTu829JHbIeLLZernvGvd0ZTtcylFVxAkrbbSnkGP-as0lXXxvoK-Khl5zH_XAIwvvCdsu_0AX101gGscijFp9MhMRbLPQk5srClmGDup6WPk4USRbCiiSrAHU2O0DwVbfWCUuOc_ng_",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDI1zLzTNqMVtIIN1ZQbXkcabWzj5wi6TQ0JL7NFeq_Tzcs8MogaXgmak5Z_JLDdGFyS6Gye9uiyrjbKxSUNKcISQK1F5e_xACm89XMEm6Vd-mHSpYmdOzCll4k3Fd7Ob2f3zn0C2tb8QXQw4zSlGAPvcrw9LksM0xfJP6nELv3WFhqEaGuA8WexIpt3BizOXs2S8QSR6Ajr_Z0ZT7Hi9EpcFaS1oNtnPR3cRXbDC9fcQ0Wr6-hfHPwSQ1MaqnFdy8ZomPSaGnTPrEY",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBmq1hsr3HTqJt2aaK_bGnEXzzzI-VEhL9pZ0TmXcbeZxDALG9qXgJ6vC5jGb1Y7iAIeZ-GVyEeDQQHz-wrSyDeespXj8jm0M-rOc3J3OYXDqaCBNGFPLkCkM8cEwewdCUXzPIW8kov2f5zwXakxxNMELZfdCNxBGxNMlV4_BCA2SHeYTArGHP8u8hS68zfQ656hoKQkWpuawAl9jQRrSswZCeDBmmohYCxl9Y674r6PlLtLJk17kQ9pINxltxFoXokyw5EMKtrgbQ8",
];

const headImg = "https://lh3.googleusercontent.com/aida-public/AB6AXuAocHkcufaGmNFVbakR8tVHQF04d1G1Pwmjb7HTMeyk1HAAzyOYB9R-gNsv8hb4hbhvKCMa-0L9p4IgqRkvPXlh0i_eXI3HVB0ygdo-xmchBhg3xJAMRsZ3LS5Nf3UAUhbSvYMmafFYsz3LwiaN6_K9Nbvq6Iv74roN19yGJaeJkpBEo-xCfQt-WlxtEmaWU5klHKhLFrYEeQbrA_eK83JOyfREizMqP8P-mfZEjBvHH0I1myKqgDc2I76BjY7Mt3uqeJmlp5ZgTAHo";

const committees = [
  {
    title: "Programming Committee",
    titleAr: "لجنة البرمجة",
    icon: "terminal",
    head: { name: "Omar Tariq", role: "Head of Programming", icons: ["code", "public"] },
    members: [
      { name: "Ali Hassan", role: "Programming Member" },
      { name: "Fatima Noor", role: "Programming Member" },
      { name: "Zaid Al-Farsi", role: "Programming Member" },
    ],
  },
  {
    title: "HR Committee",
    titleAr: "لجنة الموارد البشرية",
    icon: "groups",
    head: { name: "Yusuf Ibrahim", role: "Head of HR", icons: ["mail", "public"] },
    members: [
      { name: "Tariq Jameel", role: "HR Member" },
      { name: "Aisha Rahman", role: "HR Member" },
      { name: "Kareem Ali", role: "HR Member" },
    ],
  },
  {
    title: "Graphic Design Committee",
    titleAr: "لجنة التصميم الجرافيكي",
    icon: "palette",
    head: { name: "Bilal Ahmed", role: "Head of Design", icons: ["brush", "public"] },
    members: [
      { name: "Hamza Said", role: "Design Member" },
      { name: "Nour Youssef", role: "Design Member" },
      { name: "Rami Tarek", role: "Design Member" },
    ],
  },
  {
    title: "Marketing Committee",
    titleAr: "لجنة التسويق",
    icon: "campaign",
    head: { name: "Sami Khalid", role: "Head of Marketing", icons: ["trending_up", "public"] },
    members: [
      { name: "Jalal Fadel", role: "Marketing Member" },
      { name: "Lina Sami", role: "Marketing Member" },
      { name: "Tarik Nabil", role: "Marketing Member" },
    ],
  },
];

export default function TeamCommittees() {
  return (
    <>
      {committees.map((committee) => (
        <section key={committee.title} className="max-w-container-max mx-auto px-gutter mb-xl">
          {/* Section Header */}
          <div className="mb-lg border-b border-surface-variant pb-sm flex justify-between items-end">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-primary">{committee.title}</h2>
              <p className="font-arabic-headline text-arabic-headline text-on-surface-variant mt-1">{committee.titleAr}</p>
            </div>
            <span className="material-symbols-outlined text-display-lg text-surface-container-highest">{committee.icon}</span>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-12 gap-md">
            {/* Head Card */}
            <div className="col-span-12 lg:col-span-4 bg-surface-container-lowest border border-outline-variant rounded-xl p-md hover:shadow-[0_10px_25px_rgba(13,0,77,0.05)] transition-all duration-300 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-secondary-container"></div>
              <div className="inline-block px-3 py-1 bg-surface-container rounded-full font-label-sm text-label-sm text-on-surface-variant mb-md">Head of Department</div>
              <img className="w-24 h-24 rounded-full mx-auto mb-sm object-cover shadow-sm" alt={committee.head.name} src={headImg} />
              <h3 className="font-headline-md text-headline-md text-primary">{committee.head.name}</h3>
              <p className="font-body-md text-body-md text-secondary-container mb-sm">{committee.head.role}</p>
              <div className="flex justify-center space-x-2 mt-md">
                {committee.head.icons.map((icon) => (
                  <a target="_blank" key={icon} className="text-on-surface-variant hover:text-primary transition-colors" href="https://linkedin.com">
                    <span className="material-symbols-outlined">{icon}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Members Grid */}
            <div className="col-span-12 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-md">
              {committee.members.map((member, idx) => (
                <div key={member.name} className="bg-surface border border-surface-variant rounded-lg p-sm flex items-center space-x-sm hover:shadow-[0_10px_25px_rgba(13,0,77,0.05)] transition-shadow">
                  <img className="w-16 h-16 rounded-full object-cover" alt={member.name} src={memberImgs[idx % memberImgs.length]} />
                  <div>
                    <h4 className="font-body-lg text-body-lg text-primary font-semibold">{member.name}</h4>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
