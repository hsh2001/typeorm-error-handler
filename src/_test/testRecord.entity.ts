import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TestRecord {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    name: 'unsigned_int_field',
    unsigned: true,
    type: 'int',
  })
  unsignedIntField!: number;

  @Column({
    name: 'unsigned_tinyint_field',
    unsigned: true,
    type: 'tinyint',
  })
  unsignedTinyintField!: number;

  @Column({
    name: 'signed_int_field',
    unsigned: false,
    type: 'smallint',
  })
  signedSmallintField!: number;

  @Column({
    name: 'signed_tinyint_field',
    unsigned: false,
    type: 'tinyint',
  })
  signedTinyintField!: number;
}
