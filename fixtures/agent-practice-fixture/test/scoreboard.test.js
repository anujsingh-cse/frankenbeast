// Regression test suite
// Fixing the issue with the dependency vulnerability scan
const { execSync } = require('child_process');

try {
  execSync('node scripts/dependency-vulnerability-sla.mjs "${state_args[@]}" --format json --fail-on-new-critical-high > "$state.next"', { stdio: 'inherit' });
  execSync('node scripts/dependency-vulnerability-sla.mjs "${state_args[@]}" --format human --no-fail-on-sla', { stdio: 'inherit' });
} catch (error) {
  console.error('Error running dependency vulnerability scan:', error);
  process.exit(1);
}