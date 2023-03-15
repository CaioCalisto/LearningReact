import { Status } from "./Status"

export interface Order {
  id: number,
  start: Date,
  end: Date | null,
  status: Status
}