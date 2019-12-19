/**
 * THIS FILE IS AUTOGENERATED BY 'generateServiceClient.ts'.
 * DO NOT EDIT BY HAND.
 */

import { Request } from 'aws-sdk/lib/request'
import { Response } from 'aws-sdk/lib/response'
import { AWSError } from 'aws-sdk/lib/error'
import { Service } from 'aws-sdk/lib/service'
import { ServiceConfigurationOptions } from 'aws-sdk/lib/service'
import { ConfigBase as Config } from 'aws-sdk/lib/config'
interface Blob {}
declare class ClientSchemas extends Service {
    /**
     * Constructs a service object. This object has one method for each API operation.
     */
    constructor(options?: ClientSchemas.Types.ClientConfiguration)
    config: Config & ClientSchemas.Types.ClientConfiguration
    /**
     * Creates a discoverer.
     */
    createDiscoverer(
        params: ClientSchemas.Types.CreateDiscovererRequest,
        callback?: (err: AWSError, data: ClientSchemas.Types.CreateDiscovererResponse) => void
    ): Request<ClientSchemas.Types.CreateDiscovererResponse, AWSError>
    /**
     * Creates a discoverer.
     */
    createDiscoverer(
        callback?: (err: AWSError, data: ClientSchemas.Types.CreateDiscovererResponse) => void
    ): Request<ClientSchemas.Types.CreateDiscovererResponse, AWSError>
    /**
     * Creates a registry.
     */
    createRegistry(
        params: ClientSchemas.Types.CreateRegistryRequest,
        callback?: (err: AWSError, data: ClientSchemas.Types.CreateRegistryResponse) => void
    ): Request<ClientSchemas.Types.CreateRegistryResponse, AWSError>
    /**
     * Creates a registry.
     */
    createRegistry(
        callback?: (err: AWSError, data: ClientSchemas.Types.CreateRegistryResponse) => void
    ): Request<ClientSchemas.Types.CreateRegistryResponse, AWSError>
    /**
     * Creates a schema definition.
     */
    createSchema(
        params: ClientSchemas.Types.CreateSchemaRequest,
        callback?: (err: AWSError, data: ClientSchemas.Types.CreateSchemaResponse) => void
    ): Request<ClientSchemas.Types.CreateSchemaResponse, AWSError>
    /**
     * Creates a schema definition.
     */
    createSchema(
        callback?: (err: AWSError, data: ClientSchemas.Types.CreateSchemaResponse) => void
    ): Request<ClientSchemas.Types.CreateSchemaResponse, AWSError>
    /**
     * Deletes a discoverer.
     */
    deleteDiscoverer(
        params: ClientSchemas.Types.DeleteDiscovererRequest,
        callback?: (err: AWSError, data: {}) => void
    ): Request<{}, AWSError>
    /**
     * Deletes a discoverer.
     */
    deleteDiscoverer(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>
    /**
     * Deletes a Registry.
     */
    deleteRegistry(
        params: ClientSchemas.Types.DeleteRegistryRequest,
        callback?: (err: AWSError, data: {}) => void
    ): Request<{}, AWSError>
    /**
     * Deletes a Registry.
     */
    deleteRegistry(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>
    /**
     * Delete a schema definition.
     */
    deleteSchema(
        params: ClientSchemas.Types.DeleteSchemaRequest,
        callback?: (err: AWSError, data: {}) => void
    ): Request<{}, AWSError>
    /**
     * Delete a schema definition.
     */
    deleteSchema(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>
    /**
     * Delete the schema version definition
     */
    deleteSchemaVersion(
        params: ClientSchemas.Types.DeleteSchemaVersionRequest,
        callback?: (err: AWSError, data: {}) => void
    ): Request<{}, AWSError>
    /**
     * Delete the schema version definition
     */
    deleteSchemaVersion(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>
    /**
     * Describe the code binding URI.
     */
    describeCodeBinding(
        params: ClientSchemas.Types.DescribeCodeBindingRequest,
        callback?: (err: AWSError, data: ClientSchemas.Types.DescribeCodeBindingResponse) => void
    ): Request<ClientSchemas.Types.DescribeCodeBindingResponse, AWSError>
    /**
     * Describe the code binding URI.
     */
    describeCodeBinding(
        callback?: (err: AWSError, data: ClientSchemas.Types.DescribeCodeBindingResponse) => void
    ): Request<ClientSchemas.Types.DescribeCodeBindingResponse, AWSError>
    /**
     * Describes the discoverer.
     */
    describeDiscoverer(
        params: ClientSchemas.Types.DescribeDiscovererRequest,
        callback?: (err: AWSError, data: ClientSchemas.Types.DescribeDiscovererResponse) => void
    ): Request<ClientSchemas.Types.DescribeDiscovererResponse, AWSError>
    /**
     * Describes the discoverer.
     */
    describeDiscoverer(
        callback?: (err: AWSError, data: ClientSchemas.Types.DescribeDiscovererResponse) => void
    ): Request<ClientSchemas.Types.DescribeDiscovererResponse, AWSError>
    /**
     * Describes the registry.
     */
    describeRegistry(
        params: ClientSchemas.Types.DescribeRegistryRequest,
        callback?: (err: AWSError, data: ClientSchemas.Types.DescribeRegistryResponse) => void
    ): Request<ClientSchemas.Types.DescribeRegistryResponse, AWSError>
    /**
     * Describes the registry.
     */
    describeRegistry(
        callback?: (err: AWSError, data: ClientSchemas.Types.DescribeRegistryResponse) => void
    ): Request<ClientSchemas.Types.DescribeRegistryResponse, AWSError>
    /**
     * Retrieve the schema definition.
     */
    describeSchema(
        params: ClientSchemas.Types.DescribeSchemaRequest,
        callback?: (err: AWSError, data: ClientSchemas.Types.DescribeSchemaResponse) => void
    ): Request<ClientSchemas.Types.DescribeSchemaResponse, AWSError>
    /**
     * Retrieve the schema definition.
     */
    describeSchema(
        callback?: (err: AWSError, data: ClientSchemas.Types.DescribeSchemaResponse) => void
    ): Request<ClientSchemas.Types.DescribeSchemaResponse, AWSError>
    /**
     * Get the code binding source URI.
     */
    getCodeBindingSource(
        params: ClientSchemas.Types.GetCodeBindingSourceRequest,
        callback?: (err: AWSError, data: ClientSchemas.Types.GetCodeBindingSourceResponse) => void
    ): Request<ClientSchemas.Types.GetCodeBindingSourceResponse, AWSError>
    /**
     * Get the code binding source URI.
     */
    getCodeBindingSource(
        callback?: (err: AWSError, data: ClientSchemas.Types.GetCodeBindingSourceResponse) => void
    ): Request<ClientSchemas.Types.GetCodeBindingSourceResponse, AWSError>
    /**
     * Get the discovered schema that was generated based on sampled events.
     */
    getDiscoveredSchema(
        params: ClientSchemas.Types.GetDiscoveredSchemaRequest,
        callback?: (err: AWSError, data: ClientSchemas.Types.GetDiscoveredSchemaResponse) => void
    ): Request<ClientSchemas.Types.GetDiscoveredSchemaResponse, AWSError>
    /**
     * Get the discovered schema that was generated based on sampled events.
     */
    getDiscoveredSchema(
        callback?: (err: AWSError, data: ClientSchemas.Types.GetDiscoveredSchemaResponse) => void
    ): Request<ClientSchemas.Types.GetDiscoveredSchemaResponse, AWSError>
    /**
     * List the discoverers.
     */
    listDiscoverers(
        params: ClientSchemas.Types.ListDiscoverersRequest,
        callback?: (err: AWSError, data: ClientSchemas.Types.ListDiscoverersResponse) => void
    ): Request<ClientSchemas.Types.ListDiscoverersResponse, AWSError>
    /**
     * List the discoverers.
     */
    listDiscoverers(
        callback?: (err: AWSError, data: ClientSchemas.Types.ListDiscoverersResponse) => void
    ): Request<ClientSchemas.Types.ListDiscoverersResponse, AWSError>
    /**
     * List the registries.
     */
    listRegistries(
        params: ClientSchemas.Types.ListRegistriesRequest,
        callback?: (err: AWSError, data: ClientSchemas.Types.ListRegistriesResponse) => void
    ): Request<ClientSchemas.Types.ListRegistriesResponse, AWSError>
    /**
     * List the registries.
     */
    listRegistries(
        callback?: (err: AWSError, data: ClientSchemas.Types.ListRegistriesResponse) => void
    ): Request<ClientSchemas.Types.ListRegistriesResponse, AWSError>
    /**
     * Provides a list of the schema versions and related information.
     */
    listSchemaVersions(
        params: ClientSchemas.Types.ListSchemaVersionsRequest,
        callback?: (err: AWSError, data: ClientSchemas.Types.ListSchemaVersionsResponse) => void
    ): Request<ClientSchemas.Types.ListSchemaVersionsResponse, AWSError>
    /**
     * Provides a list of the schema versions and related information.
     */
    listSchemaVersions(
        callback?: (err: AWSError, data: ClientSchemas.Types.ListSchemaVersionsResponse) => void
    ): Request<ClientSchemas.Types.ListSchemaVersionsResponse, AWSError>
    /**
     * List the schemas.
     */
    listSchemas(
        params: ClientSchemas.Types.ListSchemasRequest,
        callback?: (err: AWSError, data: ClientSchemas.Types.ListSchemasResponse) => void
    ): Request<ClientSchemas.Types.ListSchemasResponse, AWSError>
    /**
     * List the schemas.
     */
    listSchemas(
        callback?: (err: AWSError, data: ClientSchemas.Types.ListSchemasResponse) => void
    ): Request<ClientSchemas.Types.ListSchemasResponse, AWSError>
    /**
     * Get tags for resource.
     */
    listTagsForResource(
        params: ClientSchemas.Types.ListTagsForResourceRequest,
        callback?: (err: AWSError, data: ClientSchemas.Types.ListTagsForResourceResponse) => void
    ): Request<ClientSchemas.Types.ListTagsForResourceResponse, AWSError>
    /**
     * Get tags for resource.
     */
    listTagsForResource(
        callback?: (err: AWSError, data: ClientSchemas.Types.ListTagsForResourceResponse) => void
    ): Request<ClientSchemas.Types.ListTagsForResourceResponse, AWSError>
    /**
     *
     */
    lockServiceLinkedRole(
        params: ClientSchemas.Types.LockServiceLinkedRoleRequest,
        callback?: (err: AWSError, data: ClientSchemas.Types.LockServiceLinkedRoleResponse) => void
    ): Request<ClientSchemas.Types.LockServiceLinkedRoleResponse, AWSError>
    /**
     *
     */
    lockServiceLinkedRole(
        callback?: (err: AWSError, data: ClientSchemas.Types.LockServiceLinkedRoleResponse) => void
    ): Request<ClientSchemas.Types.LockServiceLinkedRoleResponse, AWSError>
    /**
     * Put code binding URI
     */
    putCodeBinding(
        params: ClientSchemas.Types.PutCodeBindingRequest,
        callback?: (err: AWSError, data: ClientSchemas.Types.PutCodeBindingResponse) => void
    ): Request<ClientSchemas.Types.PutCodeBindingResponse, AWSError>
    /**
     * Put code binding URI
     */
    putCodeBinding(
        callback?: (err: AWSError, data: ClientSchemas.Types.PutCodeBindingResponse) => void
    ): Request<ClientSchemas.Types.PutCodeBindingResponse, AWSError>
    /**
     * Search the schemas
     */
    searchSchemas(
        params: ClientSchemas.Types.SearchSchemasRequest,
        callback?: (err: AWSError, data: ClientSchemas.Types.SearchSchemasResponse) => void
    ): Request<ClientSchemas.Types.SearchSchemasResponse, AWSError>
    /**
     * Search the schemas
     */
    searchSchemas(
        callback?: (err: AWSError, data: ClientSchemas.Types.SearchSchemasResponse) => void
    ): Request<ClientSchemas.Types.SearchSchemasResponse, AWSError>
    /**
     * Starts the discoverer
     */
    startDiscoverer(
        params: ClientSchemas.Types.StartDiscovererRequest,
        callback?: (err: AWSError, data: ClientSchemas.Types.StartDiscovererResponse) => void
    ): Request<ClientSchemas.Types.StartDiscovererResponse, AWSError>
    /**
     * Starts the discoverer
     */
    startDiscoverer(
        callback?: (err: AWSError, data: ClientSchemas.Types.StartDiscovererResponse) => void
    ): Request<ClientSchemas.Types.StartDiscovererResponse, AWSError>
    /**
     * Stops the discoverer
     */
    stopDiscoverer(
        params: ClientSchemas.Types.StopDiscovererRequest,
        callback?: (err: AWSError, data: ClientSchemas.Types.StopDiscovererResponse) => void
    ): Request<ClientSchemas.Types.StopDiscovererResponse, AWSError>
    /**
     * Stops the discoverer
     */
    stopDiscoverer(
        callback?: (err: AWSError, data: ClientSchemas.Types.StopDiscovererResponse) => void
    ): Request<ClientSchemas.Types.StopDiscovererResponse, AWSError>
    /**
     * Add tags to a resource.
     */
    tagResource(
        params: ClientSchemas.Types.TagResourceRequest,
        callback?: (err: AWSError, data: {}) => void
    ): Request<{}, AWSError>
    /**
     * Add tags to a resource.
     */
    tagResource(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>
    /**
     *
     */
    unlockServiceLinkedRole(
        params: ClientSchemas.Types.UnlockServiceLinkedRoleRequest,
        callback?: (err: AWSError, data: ClientSchemas.Types.UnlockServiceLinkedRoleResponse) => void
    ): Request<ClientSchemas.Types.UnlockServiceLinkedRoleResponse, AWSError>
    /**
     *
     */
    unlockServiceLinkedRole(
        callback?: (err: AWSError, data: ClientSchemas.Types.UnlockServiceLinkedRoleResponse) => void
    ): Request<ClientSchemas.Types.UnlockServiceLinkedRoleResponse, AWSError>
    /**
     * Removes tags from a resource.
     */
    untagResource(
        params: ClientSchemas.Types.UntagResourceRequest,
        callback?: (err: AWSError, data: {}) => void
    ): Request<{}, AWSError>
    /**
     * Removes tags from a resource.
     */
    untagResource(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>
    /**
     * Updates the discoverer
     */
    updateDiscoverer(
        params: ClientSchemas.Types.UpdateDiscovererRequest,
        callback?: (err: AWSError, data: ClientSchemas.Types.UpdateDiscovererResponse) => void
    ): Request<ClientSchemas.Types.UpdateDiscovererResponse, AWSError>
    /**
     * Updates the discoverer
     */
    updateDiscoverer(
        callback?: (err: AWSError, data: ClientSchemas.Types.UpdateDiscovererResponse) => void
    ): Request<ClientSchemas.Types.UpdateDiscovererResponse, AWSError>
    /**
     * Updates a registry.
     */
    updateRegistry(
        params: ClientSchemas.Types.UpdateRegistryRequest,
        callback?: (err: AWSError, data: ClientSchemas.Types.UpdateRegistryResponse) => void
    ): Request<ClientSchemas.Types.UpdateRegistryResponse, AWSError>
    /**
     * Updates a registry.
     */
    updateRegistry(
        callback?: (err: AWSError, data: ClientSchemas.Types.UpdateRegistryResponse) => void
    ): Request<ClientSchemas.Types.UpdateRegistryResponse, AWSError>
    /**
     * Updates the schema definition
     */
    updateSchema(
        params: ClientSchemas.Types.UpdateSchemaRequest,
        callback?: (err: AWSError, data: ClientSchemas.Types.UpdateSchemaResponse) => void
    ): Request<ClientSchemas.Types.UpdateSchemaResponse, AWSError>
    /**
     * Updates the schema definition
     */
    updateSchema(
        callback?: (err: AWSError, data: ClientSchemas.Types.UpdateSchemaResponse) => void
    ): Request<ClientSchemas.Types.UpdateSchemaResponse, AWSError>
}
declare namespace ClientSchemas {
    export type CodeGenerationStatus = 'CREATE_IN_PROGRESS' | 'CREATE_COMPLETE' | 'CREATE_FAILED' | string
    export interface CreateDiscovererRequest {
        /**
         * A description for the discoverer.
         */
        Description?: __stringMin0Max256
        /**
         * The ARN of the event bus.
         */
        SourceArn: __stringMin20Max1600
        /**
         * Tags associated with the resource.
         */
        Tags?: Tags
    }
    export interface CreateDiscovererResponse {
        /**
         * The description of the discoverer.
         */
        Description?: __string
        /**
         * The ARN of the discoverer.
         */
        DiscovererArn?: __string
        /**
         * The ID of the discoverer.
         */
        DiscovererId?: __string
        /**
         * The ARN of the event bus.
         */
        SourceArn?: __string
        /**
         * The state of the discoverer.
         */
        State?: DiscovererState
        /**
         * Tags associated with the resource.
         */
        Tags?: Tags
    }
    export interface CreateRegistryRequest {
        /**
         * A description of the registry to be created.
         */
        Description?: __stringMin0Max256
        RegistryName: __string
        /**
         * Tags to associate with the registry.
         */
        Tags?: Tags
    }
    export interface CreateRegistryResponse {
        /**
         * The description of the registry.
         */
        Description?: __string
        /**
         * The ARN of the registry.
         */
        RegistryArn?: __string
        /**
         * The name of the registry.
         */
        RegistryName?: __string
        /**
         * Tags associated with the registry.
         */
        Tags?: Tags
    }
    export interface CreateSchemaRequest {
        Content: __stringMin1Max100000
        /**
         * A description of the schema.
         */
        Description?: __stringMin0Max256
        RegistryName: __string
        SchemaName: __string
        /**
         * Tags associated with the schema.
         */
        Tags?: Tags
        Type: Type
    }
    export interface CreateSchemaResponse {
        /**
         * The description of the schema.
         */
        Description?: __string
        /**
         * The date and time that schema was modified.
         */
        LastModified?: __timestampIso8601
        /**
         * The ARN of the schema.
         */
        SchemaArn?: __string
        /**
         * The name of the schema.
         */
        SchemaName?: __string
        /**
         * The version number of the schema
         */
        SchemaVersion?: __string
        Tags?: Tags
        /**
         * The type of the schema.
         */
        Type?: __string
        /**
         * The date the schema version was created.
         */
        VersionCreatedDate?: __timestampIso8601
    }
    export interface DeleteDiscovererRequest {
        DiscovererId: __string
    }
    export interface DeleteRegistryRequest {
        RegistryName: __string
    }
    export interface DeleteSchemaRequest {
        RegistryName: __string
        SchemaName: __string
    }
    export interface DeleteSchemaVersionRequest {
        RegistryName: __string
        SchemaName: __string
        SchemaVersion: __string
    }
    export interface DescribeCodeBindingRequest {
        Language: __string
        RegistryName: __string
        SchemaName: __string
        SchemaVersion?: __string
    }
    export interface DescribeCodeBindingResponse {
        /**
         * The time and date that the code binding was created.
         */
        CreationDate?: __timestampIso8601
        /**
         * The date and time that code bindings were modified.
         */
        LastModified?: __timestampIso8601
        /**
         * The version number of the schema.
         */
        SchemaVersion?: __string
        /**
         * The current status of code binding generation.
         */
        Status?: CodeGenerationStatus
    }
    export interface DescribeDiscovererRequest {
        DiscovererId: __string
    }
    export interface DescribeDiscovererResponse {
        /**
         * The description of the discoverer.
         */
        Description?: __string
        /**
         * The ARN of the discoverer.
         */
        DiscovererArn?: __string
        /**
         * The ID of the discoverer.
         */
        DiscovererId?: __string
        /**
         * The ARN of the event bus.
         */
        SourceArn?: __string
        /**
         * The state of the discoverer.
         */
        State?: DiscovererState
        /**
         * Tags associated with the resource.
         */
        Tags?: Tags
    }
    export interface DescribeRegistryRequest {
        RegistryName: __string
    }
    export interface DescribeRegistryResponse {
        /**
         * The description of the registry.
         */
        Description?: __string
        /**
         * The ARN of the registry.
         */
        RegistryArn?: __string
        /**
         * The name of the registry.
         */
        RegistryName?: __string
        /**
         * Tags associated with the registry.
         */
        Tags?: Tags
    }
    export interface DescribeSchemaRequest {
        RegistryName: __string
        SchemaName: __string
        SchemaVersion?: __string
    }
    export interface DescribeSchemaResponse {
        Content?: __string
        /**
         * The description of the schema.
         */
        Description?: __string
        /**
         * The date and time that schema was modified.
         */
        LastModified?: __timestampIso8601
        /**
         * The ARN of the schema.
         */
        SchemaArn?: __string
        /**
         * The name of the schema.
         */
        SchemaName?: __string
        /**
         * The version number of the schema
         */
        SchemaVersion?: __string
        /**
         * Tags associated with the resource.
         */
        Tags?: Tags
        /**
         * The type of the schema.
         */
        Type?: __string
        /**
         * The date the schema version was created.
         */
        VersionCreatedDate?: __timestampIso8601
    }
    export type DiscovererState = 'STARTED' | 'STOPPED' | string
    export interface DiscovererSummary {
        /**
         * The ARN of the discoverer.
         */
        DiscovererArn?: __string
        /**
         * The ID of the discoverer.
         */
        DiscovererId?: __string
        /**
         * The ARN of the event bus.
         */
        SourceArn?: __string
        State?: DiscovererState
        /**
         * Tags associated with the resource.
         */
        Tags?: Tags
    }
    export interface GetCodeBindingSourceRequest {
        Language: __string
        RegistryName: __string
        SchemaName: __string
        SchemaVersion?: __string
    }
    export interface GetCodeBindingSourceResponse {
        Body?: Body
    }
    export interface GetDiscoveredSchemaRequest {
        /**
         * An array of strings that
         */
        Events: __listOfGetDiscoveredSchemaVersionItemInput
        /**
         * The type of event.
         */
        Type: Type
    }
    export interface GetDiscoveredSchemaResponse {
        Content?: __string
    }
    export type GetDiscoveredSchemaVersionItemInput = string
    export interface ListDiscoverersRequest {
        DiscovererIdPrefix?: __string
        Limit?: __integer
        NextToken?: __string
        SourceArnPrefix?: __string
    }
    export interface ListDiscoverersResponse {
        /**
         * An array of DiscovererSummary information.
         */
        Discoverers?: __listOfDiscovererSummary
        /**
         * The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.
         */
        NextToken?: __string
    }
    export interface ListRegistriesRequest {
        Limit?: __integer
        NextToken?: __string
        RegistryNamePrefix?: __string
        Scope?: __string
    }
    export interface ListRegistriesResponse {
        /**
         * The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.
         */
        NextToken?: __string
        /**
         * An array of registry summaries.
         */
        Registries?: __listOfRegistrySummary
    }
    export interface ListSchemaVersionsRequest {
        Limit?: __integer
        NextToken?: __string
        RegistryName: __string
        SchemaName: __string
    }
    export interface ListSchemaVersionsResponse {
        /**
         * The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.
         */
        NextToken?: __string
        /**
         * An array of schema version summaries.
         */
        SchemaVersions?: __listOfSchemaVersionSummary
    }
    export interface ListSchemasRequest {
        Limit?: __integer
        NextToken?: __string
        RegistryName: __string
        SchemaNamePrefix?: __string
    }
    export interface ListSchemasResponse {
        /**
         * The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.
         */
        NextToken?: __string
        /**
         * An array of schema summaries.
         */
        Schemas?: __listOfSchemaSummary
    }
    export interface ListTagsForResourceRequest {
        ResourceArn: __string
    }
    export interface ListTagsForResourceResponse {
        Tags: Tags
    }
    export interface LockServiceLinkedRoleRequest {
        RoleArn: __stringMin1Max1600
        Timeout: __integerMin1Max29000
    }
    export interface LockServiceLinkedRoleResponse {
        CanBeDeleted?: __boolean
        ReasonOfFailure?: __stringMin1Max1600
        RelatedResources?: __listOfDiscovererSummary
    }
    export interface PutCodeBindingRequest {
        Language: __string
        RegistryName: __string
        SchemaName: __string
        SchemaVersion?: __string
    }
    export interface PutCodeBindingResponse {
        /**
         * The time and date that the code binding was created.
         */
        CreationDate?: __timestampIso8601
        /**
         * The date and time that code bindings were modified.
         */
        LastModified?: __timestampIso8601
        /**
         * The version number of the schema.
         */
        SchemaVersion?: __string
        /**
         * The current status of code binding generation.
         */
        Status?: CodeGenerationStatus
    }
    export interface RegistrySummary {
        /**
         * The ARN of the registry.
         */
        RegistryArn?: __string
        /**
         * The name of the registry.
         */
        RegistryName?: __string
        /**
         * Tags associated with the registry.
         */
        Tags?: Tags
    }
    export interface SchemaSummary {
        /**
         * The date and time that schema was modified.
         */
        LastModified?: __timestampIso8601
        /**
         * The ARN of the schema.
         */
        SchemaArn?: __string
        /**
         * The name of the schema.
         */
        SchemaName?: __string
        /**
         * Tags associated with the schema.
         */
        Tags?: Tags
        /**
         * The number of versions available for the schema.
         */
        VersionCount?: __long
    }
    export interface SchemaVersionSummary {
        /**
         * The ARN of the schema version.
         */
        SchemaArn?: __string
        /**
         * The name of the schema.
         */
        SchemaName?: __string
        /**
         * The version number of the schema.
         */
        SchemaVersion?: __string
    }
    export interface SearchSchemaSummary {
        /**
         * The name of the registry.
         */
        RegistryName?: __string
        /**
         * The ARN of the schema.
         */
        SchemaArn?: __string
        /**
         * The name of the schema.
         */
        SchemaName?: __string
        /**
         * An array of schema version summaries.
         */
        SchemaVersions?: __listOfSearchSchemaVersionSummary
    }
    export interface SearchSchemaVersionSummary {
        CreatedDate?: __timestampIso8601
        /**
         * The version number of the schema
         */
        SchemaVersion?: __string
    }
    export interface SearchSchemasRequest {
        Keywords: __string
        Limit?: __integer
        NextToken?: __string
        RegistryName: __string
    }
    export interface SearchSchemasResponse {
        /**
         * The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.
         */
        NextToken?: __string
        /**
         * An array of SearchSchemaSummary information.
         */
        Schemas?: __listOfSearchSchemaSummary
    }
    export interface StartDiscovererRequest {
        DiscovererId: __string
    }
    export interface StartDiscovererResponse {
        /**
         * The ID of the discoverer.
         */
        DiscovererId?: __string
        /**
         * The state of the discoverer.
         */
        State?: DiscovererState
    }
    export interface StopDiscovererRequest {
        DiscovererId: __string
    }
    export interface StopDiscovererResponse {
        /**
         * The ID of the discoverer.
         */
        DiscovererId?: __string
        /**
         * The state of the discoverer.
         */
        State?: DiscovererState
    }
    export interface TagResourceRequest {
        ResourceArn: __string
        Tags: Tags
    }
    export type Tags = { [key: string]: __string }
    export type Type = 'OpenApi3' | string
    export interface UnlockServiceLinkedRoleRequest {
        RoleArn: __stringMin1Max1600
    }
    export interface UnlockServiceLinkedRoleResponse {}
    export interface UntagResourceRequest {
        ResourceArn: __string
        TagKeys: __listOf__string
    }
    export interface UpdateDiscovererRequest {
        /**
         * The description of the discoverer to update.
         */
        Description?: __stringMin0Max256
        DiscovererId: __string
    }
    export interface UpdateDiscovererResponse {
        /**
         * The description of the discoverer.
         */
        Description?: __string
        /**
         * The ARN of the discoverer.
         */
        DiscovererArn?: __string
        /**
         * The ID of the discoverer.
         */
        DiscovererId?: __string
        /**
         * The ARN of the event bus.
         */
        SourceArn?: __string
        /**
         * The state of the discoverer.
         */
        State?: DiscovererState
        /**
         * Tags associated with the resource.
         */
        Tags?: Tags
    }
    export interface UpdateRegistryRequest {
        /**
         * The description of the registry to update.
         */
        Description?: __stringMin0Max256
        RegistryName: __string
    }
    export interface UpdateRegistryResponse {
        /**
         * The description of the registry.
         */
        Description?: __string
        /**
         * The ARN of the registry.
         */
        RegistryArn?: __string
        /**
         * The name of the registry.
         */
        RegistryName?: __string
        /**
         * Tags associated with the registry.
         */
        Tags?: Tags
    }
    export interface UpdateSchemaRequest {
        /**
         * The ID of the client token.
         */
        ClientTokenId?: __stringMin0Max36
        /**
         * The source of the schema definition.
         */
        Content?: __stringMin1Max100000
        /**
         * The description of the schema.
         */
        Description?: __stringMin0Max256
        RegistryName: __string
        SchemaName: __string
        /**
         * The schema type for the events schema.
         */
        Type?: Type
    }
    export interface UpdateSchemaResponse {
        /**
         * The description of the schema.
         */
        Description?: __string
        /**
         * The date and time that schema was modified.
         */
        LastModified?: __timestampIso8601
        /**
         * The ARN of the schema.
         */
        SchemaArn?: __string
        /**
         * The name of the schema.
         */
        SchemaName?: __string
        /**
         * The version number of the schema
         */
        SchemaVersion?: __string
        Tags?: Tags
        /**
         * The type of the schema.
         */
        Type?: __string
        /**
         * The date the schema version was created.
         */
        VersionCreatedDate?: __timestampIso8601
    }
    export type __boolean = boolean
    export type __integer = number
    export type __integerMin1Max29000 = number
    export type __listOfDiscovererSummary = DiscovererSummary[]
    export type __listOfGetDiscoveredSchemaVersionItemInput = GetDiscoveredSchemaVersionItemInput[]
    export type __listOfRegistrySummary = RegistrySummary[]
    export type __listOfSchemaSummary = SchemaSummary[]
    export type __listOfSchemaVersionSummary = SchemaVersionSummary[]
    export type __listOfSearchSchemaSummary = SearchSchemaSummary[]
    export type __listOfSearchSchemaVersionSummary = SearchSchemaVersionSummary[]
    export type __listOf__string = __string[]
    export type __long = number
    export type __string = string
    export type __stringMin0Max256 = string
    export type __stringMin0Max36 = string
    export type __stringMin1Max100000 = string
    export type __stringMin1Max1600 = string
    export type __stringMin20Max1600 = string
    export type __timestampIso8601 = Date
    export type Body = Buffer | Uint8Array | Blob | string
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    export type apiVersion = '2019-12-02' | 'latest' | string
    export interface ClientApiVersions {
        /**
         * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
         */
        apiVersion?: apiVersion
    }
    export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions
    /**
     * Contains interfaces for use with the ClientSchemas client.
     */
    export import Types = ClientSchemas
}
export = ClientSchemas