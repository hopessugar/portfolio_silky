module.exports = {
  ci: {
    collect: {
      // Build and serve the site locally for testing
      startServerCommand: 'npm run preview',
      startServerReadyPattern: 'Local:',
      startServerReadyTimeout: 30000,
      url: ['http://localhost:4173'],
      numberOfRuns: 3,
    },
    assert: {
      // Performance thresholds
      assertions: {
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['error', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.9 }],
        
        // Core Web Vitals
        'first-contentful-paint': ['error', { maxNumericValue: 2000 }],
        'largest-contentful-paint': ['error', { maxNumericValue: 2500 }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }],
        
        // Performance metrics
        'speed-index': ['error', { maxNumericValue: 3000 }],
        'interactive': ['error', { maxNumericValue: 3000 }],
        
        // Best practices
        'uses-https': 'error',
        'uses-http2': 'error',
        'uses-text-compression': 'error',
        'uses-responsive-images': 'warn',
        'efficient-animated-content': 'warn',
      },
    },
    upload: {
      // Upload results to Lighthouse CI server (optional)
      target: 'temporary-public-storage',
    },
  },
};