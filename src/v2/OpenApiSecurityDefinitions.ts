import { OpenApiSecurityScheme } from "./OpenApiSecurityScheme";

/**
 * A declaration of the security schemes available to be used in the specification.
 * This does not enforce the security schemes on the operations and only serves to provide the relevant details for each scheme.
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#security-definitions-object
 */
export interface OpenApiSecurityDefinitions {
    /**
     * A single security scheme definition, mapping a "name" to the scheme it defines.
     */
    [name: string]: OpenApiSecurityScheme;
}
