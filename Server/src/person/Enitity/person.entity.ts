import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PersonDocument = Person & Document;
@ObjectType()
@Schema({timestamps:true})
export class Person {
  @Field()
  _id: string;
  @Field()
  @Prop()
  name: string;
  @Field()
  @Prop()
  country: String;
  @Field()
  @Prop()
  Description: string;
  @Field()
  @Prop()
  email: string;
    
  @Field(() => String, { nullable: true })
  @Prop()
  status: string;
  @Prop()
  hashKey: string;
  
  @Field(() => String, { nullable: true })
  @Prop({ type: String })
  image?: string;
}

export const PersonSchema = SchemaFactory.createForClass(Person);
PersonSchema.index({ email: 1 }, { unique: true });
