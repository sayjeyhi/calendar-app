# Calendar App
> A simple calendar application built with React, Next.js, and Tailwind CSS.

This is just a demo sample calendar app to work on deployment and containerization skills.

```bash
# Build and run with Docker Compose
docker-compose up --build

# Or build manually
docker build -t calendar-app .
docker run -p 3000:3000 calendar-app
```

## For github container registry

```bash
docker tag calendar-app:latest ghcr.io/sayjeyhi/test-image:latest
```


```bash
# Tag for OrbStack's local registry
docker tag calendar-app:latest localhost:5000/calendar-app:latest

# Push to local registry
docker push localhost:5000/calendar-app:latest
```

```bash
# Apply Kubernetes manifests
kubectl apply -f k8s/
```

Or you can Just run the deployment.yaml file and the service.yaml file separately:

```bash
# Deploy the application
kubectl apply -f k8s/deployment.yaml

# Expose the application
kubectl apply -f k8s/service.yaml
```
