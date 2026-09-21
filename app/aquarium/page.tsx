"use client";

import { useState } from "react";

export default function AquariumPage() {
  const [tankX, setTankX] = useState(0);

  const navItems = [
    { icon: "🏠", label: "Home", active: true },
    { icon: "🐠", label: "My Tank" },
    { icon: "🛍️", label: "Fish Packs" },
    { icon: "🧬", label: "Breed" },
    { icon: "🛒", label: "Market" },
    { icon: "📜", label: "Missions", badge: "2" },
    { icon: "👛", label: "Wallet" },
    { icon: "🔮", label: "Fusion" },
    { icon: "🏆", label: "Rankings" },
    { icon: "✉️", label: "Inbox", badge: "1" },
  ];

  const resources = [
    {
      icon: "🪙",
      name: "Coins",
      amount: "1,248,750",
    },
    {
      icon: "🫧",
      name: "Pearls",
      amount: "8,320",
    },
    {
      icon: "🪸",
      name: "Coral",
      amount: "12,640",
    },
    {
      icon: "💎",
      name: "$BUBBINS",
      amount: "3,210.75",
    },
  ];

  const feeds = [
    {
      time: "1h",
      name: "Quick Feed",
      remaining: "32m 14s",
      image: "/game/feed-1h.png",
    },
    {
      time: "4h",
      name: "Care Feed",
      remaining: "3h 12m",
      image: "/game/feed-4h.png",
    },
    {
      time: "12h",
      name: "Deep Feed",
      remaining: "11h 48m",
      image: "/game/feed-12h.png",
    },
    {
      time: "24h",
      name: "Daily Feed",
      remaining: "23h 56m",
      image: "/game/feed-24h.png",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f7fbff] text-[#10265c]">
      <div className="mx-auto max-w-[1550px] p-4">

        {/* MAIN LAYOUT */}
        <div className="grid grid-cols-[180px_minmax(0,1fr)] gap-4">

          {/* ================= SIDEBAR ================= */}
          <aside className="row-span-3">

            {/* LOGO */}
            <div className="mb-5 flex h-[88px] items-center justify-center">
              <img
                src="/game/bubbins-logo.png"
                alt="Bubbins"
                className="max-h-[82px] max-w-[170px] object-contain"
              />
            </div>

            {/* NAVIGATION */}
            <nav className="space-y-[6px]">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  className={`
                    flex h-[52px] w-full items-center
                    rounded-[18px] px-4 text-left
                    transition
                    ${
                      item.active
                        ? "bg-[#dff2ff] text-[#1598e9]"
                        : "hover:bg-[#eef7ff]"
                    }
                  `}
                >
                  <span className="mr-4 w-[28px] text-center text-[24px]">
                    {item.icon}
                  </span>

                  <span className="text-[16px] font-bold">
                    {item.label}
                  </span>

                  {item.badge && (
                    <span className="ml-auto flex h-7 min-w-7 items-center justify-center rounded-full bg-[#ff4048] px-2 text-[13px] font-bold text-white">
                      {item.badge}
                    </span>
                  )}
                </button>
              ))}
            </nav>

            {/* INVITE */}
            <div className="mt-8 rounded-[22px] bg-[#e8f5ff] p-4 text-center">
              <div className="text-[34px]">🎁</div>

              <div className="mt-1 text-[14px] font-bold">
                Invite Friends
              </div>

              <div className="mt-1 text-[11px] text-[#53688c]">
                Earn Coins & $BUBBINS!
              </div>

              <button className="mt-4 w-full rounded-[16px] bg-[#169cf1] py-3 text-[14px] font-bold text-white shadow-sm">
                Invite Now
              </button>
            </div>
          </aside>

          {/* ================= TOP RESOURCE BAR ================= */}
          <header className="flex h-[88px] items-center gap-3">

            <div className="flex flex-1 items-center justify-center gap-3">
              {resources.map((resource) => (
                <div
                  key={resource.name}
                  className="
                    flex h-[60px] min-w-[178px] items-center
                    rounded-[22px] border border-[#dce7f4]
                    bg-white px-4
                  "
                >
                  <div className="mr-3 text-[30px]">
                    {resource.icon}
                  </div>

                  <div className="min-w-0">
                    <div className="text-[12px] font-semibold text-[#384c73]">
                      {resource.name}
                    </div>

                    <div className="text-[16px] font-extrabold">
                      {resource.amount}
                    </div>
                  </div>

                  <button className="ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-[#dff2ff] text-xl font-bold text-[#1598e9]">
                    +
                  </button>
                </div>
              ))}
            </div>

            <button
              className="
                h-[52px] rounded-[18px] bg-[#159cf0]
                px-7 text-[15px] font-bold text-white
              "
            >
              👛 &nbsp; Connect Wallet
            </button>

            <button className="relative flex h-11 w-11 items-center justify-center rounded-full border border-[#dce7f4] bg-white text-xl">
              🔔

              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#ff4048] text-[10px] font-bold text-white">
                3
              </span>
            </button>

            <button className="flex h-11 w-11 items-center justify-center rounded-full border border-[#dce7f4] bg-white text-xl">
              🐙
            </button>
          </header>

          {/* ================= AQUARIUM ================= */}
          <section
            className="
              relative h-[470px] overflow-hidden
              rounded-[32px]
              border-[9px] border-[#123b82]
              bg-[#0ea5e9]
              shadow-[0_5px_0_#082961]
            "
          >
            {/* MOVABLE WORLD */}
            <div
              className="absolute inset-y-0 left-0 h-full w-[1900px]"
              style={{
                transform: `translateX(${tankX}px)`,
                transition: "transform 350ms ease",
              }}
            >
              <img
                src="/game/aquarium-world.png"
                alt="Bubbins Aquarium"
                draggable={false}
                className="h-full w-full select-none object-cover"
              />
            </div>

            {/* LEFT TANK BUTTONS */}
            <div className="absolute left-3 top-3 z-20 flex flex-col gap-2">
              <button className="flex h-48 w-48 max-h-12 max-w-12 items-center justify-center rounded-[13px] border-2 border-white/80 bg-[#168cdd]/90 text-xl text-white">
                🎵
              </button>

              <button className="flex h-12 w-12 items-center justify-center rounded-[13px] border-2 border-white/80 bg-[#168cdd]/90 text-xl text-white">
                ≋
              </button>
            </div>

            {/* MOVEMENT CONTROLS */}
            <button
              onClick={() =>
                setTankX((value) => Math.min(value + 280, 0))
              }
              className="
                absolute left-5 top-1/2 z-30
                -translate-y-1/2 rounded-full
                bg-white/80 px-4 py-3
                text-xl font-black opacity-0
                transition hover:opacity-100
              "
            >
              ‹
            </button>

            <button
              onClick={() =>
                setTankX((value) => Math.max(value - 280, -700))
              }
              className="
                absolute right-5 top-1/2 z-30
                -translate-y-1/2 rounded-full
                bg-white/80 px-4 py-3
                text-xl font-black opacity-0
                transition hover:opacity-100
              "
            >
              ›
            </button>
          </section>

          {/* ================= BOTTOM ================= */}
          <section className="grid grid-cols-[1.55fr_0.72fr_1fr] gap-3">

            {/* CARE TIMERS */}
            <div className="rounded-[22px] border border-[#dce7f4] bg-white p-4">

              <div className="mb-3">
                <div className="flex items-center gap-2">
                  <h2 className="text-[17px] font-extrabold">
                    Care Timers
                  </h2>

                  <span className="text-[#7190b3]">ⓘ</span>
                </div>

                <p className="text-[11px] text-[#6b7c9a]">
                  Feed your Bubbins and keep them happy!
                </p>
              </div>

              <div className="grid grid-cols-4 gap-2">
                {feeds.map((feed) => (
                  <div
                    key={feed.time}
                    className="
                      rounded-[16px]
                      bg-gradient-to-b
                      from-[#eaf8ff]
                      to-[#f7fbff]
                      p-2 text-center
                    "
                  >
                    <div className="flex h-[64px] items-center justify-center">
                      <img
                        src={feed.image}
                        alt={feed.time}
                        className="max-h-[62px] object-contain"
                      />
                    </div>

                    <div className="text-[15px] font-extrabold">
                      {feed.time === "1h"
                        ? "1 Hour"
                        : feed.time === "4h"
                        ? "4 Hours"
                        : feed.time === "12h"
                        ? "12 Hours"
                        : "24 Hours"}
                    </div>

                    <div className="text-[11px]">
                      {feed.name}
                    </div>

                    <div className="my-2 rounded-full bg-white py-1 text-[13px] font-bold shadow-sm">
                      {feed.remaining}
                    </div>

                    <button className="w-full rounded-[14px] bg-[#169cf1] py-[7px] text-[13px] font-bold text-white">
                      Feed
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* DAILY TASKS */}
            <div className="rounded-[22px] border border-[#dce7f4] bg-white p-4">

              <div className="flex items-center justify-between">
                <h2 className="text-[17px] font-extrabold">
                  Daily Tasks
                </h2>

                <button className="text-[11px] font-semibold text-[#169cf1]">
                  View All
                </button>
              </div>

              <div className="mt-4 space-y-[13px]">
                <DailyTask
                  title="Feed 3 Bubbins"
                  progress="3/3"
                  done
                />

                <DailyTask
                  title="Explore once"
                  progress="0/1"
                />

                <DailyTask
                  title="Breed a pair"
                  progress="0/1"
                />

                <DailyTask
                  title="Open a Fish Pack"
                  progress="0/1"
                />
              </div>

              <div className="mt-4 border-t border-[#edf1f6] pt-3">
                <div className="text-[11px] font-bold">
                  Rewards:
                </div>

                <div className="mt-2 flex gap-4 text-[13px] font-bold">
                  <span>🪙 +250</span>
                  <span>🫧 +5</span>
                </div>
              </div>
            </div>

            {/* SELECTED BUBBINS */}
            <div className="rounded-[22px] border border-[#dce7f4] bg-white p-3">

              <div className="flex items-center">
                <h2 className="text-[18px] font-extrabold">
                  Bubbles
                </h2>

                <span className="ml-2 text-[#7992b2]">✎</span>

                <span className="ml-3 rounded-full bg-[#def3ff] px-3 py-1 text-[11px] font-bold text-[#1598e9]">
                  Rare
                </span>

                <span className="ml-auto text-[22px]">
                  ⭐
                </span>
              </div>

              <div className="mt-2 grid grid-cols-[125px_1fr] gap-3">

                <div
                  className="
                    flex h-[125px] items-center justify-center
                    overflow-hidden rounded-[14px]
                    bg-gradient-to-b
                    from-[#28c8f5]
                    to-[#087bd7]
                  "
                >
                  <img
                    src="/game/bubbles.png"
                    alt="Bubbles"
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="space-y-[9px]">
                  <FishStat
                    title="Level 12"
                    value="45%"
                    percent={45}
                    type="blue"
                  />

                  <FishStat
                    title="Happiness"
                    value="92 / 100"
                    percent={92}
                    type="green"
                  />

                  <FishStat
                    title="Hunger"
                    value="68 / 100"
                    percent={68}
                    type="yellow"
                  />

                  <FishStat
                    title="Health"
                    value="95 / 100"
                    percent={95}
                    type="blue"
                  />
                </div>
              </div>

              <div
                className="
                  mt-3 flex items-center
                  rounded-[12px]
                  bg-[#e8faf2]
                  px-3 py-2
                  text-[12px] font-bold
                "
              >
                <span>🍃 Earnings</span>

                <span className="ml-auto">
                  🪙 34.2 / hour
                </span>
              </div>

              <div className="mt-2 grid grid-cols-4 gap-2">

                <button className="rounded-[11px] border border-[#bcebd7] bg-[#f4fff9] py-2 text-[11px] font-bold text-[#179a60]">
                  🍃 Feed
                </button>

                <button className="rounded-[11px] border border-[#f2c9df] bg-[#fff6fb] py-2 text-[11px] font-bold text-[#e8388c]">
                  💗 Breed
                </button>

                <button className="rounded-[11px] border border-[#f1d9b8] bg-[#fffaf2] py-2 text-[10px] font-bold text-[#d88218]">
                  🧹 Clean Tank
                </button>

                <button className="rounded-[11px] border border-[#bddff5] bg-[#f3fbff] py-2 text-[10px] font-bold text-[#198ccc]">
                  🎁 Claim Reward
                </button>

              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

/* ======================================================
   DAILY TASK
====================================================== */

function DailyTask({
  title,
  progress,
  done = false,
}: {
  title: string;
  progress: string;
  done?: boolean;
}) {
  return (
    <div className="flex items-center gap-3">

      <div
        className={`
          flex h-6 w-6 shrink-0
          items-center justify-center
          rounded-full border-2
          ${
            done
              ? "border-[#39c96d] bg-[#39c96d] text-white"
              : "border-[#20a8eb]"
          }
        `}
      >
        {done && "✓"}
      </div>

      <span className="min-w-0 flex-1 text-[12px] font-semibold">
        {title}
      </span>

      <span
        className={`text-[11px] font-bold ${
          done
            ? "text-[#35b963]"
            : "text-[#1a2a59]"
        }`}
      >
        {progress}
      </span>
    </div>
  );
}

/* ======================================================
   FISH STAT
====================================================== */

function FishStat({
  title,
  value,
  percent,
  type,
}: {
  title: string;
  value: string;
  percent: number;
  type: "blue" | "green" | "yellow";
}) {
  const barColor =
    type === "green"
      ? "#37bd5c"
      : type === "yellow"
      ? "#f6bd27"
      : "#168fea";

  return (
    <div>

      <div className="flex items-center justify-between text-[11px]">
        <span className="font-bold">
          {title}
        </span>

        <span className="text-[#657a9c]">
          {value}
        </span>
      </div>

      <div className="mt-1 h-[7px] overflow-hidden rounded-full bg-[#e9eef5]">

        <div
          className="h-full rounded-full"
          style={{
            width: `${percent}%`,
            background: barColor,
          }}
        />

      </div>
    </div>
  );
}