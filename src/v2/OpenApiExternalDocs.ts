/**
 * Allows referencing an external resource for extended documentation.
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#external-documentation-object
 */
export interface OpenApiExternalDocs {
    /**
     * A short description of the target documentation. GFM syntax can be used for rich text representation.
     */
    description?: string;
    /**
     * The URL for the target documentation. Value MUST be in the format of a URL.
     */
    url: string;
}
