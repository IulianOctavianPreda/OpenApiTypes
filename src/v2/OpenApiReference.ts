/**
 * A simple object to allow referencing other definitions in the specification.
 * It can be used to reference parameters and responses that are defined at the top level for reuse.
 *
 * The Reference Object is a JSON Reference that uses a JSON Pointer as its value. For this specification, only canonical dereferencing is supported.
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#reference-object
 */
export interface OpenApiReference {
    /**
     * The reference string.
     */
    $ref: string;
}
