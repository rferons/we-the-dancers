import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type DanceMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type RequestMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Dance {
  readonly id: string;
  readonly code: string;
  readonly accessToken: string;
  readonly requestToken: string;
  readonly tokenExpiresAt: string;
  readonly requests?: (Request | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Dance, DanceMetaData>);
  static copyOf(source: Dance, mutator: (draft: MutableModel<Dance, DanceMetaData>) => MutableModel<Dance, DanceMetaData> | void): Dance;
}

export declare class Request {
  readonly id: string;
  readonly songId: string;
  readonly upVoteCount: number;
  readonly downVoteCount: number;
  readonly dance?: Dance | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Request, RequestMetaData>);
  static copyOf(source: Request, mutator: (draft: MutableModel<Request, RequestMetaData>) => MutableModel<Request, RequestMetaData> | void): Request;
}