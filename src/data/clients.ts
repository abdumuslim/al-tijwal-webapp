
import { ClientLogo } from '@/types/client';

export const clients: ClientLogo[] = [
  {
    name: "1001",
    src: "/lovable-uploads/74c985b0-fd1c-4129-bbdf-9cc9c13fc92a.webp",
    alt: "1001",
    hasFlip: true,
    flipImage: "/lovable-uploads/d9ae7d9e-0cd0-4292-b13f-bd568b05032c.webp"
  },
  {
    name: "Elryan",
    src: "/lovable-uploads/3ac89038-e04f-488f-9e7a-adb1ec83c9f6.webp",
    alt: "Elryan",
    hasFlip: true,
    flipImage: "/lovable-uploads/6c61dc6e-d820-4c41-807f-ed0adbe2ee9b.webp"
  },
  {
    name: "FastPay",
    src: "/lovable-uploads/a61f8a63-a512-483c-8669-a664a4f218e4.webp",
    alt: "FastPay",
    hasFlip: true,
    flipImage: "/lovable-uploads/fd661e02-046b-4577-9fcc-c1f4d370023f.webp"
  },
  {
    name: "ITEXIraq",
    src: "/lovable-uploads/34a6871b-2532-4643-8004-0fb3acfaa2b5.webp",
    alt: "ITEX Iraq",
    className: "bg-[#121212]",
    hasFlip: true,
    flipImage: "/lovable-uploads/ecb8e1bd-e57d-4eb5-8247-e6325b1ac73c.webp"
  },
  {
    name: "Supercell",
    src: "/lovable-uploads/46def75c-e10b-433c-8ffe-dbc0c13e0c90.webp",
    alt: "Supercell",
    hasFlip: true,
    flipImage: "/lovable-uploads/118974b3-56fb-41ff-819d-ab73569fef2d.webp"
  },
  {
    name: "Oodi",
    src: "/lovable-uploads/bd292633-35d4-46e9-96fb-0070abe93146.webp",
    alt: "Oodi",
    className: "bg-[#6713e9]",
    hasFlip: true,
    flipImage: "/lovable-uploads/229b94b1-79c2-4765-ad7d-770be4916c5f.webp"
  }
];

// Helper function to extract background color from className
export const extractBgColor = (className?: string): string => {
  if (!className || !className.includes('bg-[#')) return 'transparent';
  const match = className.match(/bg-\[\#([0-9a-f]+)\]/);
  return match?.[1] ? `#${match[1]}` : 'transparent';
};
