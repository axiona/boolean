export default interface Guard<Allow, Expect, Arguments extends unknown[] = []> {

    (value :Allow|Expect, ...extras : Arguments) : value is Expect;
}


export type GuardInferAllow<Allow> = Allow extends Guard<infer As, any, any> ? As : never;
export type GuardInferExpect<Expect> = Expect extends Guard<any, infer As, any> ? As : never;
export type GuardInferArguments<Arguments> = Arguments extends Guard<any, any, infer As> ? As : never;
