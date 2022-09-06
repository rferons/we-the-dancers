/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDance = /* GraphQL */ `
  subscription OnCreateDance {
    onCreateDance {
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
export const onUpdateDance = /* GraphQL */ `
  subscription OnUpdateDance {
    onUpdateDance {
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
export const onDeleteDance = /* GraphQL */ `
  subscription OnDeleteDance {
    onDeleteDance {
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
export const onCreateRequest = /* GraphQL */ `
  subscription OnCreateRequest {
    onCreateRequest {
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
export const onUpdateRequest = /* GraphQL */ `
  subscription OnUpdateRequest {
    onUpdateRequest {
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
export const onDeleteRequest = /* GraphQL */ `
  subscription OnDeleteRequest {
    onDeleteRequest {
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
