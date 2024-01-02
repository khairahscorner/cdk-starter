#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CdkAppStack } from '../lib/cdk-app-stack';
import { VpcStack } from '../lib/vpc-stack';
import { WidgetServiceStack } from '../lib/widget-stack';

const app = new cdk.App();
new CdkAppStack(app, 'CdkAppStack', {
    env: {
        account: process.env.CDK_DEFAULT_ACCOUNT,
        region: process.env.CDK_DEFAULT_REGION
    },
});
new VpcStack(app, 'diffVpcStack', {
    env: {
        account: process.env.CDK_DEFAULT_ACCOUNT,
        region: process.env.CDK_DEFAULT_REGION
    },
});

new WidgetServiceStack(app, 'widgetServiceStack', {
    env: {
        account: process.env.CDK_DEFAULT_ACCOUNT,
        region: process.env.CDK_DEFAULT_REGION
    },
});