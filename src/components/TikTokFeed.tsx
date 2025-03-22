'use client';

import { useEffect } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    TiktokEmbed?: {
      reload: () => void;
    };
  }
}

interface TikTokFeedProps {
  username: string;
}

export default function TikTokFeed({ username }: TikTokFeedProps) {
  useEffect(() => {
    // Recarrega o script do TikTok quando o componente é montado
    if (window.TiktokEmbed) {
      window.TiktokEmbed.reload();
    }
  }, []);

  return (
    <div className="w-full bg-white flex items-start justify-center p-4 pt-2 rounded-lg">
      <div className="w-full h-fit relative before:absolute before:content-[''] before:z-10 before:inset-0 before:border-20 before:border-white before:pointer-events-none">
        <blockquote
          className="tiktok-embed"
          cite={`https://www.tiktok.com/@${username}`}
          data-unique-id={username}
          data-embed-type="creator"
          style={{

            border: 'none',
          }}
        >
          <section>
            <a
              target="_blank"
              href={`https://www.tiktok.com/@${username}?refer=creator_embed`}
              rel="noopener noreferrer"
            >
              @{username}
            </a>
          </section>
        </blockquote>
      </div>
      <Script src="https://www.tiktok.com/embed.js" strategy="lazyOnload" />
    </div>
  );
} 