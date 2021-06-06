# ubitec TLS Certificate Monitor

This repository contains GitHub Action workflow that monitors ubitec's public domains TLS certificates.

This repository is a small experiment and was inspired by https://github.com/upptime/upptime which uses GitHub Actions Schedule to run a job.

## Job

The job is simple, it run a few steps to check the TLS certificate of the specified domain (using `openssl`).

If the date defined in the `notAfter` field in the certificate is about <= 30 days from the current day, a step will build a Slack message and send it via the define Slack Incoming Webhook (in Secrets).

## TODO

[ ] Find a way to update the repository, otherwise GitHub Actions will be disabled after 60 days of inactivities.

[ ] Inform Slack if the workflow fails. Hint: use `if: failure()`.

[ ] Allow the workflow to loop on a configuration file instead of copy-pasting the workflow file for every domain.


