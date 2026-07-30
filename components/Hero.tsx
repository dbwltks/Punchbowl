import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-stone-900 overflow-hidden">
      <Image
        src="/hero_2.jpg"
        alt="펀치볼 생태환경농업 주민공동체"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-stone-900/40 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.2] mb-6 tracking-tight drop-shadow-sm">
            지속가능한 생태영농,<br />
            아름다운 펀치볼을 위하여
          </h1>
          <p className="text-lg md:text-xl text-stone-200 mb-10 max-w-2xl leading-relaxed font-light drop-shadow">
            강원특별자치도 양구군 해안면의 생물권보전지역을 지킵니다. 
            주민의 자발적 참여와 연대를 바탕으로 친환경 농업을 실천하고 생태계를 복원하는 '펀치볼 생태환경농업 주민공동체'입니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-emerald-700 text-white px-8 py-4 text-[15px] font-semibold rounded-full hover:bg-emerald-800 transition-colors text-center shadow-lg shadow-emerald-900/20">
              공동체 참여하기
            </button>
            <button className="bg-white/10 text-white border border-white/20 px-8 py-4 text-[15px] font-medium rounded-full hover:bg-white/20 transition-colors text-center backdrop-blur-md">
              사업 안내 보기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
