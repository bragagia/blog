import classnames from "classnames";
import dayjs, { Dayjs } from "dayjs";

import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
dayjs.extend(isSameOrBefore);

import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
dayjs.extend(isSameOrAfter);

import isoWeek from "dayjs/plugin/isoWeek";
dayjs.extend(isoWeek);

import isoWeeksInYear from "dayjs/plugin/isoWeeksInYear"; // dependent on isLeapYear plugin
dayjs.extend(isoWeeksInYear);

import isLeapYear from "dayjs/plugin/isLeapYear";
import { ReactNode } from "react";
dayjs.extend(isLeapYear);

// import utc from "dayjs/plugin/utc";

// import relativeTime from "dayjs/plugin/relativeTime";

// dayjs.extend(utc);
// dayjs.extend(relativeTime);

function numberArray(start: number, length: number) {
  return Array.from({ length: length }, (_, i) => start + i);
}

function displayYear(birthyear: number, current: number) {
  if (current === birthyear) {
    return String(current);
  }

  const age = current - birthyear;
  if (age % 5 === 0) {
    return String(age);
  }

  return "";
}

function getDateFromWeek(year: number, week: number) {
  const firstDayOfYear = new Date(year, 0, 1);
  const days = 2 + (week - 1) * 7 - firstDayOfYear.getDay();
  return dayjs(new Date(year, 0, days));
}

function WeekItem({
  birthdate,
  year,
  week,
}: {
  birthdate: Dayjs;
  year: number;
  week: number;
}) {
  const itemDate = getDateFromWeek(year, week);
  const startOfCurrentWeek = dayjs().startOf("isoWeek");

  const isInLifetime =
    itemDate.isSameOrAfter(birthdate.startOf("isoWeek")) &&
    itemDate.isSameOrBefore(startOfCurrentWeek);

  let color = "border border-gray-400";

  if (!isInLifetime) {
    color = "border border-gray-200";
  }

  const weekData = getWeekData(itemDate);
  const specialContent = weekData.events.reduce(
    (acc, event) => (event.content ? event.content : acc),
    null as ReactNode | null
  );

  return (
    <div
      className={classnames(
        "flex w-4 h-4 rounded-md items-center justify-center bg-white align-top text-sm hover:scale-[2] cursor-pointer",
        { [color]: !specialContent || true }
      )}
    >
      {specialContent}
    </div>
  );
}

function dayjsWeek(date: string) {
  const [year, week] = date.split("-");
  return getDateFromWeek(parseInt(year), parseInt(week));
}

const templates = {
  event: {
    title: "",
    description: null,
    date: dayjs(""),
    style: null,
    content: null,
  },
};

type EventType = {
  title: string;
  description: string | null;
  date: Dayjs;
  style: string | null;
  content: ReactNode | null;
};

type PeriodType = {
  title: string;
  description: string | null;
  from: Dayjs;
  to: Dayjs;
  style: string | null;
};

const lifeData: {
  events: EventType[];
  periods: PeriodType[];
} = {
  events: [
    {
      title: "Birth",
      description: "Your truly came to life",
      date: dayjs("1996-08-09"),
      style: null,
      content: <span>🎂</span>,
    },

    {
      title: "Integration day @Epitech",
      description: null,
      date: dayjs("2014-06-26"),
      style: null,
      content: null,
    },

    {
      title: "WEI @Epitech",
      description: null,
      date: dayjs("2014-09-20"),
      style: null,
      content: <span>🍻</span>,
    },

    {
      title: "Today",
      description: "Here we are",
      date: dayjs(),
      style: "border-red-500",
      content: (
        <span className="flex flex-col text-[0.4rem] leading-none text-center">
          <span>10</span>
          <span>nov</span>
        </span>
      ),
    },

    {
      title: "Life expectancy",
      description: "Bye bye",
      date: dayjs("2083-05-15"),
      style: null,
      content: <span>💀</span>,
    },
  ],

  periods: [
    {
      title: "Epitech Bachelor",
      description: "University",
      from: dayjsWeek("2014-39"),
      to: dayjsWeek("2017-33"),
      style: "",
    },

    {
      title: "Alsace Digitale",
      description: "Internship",
      from: dayjsWeek("2016-35"),
      to: dayjsWeek("2017-13"),
      style: "",
    },

    {
      title: "Scalingo",
      description: "Internship",
      from: dayjsWeek("2017-14"),
      to: dayjsWeek("2017-33"),
      style: "",
    },
  ],
};

function getWeekData(date: Dayjs) {
  return {
    events: lifeData.events.filter((event) =>
      event.date.isSame(date, "isoWeek")
    ),
  };
}

export default function MyLifeInWeeksPage() {
  const birthdate = dayjs("1996-08-09");

  const years = numberArray(birthdate.year(), 100);

  return (
    <div className="mx-auto p-6 md:px-12">
      <div className="flex flex-col">
        {years.map((year, i) => (
          <div
            key={i}
            className={classnames("flex flex-row items-center mb-[0.1rem]", {
              "mt-2": i % 5 == 0 && i > 0,
            })}
          >
            <span className="w-10 text-right pr-1 text-xs font-serif">
              {displayYear(birthdate.year(), year)}
            </span>

            {numberArray(1, dayjs(`${year}-01-01`).isoWeeksInYear()).map(
              (week, i) => (
                <div
                  key={i}
                  className={classnames("mr-[0.1rem]", {
                    "ml-2": (week - 1) % 4 === 0 && week > 1,
                  })}
                >
                  <WeekItem
                    birthdate={dayjs(birthdate)}
                    year={year}
                    week={week}
                  />
                </div>
              )
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
