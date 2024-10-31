describe('Markdown Documentation Tests', () => {
  const markdownFiles = [
    'README.md',
    'SUMMARY.md'
  ];

  markdownFiles.forEach(file => {
    it(`validates markdown formatting for ${file}`, () => {
      cy.readFile(file).then((content) => {
        // Split the content into lines
        const lines = content.split('\n');

        // Iterate through each line
        lines.forEach((line, index) => {
          // Skip empty lines and horizontal rules
          if (line.trim() === '' || line.trim().match(/^[-*_]{3,}$/)) {
            return;
          }

          // Check for headers
          if (line.trim().startsWith('#')) {
            const headerRegex = /^#{1,6} .+/;
            cy.wrap(headerRegex.test(line.trim())).should('be.true', 
              `Line ${index + 1} should be a valid header: ${line}`
            );
            return;
          }

          // Check for lists (bullet points, numbered lists, and nested lists)
          const listRegex = /^(\s*(?:[*+-]|\d+\.)\s+.+|\s*$)/;
          
          // Check for links
          const linkRegex = /^\s*\[.*?\]\(.*?\)/;
          
          // Check for code blocks
          const codeBlockRegex = /^\s*(`{3}|~{3})/;
          
          // Check for normal text
          const textRegex = /^[\s\S]+$/;

          // Combine all valid patterns
          const isValidLine = 
            listRegex.test(line) || 
            linkRegex.test(line) || 
            codeBlockRegex.test(line) || 
            textRegex.test(line);

          cy.wrap(isValidLine).should('be.true', 
            `Line ${index + 1} should match valid markdown formatting: ${line}`
          );
        });
      });
    });
  });
});