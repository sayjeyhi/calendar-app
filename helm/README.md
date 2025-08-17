# Helm Charts

This directory contains Helm charts for deploying applications to Kubernetes.

## Available Charts

### calendar-app

A Helm chart for deploying the Calendar Application to Kubernetes.

#### Quick Start on Local

```bash
# Test locally without middleware
helm template calendar-app ./helm/calendar-app -f helm/calendar-app/values-local.yaml

# Install locally
helm install calendar-app ./helm/calendar-app -f helm/calendar-app/values-local.yaml
```

### Run on production
```bash
# Test production with middleware
helm template calendar-app ./helm/calendar-app 

# Install production
helm install calendar-app ./helm/calendar-app
```

# Upgrade existing installation
helm upgrade calendar-app ./calendar-app

# Uninstall
```bash
helm uninstall calendar-app
```

#### Configuration

The chart supports environment-specific configurations:

- **Default values**: `values.yaml` - Production configuration
- **Local development**: `values-local.yaml` - Local development setup

#### Features

- Configurable deployment with rolling updates
- Health checks (liveness and readiness probes)
- Ingress configuration with TLS support
- Traefik middleware for HTTPS redirects
- Resource limits and requests
- Environment-specific configurations

#### Prerequisites

- Kubernetes 1.19+
- Helm 3.0+
- Traefik Ingress Controller (if using ingress)
- cert-manager (if using TLS)

For more detailed information, see the [calendar-app README](./calendar-app/README.md).
