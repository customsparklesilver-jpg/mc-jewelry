import { defineConfig } from '@playwright/test';

export default defineConfig({
testDir: './tests',
use: {
baseURL: process.env.PLAYWRIGHT_TEST_BASE_URL || 'https://mc-jewelry.myshopify.com',
},
});
