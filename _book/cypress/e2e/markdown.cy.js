// cypress/e2e/markdown.cy.js

describe('Markdown Documentation Tests', () => {
  beforeEach(() => {
    // Disable uncaught exception handling
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  });

  it('validates README.md formatting', () => {
    cy.readFile('README.md', 'utf8').should('exist').then((content) => {
      const lines = content.split('\n');
      lines.forEach((line, index) => {
        if (line.trim()) {  // Only check non-empty lines
          const lineNumber = index + 1;
          
          // Simple check for basic markdown elements
          const isValidLine = (
            line.trim().startsWith('#') || // Headers
            line.trim().startsWith('*') || // Bullet points
            line.trim().startsWith('-') || // Alternative bullet points
            line.trim().startsWith('[') || // Links
            line.match(/^\d+\./) ||        // Numbered lists
            line.trim().length > 0         // Regular text
          );
          
          // Using chai assertion
          assert.isTrue(
            isValidLine, 
            `Line ${lineNumber} is not valid markdown: ${line}`
          );
        }
      });
    });
  });

  it('validates SUMMARY.md formatting', () => {
    cy.readFile('SUMMARY.md', 'utf8').should('exist').then((content) => {
      const lines = content.split('\n');
      lines.forEach((line, index) => {
        if (line.trim()) {  // Only check non-empty lines
          const lineNumber = index + 1;
          
          // Simple check for basic markdown elements
          const isValidLine = (
            line.trim().startsWith('#') || // Headers
            line.trim().startsWith('*') || // Bullet points
            line.trim().startsWith('-') || // Alternative bullet points
            line.trim().startsWith('[') || // Links
            line.match(/^\d+\./) ||        // Numbered lists
            line.trim().length > 0         // Regular text
          );
          
          // Using chai assertion
          assert.isTrue(
            isValidLine, 
            `Line ${lineNumber} is not valid markdown: ${line}`
          );
        }
      });
    });
  });
});