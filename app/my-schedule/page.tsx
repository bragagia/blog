"use client";

import dayjs, { Dayjs } from "dayjs";
import SunCalc from "suncalc";

import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
dayjs.extend(isSameOrBefore);

import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
dayjs.extend(isSameOrAfter);

import isoWeek from "dayjs/plugin/isoWeek";
dayjs.extend(isoWeek);

import isoWeeksInYear from "dayjs/plugin/isoWeeksInYear"; // dependent on isLeapYear plugin
dayjs.extend(isoWeeksInYear);

import classNames from "classnames";
import isLeapYear from "dayjs/plugin/isLeapYear";
import { ReactNode, useEffect, useState } from "react";
dayjs.extend(isLeapYear);

function useNow() {
  const [now, setNow] = useState(dayjs());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(dayjs());
    }, 1000 * 60); // Every minute

    return () => clearInterval(interval);
  }, []);

  return now;
}

export default function MyLifeInWeeksPage() {
  const todayWakeUpTime = calcWakeUpTime(dayjs());
  const tomorrowWakeUpTime = calcWakeUpTime(dayjs().add(1, "day"));

  const { sunrise } = SunCalc.getTimes(new Date(), 48.110686, 6.562007);
  const timeSinceSunrise = dayjs().diff(dayjs(sunrise), "minutes");
  const suntimeHour = dayjs()
    .set("hours", 8)
    .set("minutes", 0)
    .add(timeSinceSunrise, "minutes");

  const now = useNow();

  return (
    <div className="mx-auto p-6 md:px-12 font-serif">
      <div className="flex flex-col items-center text-3xl mb-10">
        <p>Time: {now.format("HH:mm")}</p>
        <p>SunTime: {suntimeHour.format("HH:mm")}</p>
        <p>
          diff:
          {" " + suntimeHour.diff(now, "minutes")}min
        </p>
      </div>

      <div className="flex flex-row gap-10">
        <div>
          <h2 className="text-xl text-center">Today:</h2>
          <DailyEvents wakeUpTime={todayWakeUpTime} showStick />
        </div>

        <div className="opacity-40">
          <h2 className="text-xl text-center">Tomorrow:</h2>
          <DailyEvents wakeUpTime={tomorrowWakeUpTime} />
        </div>

        <div className="opacity-40">
          <h2 className="text-xl text-center">Suntime schedule:</h2>
          <DailyEvents wakeUpTime={dayjs().set("hours", 8).set("minutes", 0)} />
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-xl">
          Dates de changements de réveil (changer pour le lendemain):
        </h2>

        {Array.from(Array(365).keys()).map((i) => {
          const date = dayjs().startOf("year").add(i, "day").add(4, "hours"); // Add 4 hours to avoid DST
          const dateWakeUpTime = calcWakeUpTime(date, 30);

          const nextDate = date.add(1, "day");
          const nextWakeUpTime = calcWakeUpTime(nextDate, 30);

          if (!dateWakeUpTime.isSame(nextWakeUpTime.add(-1, "day"), "minute")) {
            return (
              <p key={i} className="my-2">
                {date.format("DD/MM")} -&gt; {nextWakeUpTime.format("HH:mm")}
              </p>
            );
          }
        })}
      </div>
    </div>
  );
}

function DailyEvents({
  wakeUpTime,
  showStick,
}: {
  wakeUpTime: Dayjs;
  showStick?: boolean;
}) {
  let start = 0;

  const events = [
    { duration: 2, name: "Morning routine", classnames: "bg-red-100" },
    { duration: 3.5, name: "Work", classnames: "bg-blue-100" },
    { duration: 1.5, name: "Midi", classnames: "bg-red-100" },
    { duration: 3, name: "Work", classnames: "bg-blue-100" },
    { duration: 1.5, name: "Evening routine", classnames: "bg-red-100" },
    { duration: 2.5, name: "Work", classnames: "bg-blue-100" },
    { duration: 1.5, name: "Bed routine", classnames: "bg-red-100" },
    { duration: 8.5, name: "Sleep", classnames: "bg-gray-200" },
  ];

  let nextEventStartAt = wakeUpTime;

  return (
    <EventHolder showStick={showStick}>
      {events.map((event, i) => {
        const startAt = nextEventStartAt;

        nextEventStartAt = nextEventStartAt.add(event.duration * 60, "minutes");

        return (
          <Event
            key={i}
            startAt={startAt}
            duration={event.duration}
            name={event.name}
            classnames={event.classnames}
          />
        );
      })}
    </EventHolder>
  );
}

function calcWakeUpTime(date: Dayjs, modulo?: number) {
  const { sunrise } = SunCalc.getTimes(date.toDate(), 48.110686, 6.562007);
  sunrise.setSeconds(0, 0);

  const offset = modulo ? modulo / 2 : 0;
  const idealWakeUpTime = dayjs(sunrise).add(-offset, "minutes");

  let minutesToAdd = 0;
  if (modulo) {
    minutesToAdd = modulo - (idealWakeUpTime.toDate().getMinutes() % modulo);
  }

  const wakeUpTimeDate = idealWakeUpTime.add(minutesToAdd, "minutes"); // new Date(idealWakeUpTime.toDate().getTime() + minutesToAdd * 60000);

  return dayjs(wakeUpTimeDate);
}
function EventHolder({
  children,
  showStick,
}: {
  children: ReactNode;
  showStick?: boolean;
}) {
  const now = useNow();

  const height = (24 * 60) / 2;
  const minutesSinceMidnigt =
    now.diff(now.startOf("day").set("hours", 4), "minutes") + 4 * 60;

  const { sunset, sunrise } = SunCalc.getTimes(
    now.toDate(),
    48.110686,
    6.562007
  );

  const minutesToSunrise =
    dayjs(sunrise).diff(now.startOf("day").set("hours", 4), "minutes") + 4 * 60;

  const minutesToSunset =
    dayjs(sunset).diff(now.startOf("day").set("hours", 4), "minutes") + 4 * 60;
  const sunsetDuration = 24 * 60 - minutesToSunset;

  return (
    <div className="flex flex-row relative">
      {showStick && (
        <div className="w-10" style={{ height: `${height}px` }}>
          <div
            className="bg-orange-200 w-10 absolute flex flex-col justify-end"
            style={{
              top: `0px`,
              height: `${minutesToSunrise / 2}px`,
            }}
          >
            <p className="text-xs text-center">
              {dayjs(sunrise).format("HH:mm")}
            </p>
          </div>

          <div
            className="bg-red-500 z-50 h-[2px] w-10 absolute"
            style={{
              top: `${minutesSinceMidnigt / 2}px`,
              marginBottom: `-2px`,
            }}
          />

          <div
            className="bg-blue-300 w-10 absolute"
            style={{
              top: `${minutesToSunset / 2}px`,
              height: `${sunsetDuration / 2}px`,
            }}
          >
            <p className="text-xs text-center">
              {dayjs(sunset).format("HH:mm")}
            </p>
          </div>
        </div>
      )}

      <div className="bg-gray-200 w-[200px]" style={{ height: `${height}px` }}>
        {children}
      </div>
    </div>
  );
}

function Event({
  startAt,
  duration,
  name,
  classnames,
}: {
  startAt: Dayjs;
  duration: number;
  name: string;
  classnames?: string;
}) {
  const minutesSinceMidnigt =
    startAt.diff(startAt.startOf("day").set("hours", 4), "minutes") + 4 * 60; // Set to 4am to avoid DST
  const dayDuration = 24 * 60;

  return (
    <div
      className={classNames("absolute w-[200px] text-sm", classnames)} // flex flex-row items-center
      style={{
        top: `${minutesSinceMidnigt / 2}px`,
        height: `${(dayDuration - minutesSinceMidnigt) / 2}px`,
        marginBottom: `-${(dayDuration - minutesSinceMidnigt) / 2}px`,
      }}
    >
      <div className="m-1">
        <span className="w-16 text-right pr-1">
          {startAt.format("HH:mm")} -
        </span>

        <span className="ml-1">{name}</span>

        <span className=""> {duration}h</span>
      </div>
    </div>
  );
}
