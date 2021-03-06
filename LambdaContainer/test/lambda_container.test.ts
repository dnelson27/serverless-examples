import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as LambdaContainer from '../lib/lambda-container-stack';

// TODO implement some sample tests for best practices in Lambda

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new LambdaContainer.LambdaContainerStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
