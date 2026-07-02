export default function HeroSection() {
  return (
    <section className="px-gutter py-xl max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-lg items-center">
      <div className="space-y-md">
        <div className="space-y-sm">
          <h1 className="font-display-lg text-display-lg text-primary">Empowering the Next Generation of Tech Leaders</h1>
          <h2 className="font-arabic-headline text-arabic-headline text-primary" dir="rtl">تمكين الجيل القادم من قادة التكنولوجيا</h2>
        </div>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[600px]">
          Join TP Code, the premier student activity dedicated to bridging the gap between academic theory and real-world technological excellence.
        </p>
        <div className="flex flex-wrap gap-sm">
          <button className="bg-[#0D004D] text-white px-lg py-sm rounded-lg font-headline-md text-headline-md hover:-translate-y-1 transition-transform shadow-md">Join Us</button>
          <button className="bg-transparent text-[#6366F1] border-2 border-[#6366F1] px-lg py-sm rounded-lg font-headline-md text-headline-md hover:bg-[#6366F1]/10 transition-colors">Explore Courses</button>
        </div>
      </div>
      <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          alt="A dynamic shot of a diverse group of college students engaged in a coding bootcamp."
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCadpft2PkFW2nDPiRKSFaJdCKrLnEhdXcU0wUykP0U94TlUmr9QxaMVvLxrq7iUX7dPl42tjgP92_gUptWr2xtcPaOxVkOhJtnnm_USazHURirA9vGwhq7cZvKo99w0KCfL7-LKap7FY5Rt_vP6daJKqik-2fzYmQCvx5Yf09Sc7r4a-lLfGpXEBHra4vxBw5JWbpGk6WXinhaet8jGphVOW6ad7aaiwq9GWKmRkzcDjPytWsw4r1oKdYxxIRmORhBAxKCng1J6s_"
        />
      </div>
    </section>
  );
}
