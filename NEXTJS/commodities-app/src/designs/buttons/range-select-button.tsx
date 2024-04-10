import React from "react";
import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/lib/components/ui/popover";
import { Calendar } from "@/lib/components/ui/calendar";
import { DateRange } from "react-day-picker";
import { format } from "date-fns";

function RangeSelectButton() {
  const [dateRange, setDateRange] = React.useState<DateRange>();
  const buttonLabel = () => (
    <>
      {dateRange && dateRange.from !== undefined && dateRange.to !== undefined
        ? `${format(dateRange.from, "MM/dd/yyyy")} - ${format(dateRange.to, "MM/dd/yyyy")}`
        : "Custom"}
    </>
  );

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className={"px-3 py-1 border-2 rounded-xl min-w-36"}>
          <div className={"flex flex-row justify-center"}>
            {buttonLabel()}
            <Image
              src={"/chevron-down.svg"}
              alt={"Chevron Right Button"}
              width={"0"}
              height={"0"}
              style={{ width: "auto", height: "auto" }}
            />
          </div>
        </button>
      </PopoverTrigger>
      <PopoverContent>
        <div className={"flex flex-row justify-center"}>
          <Calendar
            mode={"range"}
            selected={dateRange}
            onSelect={setDateRange}
            initialFocus
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default RangeSelectButton;
