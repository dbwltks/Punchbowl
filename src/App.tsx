import Header from './components/Header';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Programs from './components/Programs';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F9F9F8] font-sans selection:bg-emerald-200 selection:text-emerald-900 text-stone-800">
      <Header />
      <main>
        <Hero />
        <Mission />
        <Programs />
      </main>
      <Footer />
    </div>
  );
}
