import * as cdk from '@aws-cdk/core'
import * as lamdba from '@aws-cdk/aws-lambda'

export class LambdaContainerStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)
    const dockerCode = lamdba.DockerImageCode.fromImageAsset("./lib/app/")
    const myLambda = new lamdba.DockerImageFunction(this, "MyDockerFunction", {
      code: dockerCode
    })
  }
}
