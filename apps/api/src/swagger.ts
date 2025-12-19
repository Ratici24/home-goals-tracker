export const swaggerSpec = {
  openapi: '3.0.0',
  info: {
    title: 'Home Goals Tracker API',
    version: '1.0.0',
  },
  paths: {
    '/health': {
      get: {
        summary: 'Health check',
        responses: {
          200: {
            description: 'API is alive',
          },
        },
      },
    },
    '/goals': {
      get: {
        summary: 'List goals',
        responses: {
          200: { description: 'Goals list' },
        },
      },
      post: {
        summary: 'Create goal',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  title: { type: 'string' },
                  priority: { type: 'number' },
                },
                required: ['title'],
              },
            },
          },
        },
        responses: {
          201: { description: 'Goal created' },
        },
      },
    },
  },
};
