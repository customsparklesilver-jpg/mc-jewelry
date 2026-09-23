import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
testDir: './tests',
testMatch: '**/*.test.ts',
use: {
baseURL:process.env.PLAYWRIGHT_TEST_BASE_URL || 'https://mc-jewelry-a3c90e379ea9cc7a2c4e.o2.myshopify.dev',
{
name: 'chromium',
use: { ...devices['Desktop Chrome'] },
},
],
});

