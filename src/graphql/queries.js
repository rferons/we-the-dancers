/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDance = /* GraphQL */ `
  query GetDance($id: ID!) {
    getDance(id: $id) {
      code
      accessToken
      requestToken
      tokenExpiresAt
      requests {
        items {
          id
          songId
          upVoteCount
          downVoteCount
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          danceRequestsId
        }
        nextToken
        startedAt
      }
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listDances = /* GraphQL */ `
  query ListDances(
    $filter: ModelDanceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDances(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        code
        accessToken
        requestToken
        tokenExpiresAt
        requests {
          nextToken
          startedAt
        }
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncDances = /* GraphQL */ `
  query SyncDances(
    $filter: ModelDanceFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDances(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        code
        accessToken
        requestToken
        tokenExpiresAt
        requests {
          nextToken
          startedAt
        }
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getRequest = /* GraphQL */ `
  query GetRequest($id: ID!) {
    getRequest(id: $id) {
      id
      songId
      upVoteCount
      downVoteCount
      dance {
        code
        accessToken
        requestToken
        tokenExpiresAt
        requests {
          nextToken
          startedAt
        }
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      danceRequestsId
    }
  }
`;
export const listRequests = /* GraphQL */ `
  query ListRequests(
    $filter: ModelRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRequests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        songId
        upVoteCount
        downVoteCount
        dance {
          code
          accessToken
          requestToken
          tokenExpiresAt
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        danceRequestsId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncRequests = /* GraphQL */ `
  query SyncRequests(
    $filter: ModelRequestFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRequests(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        songId
        upVoteCount
        downVoteCount
        dance {
          code
          accessToken
          requestToken
          tokenExpiresAt
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        danceRequestsId
      }
      nextToken
      startedAt
    }
  }
`;
