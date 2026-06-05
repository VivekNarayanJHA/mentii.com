export const healthCheck = (req, res) => {
  res.json({
    status: 'OK',
    message: 'Health check passed',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
};

export default { healthCheck };
