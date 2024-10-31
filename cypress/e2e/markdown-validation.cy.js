// cypress/e2e/markdown.cy.js

describe('Markdown Documentation Tests', () => {
  const markdownFiles = [
    'README.md',
    'SUMMARY.md'
  ];

  markdownFiles.forEach(file => {
    it(`validates markdown formatting for ${file}`, () => {
      // Using Cypress's built-in file reading
      cy.readFile(file).then((content) => {
        const lines = content.split('\n');
        
        lines.forEach((line, index) => {
          // Skip empty lines and horizontal rules
          if (line.trim() === '' || line.trim().match(/^[-*_]{3,}$/)) {
            return;
          }

          // Define validation patterns
          const patterns = {
            header: /^#{1,6}\s+.+/, // Headers must have space after #
            list: /^(\s*(?:[*+-]|\d+\.)\s+.+)/, // Lists with proper spacing
            link: /\[([^\]]+)\]\(([^)]+)\)/, // Standard markdown links
            codeBlock: /^```[\s\S]*?```$/, // Code blocks
            text: /^[\s\S]+$/ // Any text content
          };

          // Function to test if line matches any valid pattern
          const isValidLine = () => {
            // Headers are special case
            if (line.trim().startsWith('#')) {
              const isValidHeader = patterns.header.test(line);
              return isValidHeader;
            }

            // Test against all other patterns
            return Object.values(patterns).some(pattern => pattern.test(line));
          };

          // Using Cypress assertions
          const validationResult = isValidLine();
          expect(validationResult, 
            `Invalid markdown formatting on line ${index + 1}: ${line}`
          ).to.be.true;
        });
      });
    });
  });
});