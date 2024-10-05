import { Injectable } from "@nestjs/common"
export let db_count = 0

@Injectable()
export class AppService {
  addCount(): number {
    db_count += 1
    return db_count
  }
  setCount(newCount: number): number {
    return (db_count = newCount)
  }
  getCount(): number {
    return db_count
  }
}
