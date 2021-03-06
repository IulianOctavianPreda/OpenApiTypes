/**
 * A simple object to allow referencing other components in the specification, internally and externally.
 * The Reference Object is defined by JSON Reference and follows the same structure, behavior and rules.
 * For this specification, reference resolution is accomplished as defined by the JSON Reference specification and not by the JSON Schema specification.
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#referenceObject
 */
export interface OpenApiReference {
    /** The reference string. */
    $ref?: string;
}
