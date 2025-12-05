'use client';

import { Marquee } from "@/components/Magicui/marquee";
import type { Media as MediaType } from "@/payload-types";
import { Media } from '@/components/Media'
import Link from "next/link";

export type GalleryProps = {
  title: string;
  subtitle?: string;
  caption: {
    label: string;
    link: string;
    image: string | MediaType;
  }
  items: {
    image: string | MediaType
  }[];
};

const Gallery29: React.FC<GalleryProps> = ({ title, subtitle, items = [], caption }) => {

  if (!items.length || items.length === 0) return null;

  return (
    <section className="bg-background dark relative overflow-hidden py-32">
      <div>
        <div className="container mb-12 flex flex-col gap-4 text-center">
          <h2 className="font-instrumentSerif text-primary/80 text-5xl font-medium">
            {title}
          </h2>
          <p className="text-muted-foreground/80 text-lg">
            {subtitle}
          </p>
        </div>
        <div className="relative">
          <Marquee className="p-0 opacity-40 [--duration:60s]">
            {items.map((item, idx) => (
              <div key={idx} className="mx-4 h-[300px] w-auto min-w-[200px] max-w-sm overflow-hidden rounded-lg">
                <Media
                  imgClassName="h-full w-full object-cover"
                  resource={item.image}
                />
              </div>
            ))}
          </Marquee>
          <Link
            href={caption.link}
            className="hover:scale-104 group container absolute inset-0 z-10 mx-auto flex w-fit scale-105 items-center justify-center overflow-hidden rounded-lg transition-transform duration-500"
          >
            <div className="relative overflow-hidden rounded-lg">
              <Media
                imgClassName="h-96 w-auto transition-transform duration-500 group-hover:scale-110"
                resource={caption.image}
              />

              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 backdrop-blur-[1px] transition-opacity duration-500 group-hover:opacity-100">
                <p className="font-instrumentSerif -translate-y-6 border-b border-white/50 bg-gradient-to-b from-white to-white/80 bg-clip-text text-xl font-medium text-transparent transition-transform duration-500 group-hover:translate-y-0">
                  {caption.label}
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r" />
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l" />
        <div
          className="skew-[-45deg] pointer-events-none absolute -top-1/2 bottom-0 right-0 hidden w-1/2 min-w-[500px] opacity-5 dark:block"
          style={{
            background:
              "linear-gradient(rgb(255, 255, 255) 0%, rgb(255, 255, 255) 83.9344%, rgba(255, 255, 255, 0) 100%)",
            mask: "linear-gradient(90deg, rgba(0, 0, 0, 0) 11.3985%, rgb(0, 0, 0) 25.5578%, rgba(0, 0, 0, 0.55) 41.6966%, rgba(0, 0, 0, 0.13) 67.1171%, rgb(0, 0, 0) 78.2306%, rgba(0, 0, 0, 0) 97.2973%)",
          }}
        />
        <div
          className="skew-[-45deg] pointer-events-none absolute -top-1/2 bottom-0 right-0 hidden w-1/2 min-w-[500px] opacity-5 dark:block"
          style={{
            background:
              "linear-gradient(rgb(255, 255, 255) 0%, rgb(255, 255, 255) 67%, rgba(255, 255, 255, 0) 100%)",
            mask: "linear-gradient(90deg, rgba(0, 0, 0, 0) 9.81489%, rgb(0, 0, 0) 20.0362%, rgba(0, 0, 0, 0.55) 28.5878%, rgba(0, 0, 0, 0.424) 40.0901%, rgb(0, 0, 0) 48.6486%, rgba(0, 0, 0, 0.267) 54.5045%, rgba(0, 0, 0, 0.13) 78.579%, rgb(0, 0, 0) 88.554%, rgba(0, 0, 0, 0) 97.2973%)",
          }}
        />
        <div
          className="skew-[-45deg] pointer-events-none absolute -top-1/2 bottom-0 right-0 hidden w-1/2 min-w-[500px] opacity-5 dark:block"
          style={{
            background:
              "linear-gradient(rgb(255, 255, 255) 0%, rgb(255, 255, 255) 83.9344%, rgba(255, 255, 255, 0) 100%)",
            mask: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 17.6591%, rgba(0, 0, 0, 0.55) 26.6417%, rgb(0, 0, 0) 35.2302%, rgba(0, 0, 0, 0) 47.6985%, rgba(0, 0, 0, 0.13) 69.1776%, rgb(0, 0, 0) 79.1456%, rgba(0, 0, 0, 0) 97.2973%)",
          }}
        />
      </div>
    </section>
  );
};

export { Gallery29 };
