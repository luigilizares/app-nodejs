import { EnumValueObject } from '../../../shared/domain/valueObject/enumValueObject';
import { InvalidArgumentError } from '../../../shared/domain/valueObject/invalidArgumentError';

export enum TransactionStatuses {
	PENDING = 'pending',
	APPROVED = 'approved',
	REJECTED = 'rejected'
}

export class TransactionStatus extends EnumValueObject<TransactionStatuses> {
	constructor(value: TransactionStatuses) {
		super(value, Object.values(TransactionStatuses));
	}

	static fromValue(value: string): TransactionStatus {
		switch (value) {
			case TransactionStatuses.PENDING:
				return new TransactionStatus(TransactionStatuses.PENDING);
			case TransactionStatuses.APPROVED:
				return new TransactionStatus(TransactionStatuses.APPROVED);
			case TransactionStatuses.REJECTED:
				return new TransactionStatus(TransactionStatuses.REJECTED);
			default:
				throw new InvalidArgumentError(`The transaction status ${value} is invalid`);
		}
	}

	public isPending(): boolean {
		return this.value === TransactionStatuses.PENDING;
	}

	protected throwErrorForInvalidValue(value: TransactionStatuses): void {
		throw new InvalidArgumentError(`The transaction status ${value} is invalid`);
	}
}
