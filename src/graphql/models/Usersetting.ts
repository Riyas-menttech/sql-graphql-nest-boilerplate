import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'settings' })
@ObjectType()
export class UserSetting {
  @PrimaryColumn()
  @Field(() => Int)
  userId: number;

  @Column()
  @Field({ defaultValue: false })
  recNotification: boolean;

  @Column()
  @Field({ defaultValue: false })
  recEmail: boolean;
}
