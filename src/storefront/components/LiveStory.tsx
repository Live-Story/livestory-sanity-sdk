import { useEffect, useState } from 'react';

type LiveStoryProps = {
  language?: string;
  value: {
    title?: string;
    id?: string;
    type?: string;
    ssr?: string;
  };
};

export default function LiveStory({ value, language }: LiveStoryProps) {
  const { id, type, ssr } = value;

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!id || !type || !mounted) return;

    const loadLiveStory = () => {
      const runLiveStory = () => {
        if ((window as any).LiveStory) {
          new (window as any).LiveStory(`ls-${id}`, { type });
          console.log("livestory-sanity npm: LS initialized");
        }
      };

      runLiveStory();
    };

    loadLiveStory();
  }, [id, type, mounted]);

  if (!value) return null;

  return (
    <div>
      {mounted && (
        <div
          id={`ls-${id}`}
          data-id={id}
          data-lang={language ?? 'default'}
          style={{ width: "100%" }}
          dangerouslySetInnerHTML={{ __html: ssr ?? '' }}>
        </div>
      )}
    </div>
  );
}
