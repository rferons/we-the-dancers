/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDance = /* GraphQL */ `
  mutation CreateDance(
    $input: CreateDanceInput!
    $condition: ModelDanceConditionInput
  ) {
    createDance(input: $input, condition: $condition) {
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
export const updateDance = /* GraphQL */ `
  mutation UpdateDance(
    $input: UpdateDanceInput!
    $condition: ModelDanceConditionInput
  ) {
    updateDance(input: $input, condition: $condition) {
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
export const deleteDance = /* GraphQL */ `
  mutation DeleteDance(
    $input: DeleteDanceInput!
    $condition: ModelDanceConditionInput
  ) {
    deleteDance(input: $input, condition: $condition) {
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
export const createRequest = /* GraphQL */ `
  mutation CreateRequest(
    $input: CreateRequestInput!
    $condition: ModelRequestConditionInput
  ) {
    createRequest(input: $input, condition: $condition) {
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
export const updateRequest = /* GraphQL */ `
  mutation UpdateRequest(
    $input: UpdateRequestInput!
    $condition: ModelRequestConditionInput
  ) {
    updateRequest(input: $input, condition: $condition) {
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
export const deleteRequest = /* GraphQL */ `
  mutation DeleteRequest(
    $input: DeleteRequestInput!
    $condition: ModelRequestConditionInput
  ) {
    deleteRequest(input: $input, condition: $condition) {
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
