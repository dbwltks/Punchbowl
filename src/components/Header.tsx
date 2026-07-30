import { Menu, Leaf } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Leaf className="w-6 h-6 text-emerald-700" strokeWidth={2.5} />
          <span className="text-xl font-bold text-stone-800 tracking-tight">펀치볼 사람들</span>
        </div>
        
        <nav className="hidden md:flex gap-10 text-[15px] font-medium text-stone-600">
          <a href="#about" className="hover:text-emerald-700 transition-colors">단체 소개</a>
          <a href="#programs" className="hover:text-emerald-700 transition-colors">주요 활동</a>
          <a href="#news" className="hover:text-emerald-700 transition-colors">투명경영</a>
          <a href="#contact" className="hover:text-emerald-700 transition-colors">오시는 길</a>
        </nav>
        
        <div className="hidden md:flex items-center gap-6">
          <button className="text-[15px] font-medium text-stone-500 hover:text-stone-800 transition-colors">로그인</button>
          <button className="bg-emerald-700 text-white px-6 py-2.5 text-[15px] font-semibold rounded-full hover:bg-emerald-800 transition-colors shadow-sm">
            후원하기
          </button>
        </div>
        
        <button className="md:hidden text-stone-800 p-2">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}
