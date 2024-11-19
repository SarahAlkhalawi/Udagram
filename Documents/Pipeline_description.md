# Pipeline Description

This document describes the CircleCI pipeline for the Udagram application, automating the build, lint, test, and deployment processes for both the front-end and back-end. The pipeline uses CircleCI orbs, Docker images, and manual approval steps for controlled deployments.

## Pipeline Overview

The pipeline consists of three main jobs:
1. **Build**: Installs dependencies, runs linters, and builds the front-end and back-end.
2. **Deploy**: Deploys the application to AWS Elastic Beanstalk after manual approval.
3. **Approval**: Ensures deployment only happens after manual approval on the `main` branch.

The pipeline workflow is as follows:

1. Build Job: Runs first, performing the necessary build tasks.
2. Hold Step: A manual approval step waits for confirmation to proceed.
3. Deploy Job: Runs after approval and deploys the application to AWS.
