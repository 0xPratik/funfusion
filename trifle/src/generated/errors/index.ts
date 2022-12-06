/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

type ErrorWithCode = Error & { code: number };
type MaybeErrorWithCode = ErrorWithCode | null | undefined;

const createErrorFromCodeLookup: Map<number, () => ErrorWithCode> = new Map();
const createErrorFromNameLookup: Map<string, () => ErrorWithCode> = new Map();

/**
 * NumericalOverflow: 'Numerical Overflow'
 *
 * @category Errors
 * @category generated
 */
export class NumericalOverflowError extends Error {
  readonly code: number = 0x0;
  readonly name: string = 'NumericalOverflow';
  constructor() {
    super('Numerical Overflow');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, NumericalOverflowError);
    }
  }
}

createErrorFromCodeLookup.set(0x0, () => new NumericalOverflowError());
createErrorFromNameLookup.set('NumericalOverflow', () => new NumericalOverflowError());

/**
 * InvalidAccount: 'Invalid account'
 *
 * @category Errors
 * @category generated
 */
export class InvalidAccountError extends Error {
  readonly code: number = 0x1;
  readonly name: string = 'InvalidAccount';
  constructor() {
    super('Invalid account');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, InvalidAccountError);
    }
  }
}

createErrorFromCodeLookup.set(0x1, () => new InvalidAccountError());
createErrorFromNameLookup.set('InvalidAccount', () => new InvalidAccountError());

/**
 * InvalidEscrowConstraintModel: 'Invalid Escrow Constraint Model'
 *
 * @category Errors
 * @category generated
 */
export class InvalidEscrowConstraintModelError extends Error {
  readonly code: number = 0x2;
  readonly name: string = 'InvalidEscrowConstraintModel';
  constructor() {
    super('Invalid Escrow Constraint Model');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, InvalidEscrowConstraintModelError);
    }
  }
}

createErrorFromCodeLookup.set(0x2, () => new InvalidEscrowConstraintModelError());
createErrorFromNameLookup.set(
  'InvalidEscrowConstraintModel',
  () => new InvalidEscrowConstraintModelError(),
);

/**
 * InvalidEscrowConstraint: 'Invalid Escrow Constraint'
 *
 * @category Errors
 * @category generated
 */
export class InvalidEscrowConstraintError extends Error {
  readonly code: number = 0x3;
  readonly name: string = 'InvalidEscrowConstraint';
  constructor() {
    super('Invalid Escrow Constraint');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, InvalidEscrowConstraintError);
    }
  }
}

createErrorFromCodeLookup.set(0x3, () => new InvalidEscrowConstraintError());
createErrorFromNameLookup.set('InvalidEscrowConstraint', () => new InvalidEscrowConstraintError());

/**
 * EscrowConstraintViolation: 'Escrow Constraint Violation'
 *
 * @category Errors
 * @category generated
 */
export class EscrowConstraintViolationError extends Error {
  readonly code: number = 0x4;
  readonly name: string = 'EscrowConstraintViolation';
  constructor() {
    super('Escrow Constraint Violation');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, EscrowConstraintViolationError);
    }
  }
}

createErrorFromCodeLookup.set(0x4, () => new EscrowConstraintViolationError());
createErrorFromNameLookup.set(
  'EscrowConstraintViolation',
  () => new EscrowConstraintViolationError(),
);

/**
 * InvalidUpdateAuthority: 'Invalid Update Authority'
 *
 * @category Errors
 * @category generated
 */
export class InvalidUpdateAuthorityError extends Error {
  readonly code: number = 0x5;
  readonly name: string = 'InvalidUpdateAuthority';
  constructor() {
    super('Invalid Update Authority');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, InvalidUpdateAuthorityError);
    }
  }
}

createErrorFromCodeLookup.set(0x5, () => new InvalidUpdateAuthorityError());
createErrorFromNameLookup.set('InvalidUpdateAuthority', () => new InvalidUpdateAuthorityError());

/**
 * FailedToCreatePubkey: 'Failed to create pubkey'
 *
 * @category Errors
 * @category generated
 */
export class FailedToCreatePubkeyError extends Error {
  readonly code: number = 0x6;
  readonly name: string = 'FailedToCreatePubkey';
  constructor() {
    super('Failed to create pubkey');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, FailedToCreatePubkeyError);
    }
  }
}

createErrorFromCodeLookup.set(0x6, () => new FailedToCreatePubkeyError());
createErrorFromNameLookup.set('FailedToCreatePubkey', () => new FailedToCreatePubkeyError());

/**
 * DataTypeMismatch: 'Data type mismatch'
 *
 * @category Errors
 * @category generated
 */
export class DataTypeMismatchError extends Error {
  readonly code: number = 0x7;
  readonly name: string = 'DataTypeMismatch';
  constructor() {
    super('Data type mismatch');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, DataTypeMismatchError);
    }
  }
}

createErrorFromCodeLookup.set(0x7, () => new DataTypeMismatchError());
createErrorFromNameLookup.set('DataTypeMismatch', () => new DataTypeMismatchError());

/**
 * ConstraintAlreadyExists: 'Constraint already exists'
 *
 * @category Errors
 * @category generated
 */
export class ConstraintAlreadyExistsError extends Error {
  readonly code: number = 0x8;
  readonly name: string = 'ConstraintAlreadyExists';
  constructor() {
    super('Constraint already exists');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, ConstraintAlreadyExistsError);
    }
  }
}

createErrorFromCodeLookup.set(0x8, () => new ConstraintAlreadyExistsError());
createErrorFromNameLookup.set('ConstraintAlreadyExists', () => new ConstraintAlreadyExistsError());

/**
 * TokenLimitExceeded: 'Token Limit Exceeded'
 *
 * @category Errors
 * @category generated
 */
export class TokenLimitExceededError extends Error {
  readonly code: number = 0x9;
  readonly name: string = 'TokenLimitExceeded';
  constructor() {
    super('Token Limit Exceeded');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, TokenLimitExceededError);
    }
  }
}

createErrorFromCodeLookup.set(0x9, () => new TokenLimitExceededError());
createErrorFromNameLookup.set('TokenLimitExceeded', () => new TokenLimitExceededError());

/**
 * FailedToFindTokenAmount: 'Failed to find Token Amount'
 *
 * @category Errors
 * @category generated
 */
export class FailedToFindTokenAmountError extends Error {
  readonly code: number = 0xa;
  readonly name: string = 'FailedToFindTokenAmount';
  constructor() {
    super('Failed to find Token Amount');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, FailedToFindTokenAmountError);
    }
  }
}

createErrorFromCodeLookup.set(0xa, () => new FailedToFindTokenAmountError());
createErrorFromNameLookup.set('FailedToFindTokenAmount', () => new FailedToFindTokenAmountError());

/**
 * InvalidCollectionMetadata: 'Invalid Collection Metadata'
 *
 * @category Errors
 * @category generated
 */
export class InvalidCollectionMetadataError extends Error {
  readonly code: number = 0xb;
  readonly name: string = 'InvalidCollectionMetadata';
  constructor() {
    super('Invalid Collection Metadata');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, InvalidCollectionMetadataError);
    }
  }
}

createErrorFromCodeLookup.set(0xb, () => new InvalidCollectionMetadataError());
createErrorFromNameLookup.set(
  'InvalidCollectionMetadata',
  () => new InvalidCollectionMetadataError(),
);

/**
 * TransferEffectConflict: 'Provided Transfer Effects are not compatible'
 *
 * @category Errors
 * @category generated
 */
export class TransferEffectConflictError extends Error {
  readonly code: number = 0xc;
  readonly name: string = 'TransferEffectConflict';
  constructor() {
    super('Provided Transfer Effects are not compatible');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, TransferEffectConflictError);
    }
  }
}

createErrorFromCodeLookup.set(0xc, () => new TransferEffectConflictError());
createErrorFromNameLookup.set('TransferEffectConflict', () => new TransferEffectConflictError());

/**
 * FreezeAuthorityNotSet: 'Freeze Authority Not Set'
 *
 * @category Errors
 * @category generated
 */
export class FreezeAuthorityNotSetError extends Error {
  readonly code: number = 0xd;
  readonly name: string = 'FreezeAuthorityNotSet';
  constructor() {
    super('Freeze Authority Not Set');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, FreezeAuthorityNotSetError);
    }
  }
}

createErrorFromCodeLookup.set(0xd, () => new FreezeAuthorityNotSetError());
createErrorFromNameLookup.set('FreezeAuthorityNotSet', () => new FreezeAuthorityNotSetError());

/**
 * CannotBurnPrintEdition: 'Cannot burn Print Edition'
 *
 * @category Errors
 * @category generated
 */
export class CannotBurnPrintEditionError extends Error {
  readonly code: number = 0xe;
  readonly name: string = 'CannotBurnPrintEdition';
  constructor() {
    super('Cannot burn Print Edition');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, CannotBurnPrintEditionError);
    }
  }
}

createErrorFromCodeLookup.set(0xe, () => new CannotBurnPrintEditionError());
createErrorFromNameLookup.set('CannotBurnPrintEdition', () => new CannotBurnPrintEditionError());

/**
 * ConstraintKeyNotFound: 'Constraint Key Not Found'
 *
 * @category Errors
 * @category generated
 */
export class ConstraintKeyNotFoundError extends Error {
  readonly code: number = 0xf;
  readonly name: string = 'ConstraintKeyNotFound';
  constructor() {
    super('Constraint Key Not Found');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, ConstraintKeyNotFoundError);
    }
  }
}

createErrorFromCodeLookup.set(0xf, () => new ConstraintKeyNotFoundError());
createErrorFromNameLookup.set('ConstraintKeyNotFound', () => new ConstraintKeyNotFoundError());

/**
 * FailedToSerialize: 'Failed to serialize'
 *
 * @category Errors
 * @category generated
 */
export class FailedToSerializeError extends Error {
  readonly code: number = 0x10;
  readonly name: string = 'FailedToSerialize';
  constructor() {
    super('Failed to serialize');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, FailedToSerializeError);
    }
  }
}

createErrorFromCodeLookup.set(0x10, () => new FailedToSerializeError());
createErrorFromNameLookup.set('FailedToSerialize', () => new FailedToSerializeError());

/**
 * FailedToBorrowAccountData: 'Failed to borrow account data'
 *
 * @category Errors
 * @category generated
 */
export class FailedToBorrowAccountDataError extends Error {
  readonly code: number = 0x11;
  readonly name: string = 'FailedToBorrowAccountData';
  constructor() {
    super('Failed to borrow account data');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, FailedToBorrowAccountDataError);
    }
  }
}

createErrorFromCodeLookup.set(0x11, () => new FailedToBorrowAccountDataError());
createErrorFromNameLookup.set(
  'FailedToBorrowAccountData',
  () => new FailedToBorrowAccountDataError(),
);

/**
 * InvalidCollection: 'Failed to deserialize collection'
 *
 * @category Errors
 * @category generated
 */
export class InvalidCollectionError extends Error {
  readonly code: number = 0x12;
  readonly name: string = 'InvalidCollection';
  constructor() {
    super('Failed to deserialize collection');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, InvalidCollectionError);
    }
  }
}

createErrorFromCodeLookup.set(0x12, () => new InvalidCollectionError());
createErrorFromNameLookup.set('InvalidCollection', () => new InvalidCollectionError());

/**
 * Attempts to resolve a custom program error from the provided error code.
 * @category Errors
 * @category generated
 */
export function errorFromCode(code: number): MaybeErrorWithCode {
  const createError = createErrorFromCodeLookup.get(code);
  return createError != null ? createError() : null;
}

/**
 * Attempts to resolve a custom program error from the provided error name, i.e. 'Unauthorized'.
 * @category Errors
 * @category generated
 */
export function errorFromName(name: string): MaybeErrorWithCode {
  const createError = createErrorFromNameLookup.get(name);
  return createError != null ? createError() : null;
}
