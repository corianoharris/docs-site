describe('Markdown Documentation Tests', () => {
    const markdownFiles = [
      'docs/README.md',
      'docs/chapter1.md'
    ];
  
    markdownFiles.forEach(file => {
      it(`validates markdown formatting for ${file}`, () => {
        cy.readFile(file).then((content) => {
          // Check for valid markdown headers
          expect(content).to.match(/^#{1,6}\s/m, 'Should have valid markdown headers');
          
          // Check for no trailing whitespaces
          const lines = content.split('\n');
          lines.forEach((line, index) => {
            expect(line.trimEnd()).to.equal(line, `Line ${index + 1} has trailing whitespace`);
          });
  
          // Check for consistent link formatting
          const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
          const links = content.match(linkRegex) || [];
          links.forEach(link => {
            expect(link).to.match(linkRegex, 'Links should be properly formatted');
          });
        });
      });
    });
  });