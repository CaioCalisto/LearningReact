import { Status } from "./Status"

export type Order = {
  id: number,
  start: Date,
  end: Date,
  status: Status
}