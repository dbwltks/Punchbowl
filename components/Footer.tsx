export default function Footer() {
  return (
    <footer className="bg-stone-950 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl font-bold text-white tracking-tight">펀치볼 사람들</span>
            </div>
            <p className="text-stone-400 mb-6 leading-relaxed max-w-sm text-[15px]">
              펀치볼 생태환경농업 주민공동체. 생태계 복원과 환경 보전, 그리고 주민공동체 활성화를 위해 양구군민들이 자발적으로 함께합니다.
            </p>
            <div className="text-stone-400 text-sm p-5 bg-stone-900 rounded-2xl">
              주사무소: 강원특별자치도 양구군 해안면<br/>단체 후원 및 참여 문의는 우측 연락처를 확인해주세요.
            </div>
          </div>
          
          <div className="md:col-span-3 md:col-start-7">
            <h3 className="text-stone-100 font-bold mb-6 text-[15px]">바로가기</h3>
            <ul className="space-y-4 text-[15px] text-stone-400">
              <li><a href="#" className="hover:text-white transition-colors">단체 소개 및 연혁</a></li>
              <li><a href="#" className="hover:text-white transition-colors">사업 소개</a></li>
              <li><a href="#" className="hover:text-white transition-colors">생태·환경 교육</a></li>
              <li><a href="#" className="hover:text-white transition-colors">공지사항 및 자료실</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-stone-100 font-bold mb-6 text-[15px]">문의하기</h3>
            <ul className="space-y-3 text-[15px] text-stone-400">
              <li className="text-white text-2xl font-bold tracking-tight mb-2">양구군 주민공동체</li>
              <li>평일 09:00 - 18:00</li>
              <li>(주말 및 공휴일 휴무)</li>
              <li className="pt-2">이메일: contact@punchbowl-neighbors.org</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-900 text-[13px] text-stone-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap gap-4 md:gap-6">
            <a href="#" className="text-stone-300 font-bold hover:text-white transition-colors">정관 및 규정</a>
            <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
          </div>
          <p>&copy; 2026 펀치볼 사람들 (Punchbowl Neighbors). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
