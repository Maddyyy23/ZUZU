"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/*
 * Scrapbook book.
 *
 * - Every page is designed at 600x500 and is never resized; the whole book is
 *   scaled to fit the screen, so it looks identical on PC and phone.
 * - Landscape: two pages side by side like an open book. The front and back
 *   covers are shown alone (centred).
 * - Portrait: one page at a time.
 * - Turn pages by tapping the left/right half of the screen or by swiping.
 */

const PAGE_W = 600;
const PAGE_H = 500;
const LAST = 7; // 8 pages: front cover, 6 inner pages, back cover
const LEAVES = 4; // a leaf = one sheet of paper (2 pages: front + back)
const FLIP_MS = 800;

const PAGES: React.ReactNode[] = [
        <div
          className="relative book-page bg-blue-700 text-white"
          data-density="hard"
          style={{ width: 600, height: 500 }}
        >
        <Image
          // src="/frontr.png"
          src="/pages/front.png"
          alt="Front Cover"
          fill
          priority
          draggable={false}
          className="object-contain scale-130 translate-x-3 pointer-events-none select-none"
        ></Image>

        <div className="flex h-full items-center justify-center text-5xl font-bold"></div>
      </div>,

      <div
        className="relative book-page bg-amber-50 text-black"
        style={{ width: 600, height: 500 }}
      >
        {/* <div className="flex h-full items-center justify-center text-4xl">
          Page 1
        </div> */}

        <Image
          src="/pages/left.jpg"
          alt="Front Cover"
          fill
          priority
          draggable={false}
          className="object-contain  pointer-events-none select-none"
        ></Image>

        <Image
          src="/elements/fwine.png"
          alt="Front Cover"
          fill
          priority
          draggable={false}
          className="object-contain  -rotate-12  -translate-x-34 -translate-y-33 scale-35   "
        ></Image>

        {/* <Image
      src="/elements/stamp.png"
        alt="Front Cover"
    fill
    priority
    draggable={false}
    className="object-contain  -rotate-12  -translate-x-20 translate-y-30 scale-40   "
        ></Image>  */}

        <Image
          src="/elements/side3.png"
          alt="Front Cover"
          fill
          priority
          draggable={false}
          className="object-contain   -translate-x-23 -translate-y-14 scale-78   "
        ></Image>

        <Image
          src="/elements/mouse.png"
          alt="Front Cover"
          fill
          priority
          draggable={false}
          className="object-contain   z-50 translate-x-20 translate-y-46 scale-55   "
        ></Image>

        <Image
          src="/elements/butter.png"
          alt="Front Cover"
          fill
          priority
          draggable={false}
          className="object-contain scale-45 rotate-30  -translate-x-28 translate-y-32 "
        ></Image>

        <Image
          src="/ref/girl.jpg"
          alt="Front Cover"
          fill
          priority
          draggable={false}
          className="object-contain scale-33  rotate-10  translate-x-14 -translate-y-23 "
        ></Image>

        <Image
          src="/elements/frame10.png"
          alt="Front Cover"
          fill
          priority
          draggable={false}
          className="object-contain scale-65 rotate-10  translate-x-14 -translate-y-20 "
        ></Image>

        <Image
          src="/elements/text1.png"
          alt="Front Cover"
          fill
          priority
          draggable={false}
          className="object-contain scale-45   translate-x-10 translate-y-15 "
        ></Image>
      </div>,

      <div
        className="relative overflow-hidden book-page bg-amber-50 text-black"
        style={{ width: 600, height: 500 }}
      >
        {/* <div className="flex h-full items-center justify-center text-4xl">
          Page 2
        </div> */}
        <Image
          src="/pages/right.jpg"
          alt="Front Cover"
          fill
          priority
          draggable={false}
          className="object-contain  pointer-events-none select-none"
        ></Image>

        <Image
          src="/elements/paper.png"
          alt="Front Cover"
          fill
          priority
          draggable={false}
          className="object-contain rotate-90 shadow-black   translate-x-18 translate-y-38  scale-50   "
        ></Image>

        <Image
          src="/elements/starB.png"
          alt="Front Cover"
          fill
          priority
          draggable={false}
          className="object-contain shadow-black  -rotate-50 -translate-x-17 translate-y-30  scale-50   "
        ></Image>

        <Image
          src="/ref/girl2.jpg"
          alt="Front Cover"
          fill
          priority
          draggable={false}
          className="object-contain shadow-black rotate-20  translate-x-19 -translate-y-22  scale-22   "
        ></Image>

        <Image
          src="/ref/girl3.jpg"
          alt="Front Cover"
          fill
          priority
          draggable={false}
          className="object-contain shadow-black rotate-20  translate-x-26 -translate-y-43  scale-22   "
        ></Image>

        <Image
          src="/ref/girl4.jpg"
          alt="Front Cover"
          fill
          priority
          draggable={false}
          className="object-contain shadow-black rotate-20  translate-x-11 translate-y-1  scale-22   "
        ></Image>

        <Image
          src="/elements/frame9.png"
          alt="Front Cover"
          fill
          priority
          draggable={false}
          className="object-contain shadow-black rotate-12  translate-x-18 -translate-y-20  scale-80   "
        ></Image>

        <Image
          src="/elements/text2.png"
          alt="Front Cover"
          fill
          priority
          draggable={false}
          className="object-contain shadow-black rotate-0 -translate-x-13 -translate-y-40  scale-60   "
        ></Image>

        <Image
          src="/elements/kit.png"
          alt="Front Cover"
          fill
          priority
          draggable={false}
          className="object-contain shadow-black rotate-0 -translate-x-13 -translate-y-16  scale-60   "
        ></Image>
      </div>,

      <div
        className="relative overflow-hidden book-page bg-amber-50 text-black"
        style={{ width: 600, height: 500 }}
      >
        {/* <div className="flex h-full items-center justify-center text-4xl">
          Page 3
        </div> */}

        <Image
          src="/pages/left.jpg"
          alt="Front Cover"
          fill
          priority
          draggable={false}
          className="object-contain pointer-events-none select-none"
        />

        {/* Lyrics */}
        <Image
          src="/elements/billa6.png"
          alt="Lyrics"
          fill
          priority
          draggable={false}
          className="object-contain scale-55 rotate-1 -translate-x-30 -translate-y-10"
        />

        {/* Wine */}
        <Image
          src="/elements/side1.png"
          alt="Wine"
          fill
          priority
          draggable={false}
          className="object-contain scale-50 rotate-180 -translate-x-26 translate-y-31"
        />

        {/* Tape */}
        <Image
          src="/elements/starem.png"
          alt="Tape"
          fill
          priority
          draggable={false}
          className="object-contain scale-16 -rotate-18 translate-x-18 -translate-y-56 z-20"
        />

        <Image
          src="/ref/girl5.jpg"
          alt="Frame"
          fill
          priority
          draggable={false}
          className="object-contain scale-33 rotate-17 translate-x-13 -translate-y-21 z-30"
        />

        {/* Photo Frame (Main Focus) */}
        <Image
          src="/elements/frame11.png"
          alt="Frame"
          fill
          priority
          draggable={false}
          className="object-contain scale-75 rotate-18 translate-x-10 -translate-y-11 z-30"
        />

        {/* Recorder */}
        <Image
          src="/elements/moon.png"
          alt="Recorder"
          fill
          priority
          draggable={false}
          className="object-contain scale-34 -rotate-14 -translate-x-20 translate-y-30 z-40"
        />

        <Image
          src="/elements/fits.png"
          alt="Recorder"
          fill
          priority
          draggable={false}
          className="object-contain scale-44 -rotate-14 -translate-x-30 -translate-y-50 z-40"
        />

        {/* Vinyl Disk */}
        <Image
          src="/elements/note1.png"
          alt="Disk"
          fill
          priority
          draggable={false}
          className="object-contain scale-68 -rotate-7 z-50 translate-x-14 translate-y-38 "
        />

        {/* Old Paper */}
        <Image
          src="/elements/lovetape.png"
          alt="Old Paper"
          fill
          priority
          draggable={false}
          className="object-contain scale-19 rotate-0 z-50 translate-x-10 translate-y-24"
        />
      </div>,

      <div
        className="relative overflow-hidden book-page bg-amber-50 text-black"
        style={{ width: 600, height: 500 }}
      >
        <Image
          src="/pages/right.jpg"
          alt="Front Cover"
          fill
          priority
          draggable={false}
          className="object-contain pointer-events-none select-none"
        />

        <Image
          src="/elements/side2.png"
          alt="Disk"
          fill
          priority
          draggable={false}
          className="object-contain scale-68  rotate-0 z-50 translate-x-16 translate-y-23 "
        />

        <Image
          src="/elements/billa.png"
          alt="Disk"
          fill
          priority
          draggable={false}
          className="object-contain scale-38  rotate-0 z-50 -translate-x-14 -translate-y-28 "
        />

        <Image
          src="/elements/boqey.png"
          alt="Disk"
          fill
          priority
          draggable={false}
          className="object-contain scale-48  rotate-0 z-50 -translate-x-14 translate-y-28 "
        />

        <Image
          src="/ref/girl6.jpg"
          alt="Disk"
          fill
          priority
          draggable={false}
          className="object-contain scale-32  rotate-0 z-50 translate-x-19 -translate-y-32 "
        />

        <Image
          src="/ref/girl7.jpg"
          alt="Disk"
          fill
          priority
          draggable={false}
          className="object-contain scale-68  rotate-0 z-50 translate-x-18 -translate-y-28 "
        />

        <Image
          src="/frames/frame5.png"
          alt="Disk"
          fill
          priority
          draggable={false}
          className="object-contain scale-68  rotate-0 z-50 translate-x-18 -translate-y-28 "
        />

        <Image
          src="/elements/miss.png"
          alt="Disk"
          fill
          priority
          draggable={false}
          className="object-contain scale-48  rotate-18 z-50 translate-x-28 translate-y-4 "
        />
      </div>,

      <div
        className="relative overflow-hidden book-page bg-amber-50 text-black"
        style={{ width: 600, height: 500 }}
      >
        <Image
          src="/pages/left.jpg"
          alt="Front Cover"
          fill
          priority
          draggable={false}
          className="object-contain pointer-events-none select-none"
        />

        <Image
          src="/elements/side4.png"
          alt="Disk"
          fill
          priority
          draggable={false}
          className="object-contain scale-68  rotate-0 z-50 -translate-x-22 translate-y-23 "
        />

        <Image
          src="/elements/disk.png"
          alt="Disk"
          fill
          priority
          draggable={false}
          className="object-contain scale-68  rotate-0 z-50 -translate-x-50 -translate-y-15 "
        />

        <Image
          src="/elements/disk.png"
          alt="Disk"
          fill
          priority
          draggable={false}
          className="object-contain scale-68  rotate-0 z-50 -translate-x-50 -translate-y-15 "
        />

        <Image
          src="/elements/billa5.png"
          alt="Disk"
          fill
          priority
          draggable={false}
          className="object-contain scale-68  rotate-0 z-50 translate-x-19 translate-y-33 "
        />

        <Image
          src="/ref/girl11.jpg"
          alt="Disk"
          fill
          priority
          draggable={false}
          className="object-contain scale-26  -rotate-11 z-50 translate-x-4 -translate-y-12 "
        />

        <Image
          src="/ref/girl10.jpg"
          alt="Disk"
          fill
          priority
          draggable={false}
          className="object-contain scale-26  rotate-11 z-50 translate-x-16 -translate-y-40 "
        />

        <Image
          src="/elements/frame8.png"
          alt="Disk"
          fill
          priority
          draggable={false}
          className="object-contain scale-68  rotate-0 z-50 translate-x-10 -translate-y-25 "
        />

        <Image
          src="/elements/twoStar.png"
          alt="Disk"
          fill
          priority
          draggable={false}
          className="object-contain scale-38  rotate-0 z-50 -translate-x-14 translate-y-20 "
        />

        <Image
          src="/elements/text3.png"
          alt="Disk"
          fill
          priority
          draggable={false}
          className="object-contain scale-48  rotate-0 z-50 -translate-x-22 -translate-y-48 "
        />
      </div>,

      <div
        className="relative overflow-hidden book-page bg-amber-50 text-black"
        style={{ width: 600, height: 500 }}
      >
        <Image
          src="/pages/right.jpg"
          alt="Front Cover"
          fill
          priority
          draggable={false}
          className="object-contain pointer-events-none select-none"
        />

        <Image
          src="/elements/side5.png"
          alt="Disk"
          fill
          priority
          draggable={false}
          className="object-contain scale-78  rotate-0 z-50 translate-x-22 translate-y-14 "
        />

        <Image
          src="/elements/text4.png"
          alt="Disk"
          fill
          priority
          draggable={false}
          className="object-contain scale-58  rotate-0 z-50 -translate-x-6 -translate-y-40 "
        />


          <Image
          src="/ref/girl9.jpg"
          alt="Disk"
          fill
          priority
          draggable={false}
          className="object-contain scale-28  -rotate-4 z-50 -translate-x-18 -translate-y-16 "
        />
        
          <Image
          src="/ref/girl8.jpg"
          alt="Disk"
          fill
          priority
          draggable={false}
          className="object-contain scale-27  rotate-10 z-50 -translate-x-11 translate-y-13 "
        />

        <Image
          src="/elements/frame7.png"
          alt="Disk"
          fill
          priority
          draggable={false}
          className="object-contain scale-68  rotate-0 z-50 -translate-x-14 translate-y-1 "
        />

        <Image
          src="/elements/billa4.png"
          alt="Disk"
          fill
          priority
          draggable={false}
          className="object-contain scale-58  rotate-0 z-50 -translate-x-17 translate-y-40 "
        />
      </div>,

      <div
        className="relative overflow-hidden book-page bg-blue-700 text-white"
        data-density="hard"
        style={{ width: 600, height: 500 }}
      >
        {/* <div className="flex h-full items-center justify-center text-5xl font-bold">
          Back Cover
        </div> */}
          <Image
          // src="/frontr.png"
          src="/pages/back.png"
          alt="Front Cover"
          fill
          priority
          draggable={false}
          className="object-contain scale-130 translate-x-3 pointer-events-none select-none"
        ></Image>
        </div>
];

const clamp = (n: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, n));

export default function Book() {
  // `page` is the page shown in portrait mode (0..7). In landscape it decides
  // how many leaves have been turned: ceil(page / 2).
  const [page, setPage] = useState(0);
  const [turning, setTurning] = useState<number | null>(null);
  const [view, setView] = useState({ portrait: false, scale: 1, ready: false });
  const busy = useRef(false);
  const touch = useRef<{ x: number; y: number } | null>(null);
  const viewportRef = useRef({ w: 1, h: 1 });

  // Fit the book to the screen, and react to rotation.
  useEffect(() => {
    const fit = () => {
      const vv = window.visualViewport;
      const vw = vv?.width ?? window.innerWidth;
      const vh = vv?.height ?? window.innerHeight;
      if (!vw || !vh) return;
      viewportRef.current = { w: vw, h: vh };
      const portrait = vw < vh;
      const m = 12;
      const needW = portrait ? PAGE_W : PAGE_W * 2;
      const scale = Math.min((vw - m * 2) / needW, (vh - m * 2) / PAGE_H, 1);
      setView({ portrait, scale: scale > 0 ? scale : 0.3, ready: true });
    };
    fit();
    window.addEventListener("resize", fit);
    window.addEventListener("orientationchange", fit);
    window.visualViewport?.addEventListener("resize", fit);
    // Android can finish rotating a moment after the event fires.
    const timers = [150, 500, 1200].map((ms) => window.setTimeout(fit, ms));
    return () => {
      window.removeEventListener("resize", fit);
      window.removeEventListener("orientationchange", fit);
      window.visualViewport?.removeEventListener("resize", fit);
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, []);

  const { portrait, scale, ready } = view;
  const turned = Math.ceil(page / 2); // leaves already turned (landscape)

  const go = (dir: 1 | -1) => {
    if (busy.current) return;
    let nextPage: number;
    let turningIndex: number;
    if (portrait) {
      nextPage = clamp(page + dir, 0, LAST);
      if (nextPage === page) return;
      turningIndex = dir === 1 ? page : nextPage;
    } else {
      const nextTurned = clamp(turned + dir, 0, LEAVES);
      if (nextTurned === turned) return;
      nextPage = nextTurned === 0 ? 0 : nextTurned === LEAVES ? LAST : nextTurned * 2 - 1;
      turningIndex = dir === 1 ? turned : nextTurned;
    }
    busy.current = true;
    setTurning(turningIndex);
    setPage(nextPage);
    window.setTimeout(() => {
      busy.current = false;
      setTurning(null);
    }, FLIP_MS + 40);
  };

  const onPointerDown = (e: React.PointerEvent) => {
    touch.current = { x: e.clientX, y: e.clientY };
  };
  const onPointerUp = (e: React.PointerEvent) => {
    const start = touch.current;
    touch.current = null;
    if (!start) return;
    const dx = e.clientX - start.x;
    const dy = e.clientY - start.y;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
      go(dx < 0 ? 1 : -1); // swipe left = next page
    } else if (Math.abs(dx) < 15 && Math.abs(dy) < 15) {
      const half = viewportRef.current.w / 2;
      go(e.clientX < half ? -1 : 1); // tap left half = back, right half = next
    }
  };

  const ease = `transform ${FLIP_MS}ms cubic-bezier(0.45, 0.05, 0.25, 1)`;

  // Landscape: the closed book is centred, so slide it while covers open/close.
  const shift = turned === 0 ? -PAGE_W / 2 : turned === LEAVES ? PAGE_W / 2 : 0;

  return (
    <div
      className="book-stage"
      style={{ opacity: ready ? 1 : 0 }}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerCancel={() => (touch.current = null)}
    >
      {portrait ? (
        <div
          className="book-scaler"
          style={{
            width: PAGE_W,
            height: PAGE_H,
            marginLeft: -PAGE_W / 2,
            marginTop: -PAGE_H / 2,
            transform: `scale(${scale})`,
          }}
        >
          <div className="book-slide">
            {PAGES.map((content, i) => {
              const isTurned = page > i;
              const z = turning === i ? 100 : isTurned ? i : PAGES.length - i;
              return (
                <div
                  key={i}
                  className="book-single"
                  style={{
                    zIndex: z,
                    transform: `rotateY(${isTurned ? -180 : 0}deg)`,
                    transition: ease,
                  }}
                >
                  {content}
                  <div className="book-shade book-shade-right" />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div
          className="book-scaler"
          style={{
            width: PAGE_W * 2,
            height: PAGE_H,
            marginLeft: -PAGE_W,
            marginTop: -PAGE_H / 2,
            transform: `scale(${scale})`,
          }}
        >
          <div
            className="book-slide"
            style={{ transform: `translateX(${shift}px)`, transition: ease }}
          >
            {Array.from({ length: LEAVES }).map((_, i) => {
              const isTurned = turned > i;
              const z = turning === i ? 100 : isTurned ? i : LEAVES - i;
              return (
                <div
                  key={i}
                  className="book-leaf"
                  style={{
                    zIndex: z,
                    transform: `rotateY(${isTurned ? -180 : 0}deg)`,
                    transition: ease,
                  }}
                >
                  <div className="book-face">
                    {PAGES[i * 2]}
                    <div className="book-shade book-shade-right" />
                  </div>
                  <div className="book-face book-face-back">
                    {PAGES[i * 2 + 1]}
                    <div className="book-shade book-shade-left" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
