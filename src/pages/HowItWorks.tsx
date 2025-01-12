import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/common/Button';
import { Link } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';

const HowItWorks = () => {
  const [activeChapter, setActiveChapter] = useState(0);
  const videoRef = useRef<HTMLIFrameElement>(null);
  const { t } = useTranslation();

  const chapters = t('how_it_works.chapters', { returnObjects: true }) as Array<{
    time: string;
    seconds: number;
    title: string;
  }>;

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
          {t('how_it_works.title') as string}<br />
          <span className="text-[#058C42]">{t('how_it_works.subtitle') as string}</span>
        </motion.h1>
        <motion.div 
          className="inline-block bg-[#058C42]/10 rounded-full px-4 py-2 text-[#058C42] border border-[#058C42]/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#058C42] rounded-full animate-pulse"></span>
            {t('how_it_works.demo_label')}
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
            <h3 className="text-[#058C42] text-sm font-medium mb-4 uppercase tracking-wider">
              {t('how_it_works.chapters_title')}
            </h3>
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
                src={`${t('how_it_works.video_url')}?enablejsapi=1`}
                title="TalkSphere"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Call to Action */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[#A8D5A2] hover:border-[#058C42] transition-colors shadow-lg">
                <h3 className="text-[#2F2F2F] font-semibold mb-2">{t('how_it_works.cta.sales.title')}</h3>
                <p className="text-[#2F2F2F]/70 text-sm mb-4">{t('how_it_works.cta.sales.description')}</p>
                <Link to="/contact" state={{ message: t('how_it_works.cta.sales.message') }}>
                  <Button variant="primary" className="w-full bg-[#058C42] hover:bg-[#058C42]/90 text-white transition-all duration-300">
                    {t('how_it_works.cta.sales.button')}
                  </Button>
                </Link>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[#A8D5A2] hover:border-[#058C42] transition-colors shadow-lg">
                <h3 className="text-[#2F2F2F] font-semibold mb-2">{t('how_it_works.cta.trial.title')}</h3>
                <p className="text-[#2F2F2F]/70 text-sm mb-4">{t('how_it_works.cta.trial.description')}</p>
                <Link to="/contact" state={{ message: t('how_it_works.cta.trial.message') }}>
                  <Button 
                    variant="outline" 
                    className="w-full bg-white hover:bg-[#1c703d] border-2 border-[#058C42] text-[#058C42] font-medium transition-all duration-300 py-3 px-6 rounded-lg"
                  >
                    {t('how_it_works.cta.trial.button')}
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