/**
 * Throw exception if given value is no boolean type
 */
export default function Equal<Compare extends unknown>(value: unknown, compare: Compare, error?: (value: unknown) => Error): Compare;
