'use client';

import { useEffect } from 'react';
import Script from 'next/script';

interface InstagramFeedProps {
  username: string;
}

export default function InstagramFeed({ username }: InstagramFeedProps) {
  useEffect(() => {
    // Recarrega o script do Instagram quando o componente é montado
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <div className="w-full bg-white flex items-center justify-center p-8 rounded-lg">
      <div className="w-full h-fit relative before:absolute before:content-[''] before:inset-0 before:border-6 before:border-white before:pointer-events-none">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={`https://www.instagram.com/${username}`}
        data-instgrm-version="12"
        style={{
          width: '100%',
        }}
      >
      </blockquote>
      </div>
      <Script src="https://www.instagram.com/embed.js" strategy="lazyOnload" />
    </div>
  );
} 