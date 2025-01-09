import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/common/Button';
import { Link } from 'react-router-dom';

interface VideoChapter {
  time: string;
  seconds: number;
  title: string;
}

const chapters: VideoChapter[] = [
  { time: "0:00", seconds: 0, title: "Giriş" },
  { time: "0:12", seconds: 12, title: "Yapay Zeka Destekli Çözüm" },
  { time: "0:17", seconds: 17, title: "Neden TalkSphere?" },
  { time: "0:27", seconds: 27, title: "Çoklu Yapay Zeka Seçenekleri" },
  { time: "0:32", seconds: 32, title: "Dökümanlardan Otomatik Öğrenme" },
  { time: "0:41", seconds: 41, title: "Fiyatlandırma" },
  { time: "0:51", seconds: 51, title: "Sürekli Geliştirme" },
  { time: "0:59", seconds: 59, title: "Örnek" },
  { time: "1:05", seconds: 65, title: "Çıkış" }
];

const HowItWorks = () => {
  const [activeChapter, setActiveChapter] = useState(0);
  const videoRef = useRef<HTMLIFrameElement>(null);

  const handleChapterClick = (seconds: number, index: number) => {
    setActiveChapter(index);
    if (videoRef.current?.contentWindow) {
      videoRef.current.contentWindow.postMessage(
        JSON.stringify({
          event: 'command',
          func: 'seekTo',
          args: [seconds, true]
        }),
        '*'
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E6F2E6] via-[#A8D5A2] to-[#2D4739]">
      {/* Header Section */}
      <div className="pt-32 pb-16 text-center">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-[#2F2F2F] mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          TalkSphere<br />
          <span className="text-[#058C42]">Müşteri Hizmetlerinin Geleceği</span>
        </motion.h1>
        <motion.div 
          className="inline-block bg-[#058C42]/10 rounded-full px-4 py-2 text-[#058C42] border border-[#058C42]/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#058C42] rounded-full animate-pulse"></span>
            Demo
          </span>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Video Chapters */}
          <motion.div 
            className="lg:col-span-3 bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-[#A8D5A2] shadow-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-[#058C42] text-sm font-medium mb-4 uppercase tracking-wider">Video Bölümleri</h3>
            <div className="space-y-2">
              {chapters.map((chapter, index) => (
                <div 
                  key={index}
                  onClick={() => handleChapterClick(chapter.seconds, index)}
                  className={`flex items-center gap-3 text-[#2F2F2F] hover:text-[#058C42] transition-all p-2 rounded-lg cursor-pointer hover:bg-[#E6F2E6]
                    ${activeChapter === index ? 'text-[#058C42] bg-[#E6F2E6] shadow-md' : ''}`}
                >
                  <span className="text-sm font-mono">{chapter.time}</span>
                  <span className="text-sm">{chapter.title}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Video Player */}
          <motion.div 
            className="lg:col-span-9"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl bg-white/80 backdrop-blur-sm border border-[#A8D5A2]">
              <iframe
                ref={videoRef}
                src="https://www.youtube.com/embed/cr1NvR7LcIk?enablejsapi=1"
                title="TalkSphere Nasıl Çalışır?"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Call to Action */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[#A8D5A2] hover:border-[#058C42] transition-colors shadow-lg">
                <h3 className="text-[#2F2F2F] font-semibold mb-2">Satış ekibiyle görüşün</h3>
                <p className="text-[#2F2F2F]/70 text-sm mb-4">Sektörünüze özel kullanım senaryolarını keşfedin.</p>
                <Link to="/contact" state={{ message: "Satış ekibiyle görüşmek istiyorum" }}>
                  <Button variant="primary" className="w-full bg-[#058C42] hover:bg-[#058C42]/90 text-white transition-all duration-300">
                    İletişime geçin
                  </Button>
                </Link>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[#A8D5A2] hover:border-[#058C42] transition-colors shadow-lg">
                <h3 className="text-[#2F2F2F] font-semibold mb-2">Ücretsiz deneyin</h3>
                <p className="text-[#2F2F2F]/70 text-sm mb-4">14 günlük deneme sürümünü başlatın, kredi kartı gerekmez.</p>
                <Link to="/contact" state={{ message: "Demo talebi" }}>
                  <Button 
                    variant="outline" 
                    className="w-full bg-white hover:bg-[#1c703d] border-2 border-[#058C42] text-[#058C42] font-medium transition-all duration-300 py-3 px-6 rounded-lg"
                  >
                    Demo talep edin
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks; 