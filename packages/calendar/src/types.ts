export interface CalendarEvent {
  rowid: number;
  summary: string | undefined;
  start_date: number | undefined;
  end_date: number | undefined;
  all_day: number;
  status: number | undefined;
  hidden: number;
  orig_item_id: number | undefined;
}

export interface DetailedCalendarEvent extends CalendarEvent {
  description?: string;
  url?: string;
  location?: string;
  recurrence_rule?: string;
  calendar_name?: string;
}

export interface FormattedEvent {
  id: number;
  title: string;
  startTime: string | undefined;
  endTime: string | undefined;
  allDay: boolean;
  status: "cancelled" | "tentative" | "confirmed";
  isRescheduled: boolean;
}

export interface FormattedDetailedEvent extends FormattedEvent {
  description: string | undefined;
  url: string | undefined;
  location: string | undefined;
  recurrenceRule: string | undefined;
  calendar: string | undefined;
}

export interface GetEventsOptions {
  limit?: number;
  includeRescheduled?: boolean;
}

export interface DateRangeOptions {
  startDate: string;
  endDate: string;
  includeRescheduled?: boolean;
}

export interface SearchOptions {
  query: string;
  limit?: number;
  timeRange?: "all" | "past" | "future";
  includeRescheduled?: boolean;
}
