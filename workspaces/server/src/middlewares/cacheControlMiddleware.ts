import { createMiddleware } from 'hono/factory';

export const cacheControlMiddleware = createMiddleware(async (c, next) => {
  await next();
  if (c.req.url.includes('/images/') && c.req.method === 'GET') {
    c.res.headers.append('Cache-Control', 'public');
    c.res.headers.append('Cache-Control', 'max-age=3600');
  } else {
    c.res.headers.append('Cache-Control', 'private');
    c.res.headers.append('Cache-Control', 'no-store');
  }
});
