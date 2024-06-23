import React from 'react';
import dayjs from "dayjs";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";


const Calander = () => {

    const getDatesInMonth = (year=dayjs().year(), month=dayjs().month()) => {
        const startDate = dayjs().year(year).month(month).date(1);
        const endDate = startDate.endOf("month");
        // console.log(startDate, endDate);

        const datesArray: string[] = [];

        for(let i = startDate.date(); i <= endDate.date(); i++){
            datesArray.push(startDate.date(i).format("YYYY-MM-DD"))
        }

        // console.log(datesArray);
        return datesArray;
    }

    getDatesInMonth(); // more like getDaysInMonth

  return (
    <div className="border border-dashed flex flex-wrap gap-2 p-5 justify-center rounded-md">
        {getDatesInMonth().map((value, index) => {
            return(
                <HoverCard key={index}>
                    <HoverCardTrigger>
                        <div className="h-5 w-5 bg-gray-100 rounded-sm cursor-pointer"></div>
                    </HoverCardTrigger>
                    <HoverCardContent>
                        0 hours on {value}
                    </HoverCardContent>
                </HoverCard>
            )
        })}
    </div>
  )
}

export default Calander