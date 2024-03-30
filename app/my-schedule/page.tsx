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
import { ReactNode } from "react";
dayjs.extend(isLeapYear);

export default function MyLifeInWeeksPage() {
  // 48,110686 / 6,562007

  const { sunrise } = SunCalc.getTimes(
    dayjs().add(0, "day").toDate(),
    48.110686,
    6.562007
  );

  const minutesToAdd = 30 - (sunrise.getMinutes() % 30);

  const wakeUpTimeDate = new Date(sunrise.getTime() + minutesToAdd * 60000);
  wakeUpTimeDate.setSeconds(0, 0);

  const wakeUpTime = dayjs(wakeUpTimeDate);

  return (
    <div className="mx-auto p-6 md:px-12 font-serif">
      <EventHolder>
        <Event
          startAt={wakeUpTime.add(0, "minutes")}
          classnames="bg-red-100"
          name="Morning routine"
        />

        <Event
          startAt={wakeUpTime.add(1.5 * 60, "minutes")}
          classnames="bg-blue-100"
          name="Work"
        />

        <Event
          startAt={wakeUpTime.add(6 * 60, "minutes")}
          classnames="bg-red-100"
          name="Midi"
        />

        <Event
          startAt={wakeUpTime.add(7.5 * 60, "minutes")}
          classnames="bg-blue-100"
          name="Work"
        />

        <Event
          startAt={wakeUpTime.add(10 * 60, "minutes")}
          classnames="bg-red-100"
          name="Evening routine"
        />

        <Event
          startAt={wakeUpTime.add(12 * 60, "minutes")}
          classnames="bg-blue-100"
          name="Work"
        />

        <Event
          startAt={wakeUpTime.add(14 * 60, "minutes")}
          classnames="bg-red-100"
          name="Bed routine"
        />

        <Event
          startAt={wakeUpTime.add(15 * 60, "minutes")}
          classnames="bg-gray-200"
          name="Sleep"
        />
      </EventHolder>

      <div>
        <p>Dates de changements:</p>
        {Array.from(Array(365).keys()).map((i) => {
          const date = dayjs().startOf("year").add(i, "day");
          const prevDate = date.add(-1, "day");

          const { sunrise: sunriseDate } = SunCalc.getTimes(
            date.toDate(),
            48.110686,
            6.562007
          );
          const dateMinutesToAdd = 30 - (sunriseDate.getMinutes() % 30);
          const sunrise = dayjs(sunriseDate).add(dateMinutesToAdd, "minutes");
          const dateMinutesSinceMidnight = sunrise.diff(
            sunrise.startOf("day"),
            "minutes"
          );

          const { sunrise: prevSunriseDate } = SunCalc.getTimes(
            prevDate.toDate(),
            48.110686,
            6.562007
          );
          const prevDateMinutesToAdd = 30 - (prevSunriseDate.getMinutes() % 30);
          const prevSunrise = dayjs(prevSunriseDate).add(
            prevDateMinutesToAdd,
            "minutes"
          );
          const prevDateMinutesSinceMidnight = prevSunrise.diff(
            prevSunrise.startOf("day"),
            "minutes"
          );

          if (!(dateMinutesSinceMidnight === prevDateMinutesSinceMidnight)) {
            return (
              <p key={i} className="my-2">
                {date.format("DD/MM")} -&gt; {sunrise.format("HH:mm")}
              </p>
            );
          }
        })}
      </div>
    </div>
  );
}

function EventHolder({ children }: { children: ReactNode }) {
  const height = (24 * 60) / 2;
  const minutesSinceMidnigt = dayjs().diff(dayjs().startOf("day"), "minutes");

  return (
    <div className="flex flex-row">
      <div className="w-5" style={{ height: `${height}px` }}>
        <div
          className="bg-red-500 h-[2px] relative"
          style={{
            top: `${minutesSinceMidnigt / 2}px`,
          }}
        ></div>
      </div>
      <div className="bg-gray-200 w-[500px]" style={{ height: `${height}px` }}>
        {children}
      </div>
    </div>
  );
}

function Event({
  startAt,
  name,
  classnames,
}: {
  startAt: Dayjs;
  name: string;
  classnames?: string;
}) {
  const minutesSinceMidnigt = startAt.diff(startAt.startOf("day"), "minutes");
  const dayDuration = 24 * 60;

  return (
    <div
      className={classNames("absolute w-[500px] text-sm", classnames)} // flex flex-row items-center
      style={{
        top: `${minutesSinceMidnigt / 2}px`,
        height: `${(dayDuration - minutesSinceMidnigt) / 2}px`,
      }}
    >
      <div className="m-1">
        <span className="w-16 text-right pr-1">
          {startAt.format("HH:mm")} -
        </span>
        <span className="ml-1">{name}</span>
      </div>
    </div>
  );
}
