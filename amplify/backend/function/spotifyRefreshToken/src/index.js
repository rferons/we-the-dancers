/*
Use the following code to retrieve configured secrets from SSM:

const aws = require('aws-sdk');

const { Parameters } = await (new aws.SSM())
  .getParameters({
    Names: ["SPOTIFY_CLIENT_SECRET"].map(secretName => process.env[secretName]),
    WithDecryption: true,
  })
  .promise();

Parameters will be of the form { Name: 'secretName', Value: 'secretValue', ... }[]
*/
const RequestUtils = require('/opt/RequestUtils');
const aws = require('aws-sdk');
// Create service client module using ES6 syntax.
import { DynamoDBClient, UpdateItemCommand } from "@aws-sdk/client-dynamodb";
// Set the AWS Region.
const REGION = "us-east-1"; //e.g. "us-east-1"

exports.handler = async (event) => {

  const { Parameter: SpotifyClientSecret } = await (new aws.SSM())
    .getParameter({
      Name: process.env.SPOTIFY_CLIENT_SECRET,
      WithDecryption: true,
    })
    .promise();

  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = SpotifyClientSecret.Value;

  try {

    const data = {
      refresh_token: event.queryStringParameters.refreshToken,
      grant_type: 'refresh_token'
    }

    // convert the form data into an urlencoded string
    const formData = RequestUtils.urlEncode(data);

    const response = await RequestUtils.request({
      hostname: 'accounts.spotify.com',
      path: '/api/token',
      port: 443,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        //'Content-Length': Buffer.byteLength(formData),
        'Authorization': 'Basic ' + Buffer.from(clientId + ':' + clientSecret).toString('base64')
      }
    }, formData);

    const access_token = response.body.access_token;
    const expires_in = response.body.expires_in;

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Methods': 'GET OPTIONS',
      },
      body: JSON.stringify({
        access_token,
        expires_in
      })
    }
  } catch (err) {
    return {
      statusCode: 500,
      statusMessage: err
    }
  }
};
