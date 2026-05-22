import { useEffect, useState, useRef } from "react";
import { SiTwitch, SiX, SiYoutube, SiDiscord } from "react-icons/si";
import bannerLossy from "./assets/banner-lossy.webp";
import bannerLossless from "./assets/banner-lossless.webp";
import avatarImg from "./assets/avatar.webp";
import mosirLogo from "./assets/mosir-logo.svg";

const BANNER_PLACEHOLDER = "data:image/webp;base64,UklGRugBAABXRUJQVlA4WAoAAAAQAAAAPwAAIwAAQUxQSCwAAAABJ9D/iAgoim2lIsJ7RIACoDawf6q/excR/Z8AeQlS8OS3CFpvEzS3qkNUB1ZQOCCWAQAAUAsAnQEqQAAkAD8RfLBSrCgkIqq7/AGAIglAGD218wxeqGfSrg0EyZ/+gGZljhi9rx0xJtSz/04AAh1deq5VFhNUe6kRIu4NDQOszTjY65djqHrVVQZDgVMF1fESCoZmbS0AAP7yq4P7nTdqn1/JrZc3RKlMdgCjd3GHYOaf0JmCTV1AlpNYhrUqHcxy8Yt+71IZhYJyiay2NX1xIzY3TEAHucG7pOJDm8F5rfuSr2xBuX/e/KLmA9nEjAjY9cNxlKiGyO4LKSGbWDgBrdX006uxBKgAUQUBOlk0YXNSHiVX6oQVlnrDq/qXFEAxtg8Rw1O76UqR//Cg7GOWiG1JeiNRfU4FvR3iZWYHkRZFq65VxssGAgUtpwD8nsKqNMIxxgZXUlEM897200BJKVHQ90R2E6rnJfHtsvajoN4RZPzC3iHGWtbq4P3r/T+27U1b8bLz/YKSC7dlibXmCp3ntWrxmeGwOInzVUrSAjtHw185iDDHruszyFm8DqoR9GfQSAQhQGV80sPTnyLYwsnawafdT9AAAA==";

const PROFILE = {
  name: "二ノ宮しずめ",
  bio: `🍮(二二)不是Vtuber
只是一個找不到事做的人嘗試開台找事做`,
  bannerSrc: bannerLossy,
  avatarSrc: avatarImg,
};

const ANNOUNCEMENT = {
  icon: "🍮",
  text: `小時候因為覺得駭客很酷，所以用了“二進位”當作自己的ＩＤ
不知為何的在跟人相處的過程中逐漸被簡化
而到最後開始以二二 aka 22 作為自稱

不過不知為何Youtube 某天起很喜歡在我的推薦塞滿布丁的影片
所以我決定順應演算法當一個布丁就好🍮（？？？）`,
};

const LINKS_SECTION = {
  title: "Find me elsewhere",
  description: "布丁好ㄘ",
};

const FOOTER_NOTE =(
  <>
    幫我製造布丁的人們：<br></br>
    2D Design: <a href="https://x.com/rakusan7826">楽桑</a><br></br>
    3D Model: nylonheart<br></br>
    Emote: <a href="https://x.com/ruochi2022">若祈RuoChi</a><br></br>
  </>
);

const LINKS = [
  { id: "twitch", name: "Twitch", href: "https://www.twitch.tv/pur1nsuki", icon: <SiTwitch />, note: "少開" },
  { id: "x", name: "Twitter", href: "https://www.twitter.com/pur1nsuki", icon: <SiX />, note: "日常" },
  { id: "mosir", name: "Mosir", href: "https://beta.mosir.app/profile/pur1nsuki", icon: <img src={mosirLogo} alt="" className="h-8 w-8" />, note: "遊戲廢文" },
  { id: "youtube", name: "YouTube", href: "https://www.youtube.com/@pur1nsuki", icon: <SiYoutube />, note: "純放置" },
  { id: "discord", name: "Discord", href: "https://discord.gg/ksr6sQjwYP", icon: <SiDiscord />, note: "貼圖群" },
  { id: "design", name: "Design", href: "https://x.com/pur1nsuki/status/1826610775466934403", icon: "🍮", note: "三視圖" },
  // { id: "bluesky", name: "Bluesky", href: "#", icon: "🦋", note: "日常 / 想法" },
];

const THEMES = {
  dark: {
    pageBg: "bg-[radial-gradient(circle_at_top,_#2a1f26,_#1c171b_35%,_#131114_70%,_#0d0b0d_100%)]",
    pageText: "text-stone-100",
    shell: "border-white/10 bg-white/5",
    leftOverlay: "bg-[linear-gradient(160deg,_rgba(255,255,255,0.05),_rgba(255,255,255,0.02))]",
    bannerFrame: "border-white/10 bg-white/5 shadow-lg",
    avatarFrame: "border-white/80 bg-[#20181d]",
    bioText: "text-stone-300",
    card: "border-fuchsia-200/10 bg-[#5e4450]/85 text-rose-50 shadow-md",
    asideBg: "bg-[#120f12]/90 text-rose-50",
    asideLabel: "text-rose-200/60",
    asideDesc: "text-rose-100/70",
    linkItem: "border-white/10 bg-white/5 hover:bg-white/10 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-rose-300 active:scale-[0.98]",
    linkIcon: "bg-white/10",
    linkNote: "text-rose-100/70",
    footer: "border-white/10 bg-white/5 text-rose-100/75",
    toggleWrap: "border-white/10 bg-white/5",
    toggleTrack: "bg-white/10",
    toggleThumb: "bg-white shadow",
    toggleLabel: "text-white/70",
  },
  light: {
    pageBg: "bg-[radial-gradient(circle_at_top,_#ffe5f0,_#f7d8e4_35%,_#e9d0dc_70%,_#dfc4d1_100%)]",
    pageText: "text-stone-800",
    shell: "border-white/40 bg-white/20",
    leftOverlay: "bg-[linear-gradient(160deg,_rgba(255,255,255,0.16),_rgba(255,255,255,0.04))]",
    bannerFrame: "border-white/30 bg-white/20 shadow-sm",
    avatarFrame: "border-white bg-white",
    bioText: "text-stone-600",
    card: "border-rose-100 bg-[#7b5d67]/90 text-rose-50 shadow-md",
    asideBg: "bg-[#6f535d]/85 text-rose-50",
    asideLabel: "text-rose-200",
    asideDesc: "text-rose-100/85",
    linkItem: "border-white/10 bg-white/10 hover:bg-white/16 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-rose-300 active:scale-[0.98]",
    linkIcon: "bg-white/14",
    linkNote: "text-rose-100/75",
    footer: "border-white/10 bg-black/10 text-rose-100/80",
    toggleWrap: "border-white/40 bg-white/30",
    toggleTrack: "bg-white/70",
    toggleThumb: "bg-[#7b5d67] shadow",
    toggleLabel: "text-stone-700",
  },
};

const THEME_STORAGE_KEY = "social-links-theme";

function getInitialTheme() {
  if (typeof window === "undefined") return true;

  const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (savedTheme === "dark") return true;
  if (savedTheme === "light") return false;

  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export default function SocialLinksLandingPage() {
  const [isDark, setIsDark] = useState(getInitialTheme);
  const [bannerSrc, setBannerSrc] = useState(BANNER_PLACEHOLDER);
  const theme = isDark ? THEMES.dark : THEMES.light;

  // Progressive banner loading: placeholder → lossy → lossless
  useEffect(() => {
    const lossy = new Image();
    lossy.src = bannerLossy;
    lossy.onload = () => {
      setBannerSrc(bannerLossy);
      const lossless = new Image();
      lossless.src = bannerLossless;
      lossless.onload = () => setBannerSrc(bannerLossless);
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const themeName = isDark ? "dark" : "light";
    window.localStorage.setItem(THEME_STORAGE_KEY, themeName);
    document.documentElement.dataset.theme = themeName;

    // Sync browser UI color (mobile address bar etc.)
    const meta = document.querySelector("meta[name='theme-color']");
    const color = isDark ? "#0d0b0d" : "#f5f1ec";

    if (meta) {
      meta.setAttribute("content", color);
    } else {
      const newMeta = document.createElement("meta");
      newMeta.name = "theme-color";
      newMeta.content = color;
      document.head.appendChild(newMeta);
    }
  }, [isDark]);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme === "dark" || savedTheme === "light") return undefined;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (event) => {
      setIsDark(event.matches);
    };

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  return (
    <div className={`min-h-screen ${theme.pageBg} ${theme.pageText} transition-colors duration-300`}>
      <div className="mx-auto grid min-h-screen w-full place-items-center p-6 md:p-10">
        <div
          className={`animate-fade-in-up grid w-full overflow-hidden rounded-[2rem] border shadow-xl transition-colors duration-300 md:grid-cols-[minmax(0,1fr)_400px] ${theme.shell}`}
        >
          <header className="relative md:min-h-[720px] overflow-hidden p-6 md:p-10">
            <div className={`absolute inset-0 ${theme.leftOverlay}`} />
            <div className="relative z-10 flex h-full flex-col">
              <div className="mb-4 flex justify-end">
                <label
                  className={`flex items-center gap-3 rounded-full border px-3 py-2 transition-colors duration-300 ${theme.toggleWrap}`}
                >
                  <span className={`text-xs tracking-[0.2em] uppercase ${theme.toggleLabel}`}>
                    {isDark ? "Dark" : "Light"}
                  </span>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={isDark}
                    aria-label="Toggle dark mode"
                    onClick={() => setIsDark((prev) => !prev)}
                    className={`relative h-7 w-12 rounded-full transition-colors duration-300 ${theme.toggleTrack}`}
                  >
                    <span
                      className={`absolute top-1 h-5 w-5 rounded-full transition-all duration-300 ${theme.toggleThumb} ${isDark ? "left-6" : "left-1"}`}
                    />
                  </button>
                </label>
              </div>
              <figure
                className={`overflow-hidden rounded-[1.25rem] border transition-colors duration-300 ${theme.bannerFrame}`}
              >
                <div className="h-[240px] w-full md:h-auto md:aspect-[16/9]">
                  <img
                    src={bannerSrc}
                    alt="二ノ宮しずめ的頻道橫幅"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              </figure>

              <div className="-mt-14 flex items-end gap-4 px-4 md:px-6">
                <div
                  className={`h-28 w-28 overflow-hidden rounded-full border-4 shadow-lg transition-colors duration-300 ${theme.avatarFrame}`}
                >
                  <img
                    src={PROFILE.avatarSrc}
                    alt="二ノ宮しずめ的頭像"
                    loading="eager"
                    decoding="async"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>

              <div className="mt-5 space-y-4 px-4 md:px-6">
                <div>
                  <h1 className="text-3xl font-semibold tracking-wide md:text-4xl">
                    {PROFILE.name}
                  </h1>
                  <p className={`mt-2 max-w-xl whitespace-pre-line text-sm leading-6 md:text-base ${theme.bioText}`}>
                    {PROFILE.bio}
                  </p>
                </div>

                <article
                  className={`rounded-[1.75rem] border p-5 text-center transition-colors duration-300 ${theme.card}`}
                  aria-label="公告"
                >
                  <div className="text-lg" aria-hidden="true">{ANNOUNCEMENT.icon}</div>
                  <p className="mt-2 whitespace-pre-line text-sm leading-6 md:text-base">
                    {ANNOUNCEMENT.text}
                  </p>
                </article>
              </div>
            </div>
          </header>

          <main className={`flex md:min-h-[720px] flex-col justify-center gap-4 p-6 transition-colors duration-300 md:p-8 ${theme.asideBg}`}>
            <div>
              <div className={`text-xs tracking-[0.24em] uppercase ${theme.asideLabel}`} aria-hidden="true">links</div>
              <h2 className="mt-2 text-2xl font-semibold">{LINKS_SECTION.title}</h2>
              <p className={`mt-2 text-sm leading-6 ${theme.asideDesc}`}>
                {LINKS_SECTION.description}
              </p>
            </div>

            <nav aria-label="社群連結">
              <ul className="mt-2 space-y-3 list-none p-0 m-0">
                {LINKS.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-center justify-between rounded-2xl border px-4 py-4 transition duration-300 ${theme.linkItem}`}
                    >
                      <div className="flex items-center gap-4">
                        <span className={`flex h-12 w-12 items-center justify-center rounded-2xl text-2xl ${theme.linkIcon}`} aria-hidden="true">
                          {link.icon}
                        </span>
                        <div>
                          <span className="text-base font-medium">{link.name}</span>
                          <span className={`block text-sm ${theme.linkNote}`}>{link.note}</span>
                        </div>
                      </div>
                      <span className="text-xl transition group-hover:translate-x-1" aria-hidden="true">→</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <footer className={`mt-4 rounded-2xl border p-4 text-sm leading-6 transition-colors duration-300 ${theme.footer}`}>
              {FOOTER_NOTE}
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
