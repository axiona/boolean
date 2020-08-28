import Return from "@dikac/t-validator/validatable/simple";
import ValidatorValidatable from "@dikac/t-validator/validatable/validatable";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
export default function Boolean<MessageT, Argument>(value: Argument, message: (result: Validatable & Value) => MessageT): Return<any, Argument, boolean, Readonly<ValidatorValidatable<any, MessageT>>>;
