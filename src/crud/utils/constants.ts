export enum ENTITIES {
  USER = 'user',
  ACCOUNT = 'account',
  ADDRESS = 'address',
  CONTACT = 'contact',
  PRODUCT = 'product',
  ACCOUNT_PRODUCT = 'accountProduct',
}

export enum USER_STATUS {
  ACTIVE = 'active',
  DEACTIVATED = 'deactivated'
}

export const UNIQUE_EMAIL_CONSTRAINT = 'Unique-email';

export enum ACCOUNT_TYPE {
  INDIVIDUAL = 'individual',
  BUSINESS = 'business',
}

export enum CONTACT_TYPE {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}