import Simple from "@dikac/t-validator/simple";
import ValidatorValidatable from "@dikac/t-validator/validatable/validatable";
export default function EqualStandard<Base = unknown, Type extends Base = Base>(compare: Type): Simple<Base, Type, ValidatorValidatable<Base, string>>;
