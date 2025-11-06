// Load environment variables first
import { config } from 'dotenv';
config();

import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import reports from './v1/reports/index.js';
import analyzeReport from './v1/internal/analyze-report.js';
import adminReports from './v1/admin/reports.js';
import adminReportDetail from './v1/admin/reports/[id].js';
import adminReportStatusUpdate from './v1/admin/reports/[id]/status.js';
import adminKnowledge from './v1/admin/knowledge.js';
import agentQuery from './v1/agent/query.js';

const app = new Hono();

app.get('/health', (c) => {
  return c.json({ status: 'ok', service: 'api' });
});

// API v1 routes
app.route('/api/v1/reports', reports);
app.route('/api/v1/internal/analyze-report', analyzeReport);
app.route('/api/v1/admin/reports', adminReports);
app.route('/api/v1/admin/reports/:id', adminReportDetail);
app.route('/api/v1/admin/reports/:id/status', adminReportStatusUpdate);
app.route('/api/v1/admin/knowledge', adminKnowledge);
app.route('/api/v1/agent/query', agentQuery);

// Start the server
const port = Number(process.env.PORT) || 3000;
console.log(`🚀 Server starting on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});

export default app;
