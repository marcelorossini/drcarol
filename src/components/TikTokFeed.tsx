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
    <div className="w-full max-w-[780px] mx-auto">
      <blockquote
        className="tiktok-embed"
        cite={`https://www.tiktok.com/@${username}`}
        data-unique-id={username}
        data-embed-type="creator"
        style={{
          maxWidth: '780px',
          minWidth: '288px',
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
      <Script src="https://www.tiktok.com/embed.js" strategy="lazyOnload" />
    </div>
  );
} 