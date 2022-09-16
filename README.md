# mesoneer-tls-certificate-watchbot

A poorman's TLS certificate monitoring system. It leverages GitHub Actions to run a workflow daily to probe the TLS certificate of the sites and notify if the expiration date is near.

## How it works

The gist of this is the GitHub Action Workflow `tls-certificate-check.yaml` in `.github/workflows`.

It basically, for each defined site, probe its TLS certificate, then -- depends on the expiration date, send a Slack notification if needed.

## Sites

All monitored sites are defined in `sites.json`. The structure is deadly simple:

```json
{
  "sites": [
    { "domain": "example.org", "port" : 443 },
    { "domain": "another.example.org", "port": 8443 }
  ]
}
```

## Monitoring Logs

The workflow will add a Git commit every time it runs (to ensure that the repo is always active). The file `executions.jsonl` is also appended with a JSON line containing the result of the check.

NOTE: JSONL - https://jsonlines.org/ - is used as it suits the purpose.
