#!/usr/bin/env python3

import yaml
import chevron

def main():
    configuration = []
    
    with open('sites.yaml', 'r') as sites_yaml:
        configuration = yaml.safe_load(sites_yaml)
    
    domains = [site['domain'] for site in configuration['sites']]
    with open('tls_monitor_template.yaml', 'r') as template:
        mustache_template = template.read()
        for domain in domains:
            with open(f".github/workflows/{domain}.yaml", 'w') as workflow:
                content = chevron.render(mustache_template, { 'domain': domain })
                workflow.write(content)

if __name__ == '__main__':
    main()