import { useEffect, useState } from "react";

export type SanityModuleLiveStory = {
  _key?: string;
  _type: "module.livestory";
  title?: string;
  id: string;
  type: string;
  ssr?: string;
};

import LiveStory from "../components/LiveStory";

export function LiveStoryModule({
  module,
  language
}: {
  module: SanityModuleLiveStory;
  language?: string;
}) {

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!module.id || !module.type) {
    console.log("No module LS", module);
    return null;
  }

  return (
    <div className="mx-auto min-h-full overflow-hidden">
      {/* Live Story Module */}
      {mounted && (
        <LiveStory value={{ id: module.id, type: module.type, ssr: module.ssr }} language={language} />
      )}
    </div>
  );
}
