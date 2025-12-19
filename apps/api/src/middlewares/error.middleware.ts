import type { ErrorRequestHandler } from 'express';

export const errorMiddleware: ErrorRequestHandler = (err, _req, res, next) => {
  if (res.headersSent) return next(err);

  const status = typeof err?.status === 'number' ? err.status : 500;

  res.status(status).json({
    error: {
      message: err?.message ?? 'Internal Server Error',
      status,
    },
  });
};
