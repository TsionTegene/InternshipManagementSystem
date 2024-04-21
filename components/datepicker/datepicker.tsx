"use client"

import * as React from "react"
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { on } from "events"
import { Matcher } from "react-day-picker"

interface DatePickerProps {
  selectedDate: Date | null;
  onDateChange: (date: Date) => void;
  placeholder?: string;
  dateFormat?: string;
  className?: string;
}

export function DatePicker({
  selectedDate,
  onDateChange,
  placeholder = "Pick a date",
  dateFormat = "PPP",
  className = "",
}: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={`w-[240px] justify-start text-left font-normal ${className} ${!selectedDate ? 'text-muted-foreground' : ''}`}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {selectedDate ? format(selectedDate, dateFormat) : <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={selectedDate as Date | undefined} // Cast selectedDate to Date
          onSelect={(date: Date | undefined) => onDateChange(date || new Date())}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}

