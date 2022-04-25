#!/usr/bin/env python3

import yaml
import chevron

def main():
    configuration = []
    
    with open('sites.yaml', 'r') as sites_yaml:
        configuration = yaml.safe_load(sites_yaml)
    
    sites = [site for site in configuration['sites']]
    with open('tls_monitor_template.yaml', 'r') as template:
        mustache_template = template.read()
        for site in sites:
            with open(f".github/workflows/{site['domain']}-{site['port']}.yaml", 'w') as workflow:
                content = chevron.render(mustache_template, site) 
                workflow.write(content)

if __name__ == '__main__':
    main()
