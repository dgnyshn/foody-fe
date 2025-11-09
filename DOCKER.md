# Foody Frontend - Docker Deployment

## Prerequisites

- Docker installed
- Docker Compose installed (optional)
- Router.so API credentials

## Environment Variables

Create a `.env.production` file with your Router.so credentials:

```bash
ROUTER_API_KEY=your_api_key_here
ROUTER_ENDPOINT_ID=your_endpoint_id_here
```

## Build & Run

### Option 1: Using Docker Compose (Recommended)

```bash
# Build and start the container
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the container
docker-compose down
```

### Option 2: Using Docker CLI

```bash
# Build the image
docker build -t foody-fe .

# Run the container
docker run -d \
  -p 3000:3000 \
  -e ROUTER_API_KEY=your_api_key_here \
  -e ROUTER_ENDPOINT_ID=your_endpoint_id_here \
  --name foody-web \
  foody-fe

# View logs
docker logs -f foody-web

# Stop the container
docker stop foody-web
docker rm foody-web
```

## Access the Application

Once running, access the application at:
- Local: http://localhost:3000

## Production Deployment

For production deployment, consider:

1. **Use environment file:**
   ```bash
   docker-compose --env-file .env.production up -d
   ```

2. **Enable HTTPS:** Use a reverse proxy like Nginx or Traefik

3. **Monitor logs:**
   ```bash
   docker-compose logs -f foody-web
   ```

4. **Health checks:** The container includes health checks

## Troubleshooting

### Container won't start
```bash
# Check logs
docker-compose logs foody-web

# Verify environment variables
docker-compose config
```

### Port already in use
```bash
# Change port in docker-compose.yml
ports:
  - "3001:3000"  # Use 3001 instead
```

## Development

For development, use the regular Next.js dev server:
```bash
npm run dev
```

Docker is intended for production builds only.
