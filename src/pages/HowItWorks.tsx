import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/common/Button';
import { Link } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';
import { Squares } from '../components/ui/squares-background';

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
    <div className="relative min-h-screen bg-[#060606]">
      <div className="absolute inset-0">
        <Squares 
          direction="right"
          speed={0.4}
          squareSize={40}
          borderColor="#333" 
          hoverFillColor="#222"
        />
      </div>
      {/* Header Section */}
      <div className="relative pt-32 pb-16 text-center">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t('how_it_works.title') as string}<br />
          <span className="text-neutral-400">{t('how_it_works.subtitle') as string}</span>
        </motion.h1>
        <motion.div 
          className="inline-block bg-white/5 rounded-full px-4 py-2 text-neutral-400 border border-white/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            {t('how_it_works.demo_label')}
          </span>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Video Chapters */}
          <motion.div 
            className="lg:col-span-3 bg-black/80 backdrop-blur-sm rounded-xl p-4 border border-white/10 shadow-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-neutral-400 text-sm font-medium mb-4 uppercase tracking-wider">
              {t('how_it_works.chapters_title')}
            </h3>
            <div className="space-y-2">
              {chapters.map((chapter, index) => (
                <div 
                  key={index}
                  onClick={() => handleChapterClick(chapter.seconds, index)}
                  className={`flex items-center gap-3 text-neutral-300 hover:text-white transition-all p-2 rounded-lg cursor-pointer hover:bg-white/5
                    ${activeChapter === index ? 'text-white bg-white/5 shadow-md' : ''}`}
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
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl bg-black/80 backdrop-blur-sm border border-white/10">
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
              <div className="bg-black/80 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-colors shadow-lg">
                <h3 className="text-white font-semibold mb-2">{t('how_it_works.cta.sales.title')}</h3>
                <p className="text-neutral-400 text-sm mb-4">{t('how_it_works.cta.sales.description')}</p>
                <Link to="/contact" state={{ message: t('how_it_works.cta.sales.message') }}>
                  <Button variant="primary" className="w-full bg-white hover:bg-neutral-200 text-black transition-all duration-300">
                    {t('how_it_works.cta.sales.button')}
                  </Button>
                </Link>
              </div>
              <div className="bg-black/80 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-colors shadow-lg">
                <h3 className="text-white font-semibold mb-2">{t('how_it_works.cta.trial.title')}</h3>
                <p className="text-neutral-400 text-sm mb-4">{t('how_it_works.cta.trial.description')}</p>
                <Link to="/contact" state={{ message: t('how_it_works.cta.trial.message') }}>
                  <Button 
                    variant="outline" 
                    className="w-full bg-transparent hover:bg-white/5 border-2 border-white/20 text-white font-medium transition-all duration-300 py-3 px-6 rounded-lg"
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