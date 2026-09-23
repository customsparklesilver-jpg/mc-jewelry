import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
testDir: './tests',
testMatch: '**/*.test.ts',
use: {
baseURL: process.env.PLAYWRIGHT_TEST_BASE_URL || 'https://mcjewelry.store',
},
projects: [
{
name: 'chromium',
use: { ...devices['Desktop Chrome'] },
},
],
});

