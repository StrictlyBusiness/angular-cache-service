# angular-cache-service

A caching service for AngularJS - supports caching of objects by type and key.

1. [Usage](#usage)
2. [Developing](#dev)
3. [Tests](#tests)
4. [FAQ](#faq)

## Usage
First, install with JSPM

```
  jspm install angular-cache-service=github:StrictlyBusiness/angular-cache-service
```

Thanks to SystemJS you don't have to reference the script but you do have to specify
the service as a dependency of your application.

```
  ...
  import 'angular-cache-service';
  var app = angular.module('sampleapp'), ['angular-cache-service']);
  ...
```
