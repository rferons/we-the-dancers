/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDance = /* GraphQL */ `
  subscription OnCreateDance {
    onCreateDance {
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
export const onUpdateDance = /* GraphQL */ `
  subscription OnUpdateDance {
    onUpdateDance {
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
export const onDeleteDance = /* GraphQL */ `
  subscription OnDeleteDance {
    onDeleteDance {
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
export const onCreateRequest = /* GraphQL */ `
  subscription OnCreateRequest {
    onCreateRequest {
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
export const onUpdateRequest = /* GraphQL */ `
  subscription OnUpdateRequest {
    onUpdateRequest {
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
export const onDeleteRequest = /* GraphQL */ `
  subscription OnDeleteRequest {
    onDeleteRequest {
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
