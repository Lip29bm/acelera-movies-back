import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Movies {
  @PrimaryGeneratedColumn()
  id: number
  @Column({ name: "title" })
  title: string
  @Column({ name: "gender" })
  gender: string
  @Column({ name: "classification" })
  classification: string
  @Column({ name: "subtitle" })
  subtitle: string
  @Column({ name: "image" })
  image: string
  @Column({ name: "releaseDate" })
  releaseDate: number
  @Column({ name: "director" })
  director: string
  @Column({ name: "writer" })
  writer: string
  @Column({ name: "studio" })
  studio: string
  @Column({ name: "actors" })
  actors: string
  @Column({ name: "resume" })
  resume: string
  @Column({ name: "awards" })
  awards: string
  @Column({ name: "note" })
  note: number
}
// type Filme= {
//     id:number,
//     title:string,
//     gender:string,
//     classification:string,
//     subtitle:string,
//     image:string,
//     releaseDate:number,
//     director:string,
//     writer:string,
//     studio:string,
//     actors:string,
//     resume:string,
//     awards:string,
//     note:number
// }
