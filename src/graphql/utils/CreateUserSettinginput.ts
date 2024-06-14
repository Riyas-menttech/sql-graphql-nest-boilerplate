import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class createUserSettingInput {
  @Field()
  recNotification: boolean;

  @Field()
  recEmail: boolean;
}
