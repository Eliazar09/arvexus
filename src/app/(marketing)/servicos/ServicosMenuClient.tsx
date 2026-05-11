'use client';

import FlowingMenu from '@/components/ui/FlowingMenu';

interface Item {
  link: string;
  text: string;
  image: string;
}

export default function ServicosMenuClient({ items }: { items: Item[] }) {
  return (
    <FlowingMenu
      items={items}
      bgColor="#080809"
      textColor="#f5f3ee"
      marqueeBgColor="#e63946"
      marqueeTextColor="#f5f3ee"
      borderColor="rgba(245,243,238,0.06)"
      speed={18}
    />
  );
}
