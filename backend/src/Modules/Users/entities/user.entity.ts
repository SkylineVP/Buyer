import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from "typeorm"
//import { PurchaseList } from "../../PurchaseLists/entities/purchase-list.entity"
import * as bcrypt from "bcrypt"

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 100 })
  name: string

  @Column({ unique: true })
  email: string

  @Column()
  password: string

  //@OneToMany(() => PurchaseList, (purchaseList) => purchaseList.user, { cascade: true })
  //purchaseLists: PurchaseList[]

  @BeforeInsert()
  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 10)
  }
}
