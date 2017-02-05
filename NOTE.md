# Workflow

* [Install travis.rb in Ubuntu](https://github.com/travis-ci/travis.rb#ubuntu)
* [Use travis to encrypt key and release by npm](https://docs.travis-ci.com/user/deployment/npm/)


## Travis ci

* Test
  * Run test case
* After test
  * Publish covergae report to codecov
* Deploy
  * If you have make prodcution files in deploy stage, please set `skip_clean` to `true`, otherwise it will ignore the files and do release by provider

## codecov

* If you have `codecov.yml` in any directory of repo, please enter inn codecov dashboard and install codecov bot, it will comment report on RP.
