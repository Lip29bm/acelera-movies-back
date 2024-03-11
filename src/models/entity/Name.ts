import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class LogIn {
  @PrimaryGeneratedColumn()
  id: number
  @Column({ name: "usuario", type: "varchar" })
  usuario: string
  @Column({ name: "senha", type: "int" })
  senha: number
}
