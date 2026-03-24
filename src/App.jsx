import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cuisines from './components/Cuisines';
import MenuPreview from './components/MenuPreview';
import Amenities from './components/Amenities';
import Footer from './components/Footer';
import FloatingBar from './components/FloatingBar';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Cuisines />
        <MenuPreview />
        <Amenities />
      </main>
      <Footer />
      <FloatingBar />
    </div>
  );
}
