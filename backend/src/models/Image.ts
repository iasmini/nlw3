import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';

import Orphanage from "./Orphanage";

@Entity('image')
export default class Image {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  path: string;
  
  // nao coloca column pq esse campo nao existe na tabela
  // dado um orfanato qual o campo que retorna o relacionamento inverso (a imagem em si)
  @ManyToOne(() => Orphanage, orphanage => orphanage.images)
  // nome da coluna que relaciona orfanato com imagem
  @JoinColumn({name: 'orphanage_id'})
  orphanage: Orphanage;
}