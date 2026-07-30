import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '펀치볼 사람들 (Punchbowl Neighbors)',
  description:
    '강원도 양구군 해안면 펀치볼 생태환경농업 주민공동체 공식 웹사이트입니다.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-[#F9F9F8] font-sans selection:bg-emerald-200 selection:text-emerald-900 text-stone-800">
        {children}
      </body>
    </html>
  );
}
