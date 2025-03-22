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
    <div className="w-full max-w-[540px] mx-auto">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={`https://www.instagram.com/${username}`}
        data-instgrm-version="12"
        style={{
          background: '#FFF',
          border: '0',
          borderRadius: '3px',
          margin: '1px',
          maxWidth: '540px',
          minWidth: '326px',
          padding: '0',
          width: '100%',
        }}
      >
        <div style={{ padding: '16px' }}>
          <a
            href={`https://www.instagram.com/${username}`}
            style={{
              background: '#FFFFFF',
              lineHeight: '0',
              padding: '0 0',
              textAlign: 'center',
              textDecoration: 'none',
              width: '100%',
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', flexGrow: '0', height: '40px', marginRight: '14px', width: '40px' }} />
              <div style={{ display: 'flex', flexDirection: 'column', flexGrow: '1', justifyContent: 'center' }}>
                <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: '0', height: '14px', marginBottom: '6px', width: '100px' }} />
                <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: '0', height: '14px', width: '60px' }} />
              </div>
            </div>
          </a>
        </div>
      </blockquote>
      <Script src="https://www.instagram.com/embed.js" strategy="lazyOnload" />
    </div>
  );
} 