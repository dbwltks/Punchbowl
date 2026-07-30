import Image from 'next/image';

export default function Programs() {
  const programs = [
    {
      category: "비점오염 저감",
      title: "친환경·생태영농 추진",
      desc: "완충녹지대, 침사지 조성 및 밭 기반 정비를 통해 토사 유출을 방지하고 유기농·생태영농 기술을 보급합니다.",
      img: "https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?q=80&w=800&auto=format&fit=crop"
    },
    {
      category: "환경 모니터링",
      title: "주민참여 환경감시단",
      desc: "주민 주도의 비점오염원 및 하천 수질 모니터링을 진행하고 맞춤형 생태·환경 교육 프로그램을 운영합니다.",
      img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop"
    },
    {
      category: "지역 자원 연계",
      title: "생태 자원 및 문화 계승",
      desc: "펀치볼 지역의 생물권 자연생태와 문화 자원을 보전하며, 지속가능한 생태관광 및 마을 조성을 지원합니다.",
      img: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="programs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h3 className="text-3xl font-bold text-stone-800 tracking-tight mb-4">현재 진행 중인 프로젝트</h3>
            <p className="text-stone-500 text-lg">여러분의 관심과 참여로 만들어가는 푸른 변화의 현장입니다.</p>
          </div>
          <button className="text-[15px] font-medium text-emerald-700 hover:text-emerald-800 transition-colors flex items-center gap-1 pb-1">
            전체 프로젝트 보기 &rarr;
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {programs.map((prog, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-stone-100 mb-6 relative shadow-sm">
                <Image
                  src={prog.img}
                  alt={prog.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 bg-white/95 text-emerald-800 px-4 py-1.5 text-xs font-bold rounded-full backdrop-blur-md shadow-sm">
                  {prog.category}
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-stone-800 mb-3 group-hover:text-emerald-700 transition-colors tracking-tight">
                  {prog.title}
                </h4>
                <p className="text-stone-500 leading-relaxed text-[15px]">
                  {prog.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
