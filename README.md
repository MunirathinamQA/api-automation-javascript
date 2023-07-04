# Sample APIs Application

### Install Application

```
npm i

```

## Upload report to S3 bucket

* Make a copy of aws-credentials.json.template as aws-credentials.json
* And then update aws keys as in below format

```

{
    "bucket": "<add your s3 bucket name>",
    "region": "<mention your s3 bucket region>",
    "accessKeyId": "<accessKey>",
    "secretAccessKey": "<secret>"
}

```

* Command to upload report to s3 bucket.
* Before upload need to run api tests.
* Report should be generated in the build folder.

```
npm run upload-report-s3

```
### Run below command to start API tests

```
npm run sample-project-dev
npm run sample-project-qa
npm run sample-project-dev-sanity
npm run sample-project-qa-sanity

```
* npm run sample-project-dev -> This command will execute all the test files/cases in DEV environment

* npm run sample-project-qa -> This command will execute all the test files/cases in QA environment

* npm run sample-project-dev-sanity -> This command will execute only sanity test files/cases in DEV environment(It will pick only .sanity.js files)

* npm run sample=project-qa-sanity -> This command will execute only sanity test files/cases in QA environment(It will pick only .sanity.js files)

### Update below scripts from package.json file for Mac

````
    "pretest": "rm -rf build",
    "test": "NODE_ENV=$env mocha $files --timeout 0s --reporter mochawesome -reporter-options reportDir=build/$fileName-$env-$(date \"+%d-%b-%Y-%H-%M-%S\"),reportFilename=$fileName",
    "reqres-dev-sanity": "env=dev files=test/reqres/**/**.sanity.js fileName=reqres-sanity npm run test",
    "reqres-dev": "env=dev files=test/reqres/**/**.js fileName=reqres npm run test",
    "reqres-qa-sanity": "env=qa files=test/reqres/**/**.sanity.js fileName=reqres-sanity npm run test",
    "reqres-qa": "env=qa files=test/reqres/**/**.js fileName=reqres npm run test"

```

