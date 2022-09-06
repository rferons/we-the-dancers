export type AmplifyDependentResourcesAttributes = {
    "api": {
        "weTheDancersRestApi": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        },
        "weTheDancersGraphApi": {
            "GraphQLAPIKeyOutput": "string",
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        }
    },
    "function": {
        "spotifyLogin": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        },
        "spotifyCallback": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        },
        "spotifyRefreshToken": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        },
        "wethedancersWeTheDancersUtilsLayer": {
            "Arn": "string"
        }
    }
}