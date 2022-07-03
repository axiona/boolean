import BooleanMessage from '../string/boolean';
import Value from '@alirya/value/value';

/**
 * create {@see TypeError} from {@see BooleanMessage}
 * @param value
 * @param subject
 * @param conversion
 */
export function BooleanParameters(
    value: unknown,
    subject ?: string ,
    conversion ?: (value:unknown)=>string
) : TypeError {

    return new TypeError(BooleanMessage.Parameters(value, false, subject, conversion));
}


/**
 * create {@see TypeError} from {@see BooleanMessage}
 * @param value
 * @param subject
 * @param conversion
 */
export function BooleanParameter(
    {
        value,
        subject,
        conversion = value => typeof value
    } : Value & {subject ?: string} & {conversion ?: (value:unknown)=>string}
) : TypeError {

    return BooleanParameters(value, subject, conversion);
}


namespace Boolean {
    export const Parameters = BooleanParameters;
    export const Parameter = BooleanParameter;
}
export default Boolean;