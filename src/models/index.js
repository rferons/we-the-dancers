// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const DanceStatus = {
  "ACTIVE": "ACTIVE",
  "INACTIVE": "INACTIVE"
};

const { Dance, Request } = initSchema(schema);

export {
  Dance,
  Request,
  DanceStatus
};