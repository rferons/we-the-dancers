// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Dance, Request } = initSchema(schema);

export {
  Dance,
  Request
};