/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDance = /* GraphQL */ `
  query GetDance($id: ID!) {
    getDance(id: $id) {
      id
      code
      pin
      status
      disableExplicitSongs
      playlistId
      musicProvider
      accessToken
      refreshToken
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
        id
        code
        pin
        status
        disableExplicitSongs
        playlistId
        musicProvider
        accessToken
        refreshToken
        tokenExpiresAt
        requests {
          nextToken
          startedAt
        }
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
        id
        code
        pin
        status
        disableExplicitSongs
        playlistId
        musicProvider
        accessToken
        refreshToken
        tokenExpiresAt
        requests {
          nextToken
          startedAt
        }
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
        id
        code
        pin
        status
        disableExplicitSongs
        playlistId
        musicProvider
        accessToken
        refreshToken
        tokenExpiresAt
        requests {
          nextToken
          startedAt
        }
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
          id
          code
          pin
          status
          disableExplicitSongs
          playlistId
          musicProvider
          accessToken
          refreshToken
          tokenExpiresAt
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
          id
          code
          pin
          status
          disableExplicitSongs
          playlistId
          musicProvider
          accessToken
          refreshToken
          tokenExpiresAt
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
export const danceByCode = /* GraphQL */ `
  query DanceByCode(
    $code: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDanceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    danceByCode(
      code: $code
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        code
        pin
        status
        disableExplicitSongs
        playlistId
        musicProvider
        accessToken
        refreshToken
        tokenExpiresAt
        requests {
          nextToken
          startedAt
        }
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
