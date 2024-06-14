import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field()
  fName: string;

  @Field({ nullable: true })
  lName?: string;
}
