// @generated by protoc-gen-es v2.0.0 with parameter "target=ts"
// @generated from file test/schemaregistry/serde/test.proto (package test, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_protobuf_descriptor } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file test/schemaregistry/serde/test.proto.
 */
export const file_test_schemaregistry_serde_test: GenFile = /*@__PURE__*/
  fileDesc("CiR0ZXN0L3NjaGVtYXJlZ2lzdHJ5L3NlcmRlL3Rlc3QucHJvdG8SBHRlc3QiyAIKC1Rlc3RNZXNzYWdlEhMKC3Rlc3Rfc3RyaW5nGAEgASgJEhEKCXRlc3RfYm9vbBgCIAEoCBISCgp0ZXN0X2J5dGVzGAMgASgMEhMKC3Rlc3RfZG91YmxlGAQgASgBEhIKCnRlc3RfZmxvYXQYBSABKAISFAoMdGVzdF9maXhlZDMyGAYgASgHEhQKDHRlc3RfZml4ZWQ2NBgHIAEoBhISCgp0ZXN0X2ludDMyGAggASgFEhIKCnRlc3RfaW50NjQYCSABKAMSFQoNdGVzdF9zZml4ZWQzMhgKIAEoDxIVCg10ZXN0X3NmaXhlZDY0GAsgASgQEhMKC3Rlc3Rfc2ludDMyGAwgASgREhMKC3Rlc3Rfc2ludDY0GA0gASgSEhMKC3Rlc3RfdWludDMyGA4gASgNEhMKC3Rlc3RfdWludDY0GA8gASgEQglaBy4uL3Rlc3RiBnByb3RvMw", [file_google_protobuf_descriptor]);

/**
 * @generated from message test.TestMessage
 */
export type TestMessage = Message<"test.TestMessage"> & {
  /**
   * @generated from field: string test_string = 1;
   */
  testString: string;

  /**
   * @generated from field: bool test_bool = 2;
   */
  testBool: boolean;

  /**
   * @generated from field: bytes test_bytes = 3;
   */
  testBytes: Uint8Array;

  /**
   * @generated from field: double test_double = 4;
   */
  testDouble: number;

  /**
   * @generated from field: float test_float = 5;
   */
  testFloat: number;

  /**
   * @generated from field: fixed32 test_fixed32 = 6;
   */
  testFixed32: number;

  /**
   * @generated from field: fixed64 test_fixed64 = 7;
   */
  testFixed64: bigint;

  /**
   * @generated from field: int32 test_int32 = 8;
   */
  testInt32: number;

  /**
   * @generated from field: int64 test_int64 = 9;
   */
  testInt64: bigint;

  /**
   * @generated from field: sfixed32 test_sfixed32 = 10;
   */
  testSfixed32: number;

  /**
   * @generated from field: sfixed64 test_sfixed64 = 11;
   */
  testSfixed64: bigint;

  /**
   * @generated from field: sint32 test_sint32 = 12;
   */
  testSint32: number;

  /**
   * @generated from field: sint64 test_sint64 = 13;
   */
  testSint64: bigint;

  /**
   * @generated from field: uint32 test_uint32 = 14;
   */
  testUint32: number;

  /**
   * @generated from field: uint64 test_uint64 = 15;
   */
  testUint64: bigint;
};

/**
 * Describes the message test.TestMessage.
 * Use `create(TestMessageSchema)` to create a new message.
 */
export const TestMessageSchema: GenMessage<TestMessage> = /*@__PURE__*/
  messageDesc(file_test_schemaregistry_serde_test, 0);

