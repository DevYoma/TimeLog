"use client"

import React from 'react';
import dayjs from "dayjs";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { cn } from '@/lib/utils';
import { useLogStore } from '@/store';


const Calander = () => {
    // store
    const logs = useLogStore((state) => state.logs);

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

    const getColor = (value: number) => {
        if(value === 0){
            return "bg-gray-100"
        }else if(value < 5){
            return "bg-green-100"
        }else if (value < 10){
            return "bg-green-300"
        }else{
            return "bg-green-500"
        }
    }

    // console.log(logs);
    // const hour = 0;

  return (
    <div className="border border-dashed flex flex-wrap gap-2 p-5 justify-center rounded-md">
        {getDatesInMonth().map((value, index) => {
            const log = logs[value] 
            // console.log(typeof log)
            return(
                <HoverCard key={index}>
                    <HoverCardTrigger>
                        <div className={cn("h-5 w-5 rounded-sm cursor-pointer", getColor(log?.hour || 0))}></div>
                    </HoverCardTrigger>
                    <HoverCardContent>
                        {log?.hour || 0} hours on {value}
                    </HoverCardContent>
                </HoverCard>
            )
        })}
    </div>
  )
}

export default Calander