import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';

import Image from "./Image";

@Entity('orphanage')
export default class Orphanage {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  name: string;
  @Column()
  latitude: number;
  @Column()
  longitude: number;
  @Column()
  about: string;
  @Column()
  instructions: string;
  @Column()
  opening_hours: string;
  @Column()
  open_on_weekends: boolean;
  
  // nao coloca column pq esse campo nao existe na tabela
  // dada uma imagem qual o campo que retorna o relacionamento inverso (o orfanato em si)
  // cascade: ['insert', 'update']: quando criar ou atualizar o orfanato já cria/atualiza as imagens
  @OneToMany(() => Image, image => image.orphanage, {
    cascade: ['insert', 'update']
  })
  // nome da coluna que relaciona orfanato com imagem
  @JoinColumn({name: 'orphanage_id'})
  images: Image[];
}