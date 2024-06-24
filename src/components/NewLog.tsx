"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { GrAdd } from "react-icons/gr"
import { DatePicker } from "./DatePicker"
import { useLogStore } from "@/store"
import { useToast } from "./ui/use-toast"
import dayjs from "dayjs"

export function NewLog() {
    // Toast
    const { toast } = useToast();

    // getting state from Zustand store
    const log = useLogStore((state) => state.log);
    const logs = useLogStore((state) => state.logs)
    const setLog = useLogStore((state) => state.setLog);
    const setLogs = useLogStore((state) => state.setLogs);

    const closeDialog = () => {
      document.getElementById("close-btn")?.click()
    }

    const validateLog = () => {
        if(!log.date || !log.hour || log.hour === 0){
          throw "Date or hour can not be empty"
        }else if (log.hour >= 24){
          throw "Please enter a valid hour between 0 and 24"
        }
    }

    const submitLog = () => {
      try {
        validateLog();
        setLogs(log, dayjs(log.date).format("YYYY-MM-DD"))
        // console.log(logs)
        toast({
          variant: "default",
          title: "Successfully created Log",
          description: `${log.hour} hours in ${log.date.toDateString()}`,
        });
        closeDialog();
        // connect to supabase


      } catch (error) {
        console.log(error)
        toast({
          variant: "destructive",
          title: "Failed to create log",
          description: error as string,
        })
      }
    }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="w-full sm:w-72 border-dashed border py-3 flex items-center justify-center rounded-md hover:border-solid cursor-pointer">
          <GrAdd className="cursor-pointer" />
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Log</DialogTitle>
          <DialogDescription>
            Remember, time is your most valuable asset - invest it wisely with
            our Time Log App!
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="date" className="text-right">
              date{" "}
            </Label>
            {/* <Input id="date" type="number" className="col-span-3" /> */}
            <DatePicker />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="hour" className="text-right">
              hour
            </Label>
            <Input 
                id="hour"
                type="number"
                className="col-span-3"
                value={log.hour}
                onChange={(e) => setLog({
                    ...log, 
                    hour: parseInt(e.target.value)
                })}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="note" className="text-right">
              Note
            </Label>
            <Input
              id="note"
              placeholder="Enter your note here"
              className="col-span-3"
              value={log.note}
              onChange={(e) => setLog({
                ...log, 
                note: e.target.value
              })}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={submitLog}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
