"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cn } from "@/lib/utils";
import { useLogStore } from "@/store"


export const Logs = () => {
    // get the log lists from supabase
    const logs = useLogStore((state) => state.logs);
    return (
        <div>
            <Table>
                <TableCaption>A list of your recent Logs.</TableCaption>
                    <TableHeader>
                        <TableRow>
                        <TableHead className="w-1/3">Date</TableHead>
                        <TableHead className="w-1/3">Hour</TableHead>
                        <TableHead className="w-1/3">Note</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {Object.keys(logs).map((key) => {
                            const log = logs[key]
                            return(
                                <TableRow key={key} className={cn(log.hour <= 5 ? "bg-red-100" : "")}>
                                    <TableCell className="font-medium">{new Date(log.date).toDateString()}</TableCell>
                                    <TableCell>{log.hour}</TableCell>
                                    <TableCell>{log.note}</TableCell>
                                </TableRow>
                            )
                        })}
                </TableBody>
            </Table>

        </div>
    )
}