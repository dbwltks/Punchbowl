import { Droplets, Sprout, Users } from 'lucide-react';

export default function Mission() {
  const principles = [
    {
      icon: <Sprout className="w-7 h-7 text-emerald-700" strokeWidth={1.5} />,
      title: "친환경 생태영농 실천",
      desc: "농약, 비료 등으로 인한 비점오염원을 저감하고, 흙탕물 유출 방지 및 토양 관리 컨설팅을 통해 지속가능한 농업 환경을 조성합니다."
    },
    {
      icon: <Droplets className="w-7 h-7 text-emerald-700" strokeWidth={1.5} />,
      title: "수환경 및 생태계 복원",
      desc: "양구군 내 하천 수질 오염원을 모니터링하고 자생 동식물 서식지를 보호하여 생물다양성을 증진시킵니다."
    },
    {
      icon: <Users className="w-7 h-7 text-emerald-700" strokeWidth={1.5} />,
      title: "주민 연대와 지역공동체",
      desc: "주민 환경감시단 운영 및 생태 교육을 진행하며, 민·관·학 협력 체계를 구축해 펀치볼 지역의 자발적 발전을 이끕니다."
    }
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-[#F9F9F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-emerald-600 rounded-full"></span>
              설립 목적
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-stone-800 leading-[1.3] mb-6 tracking-tight">
              생물권보전지역 내<br />주민공동체 활성화
            </h3>
            <p className="text-lg text-stone-600 leading-relaxed mb-8">
              펀치볼 지역의 농업활동에서 발생하는 오염원을 저감하고 생태계를 복원하기 위해 양구군 주민들의 자발적 참여와 연대를 바탕으로 공익 활동을 펼칩니다.
            </p>
            <div className="w-20 h-[2px] bg-emerald-700/20"></div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 flex flex-col gap-12">
            {principles.map((p, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm border border-stone-100 group-hover:border-emerald-200 group-hover:shadow-md transition-all duration-300">
                  {p.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-stone-800 mb-3 tracking-tight group-hover:text-emerald-700 transition-colors">{p.title}</h4>
                  <p className="text-stone-600 leading-relaxed text-[15px]">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
