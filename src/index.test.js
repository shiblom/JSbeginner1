import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('our irst test', () => {
  it('should pass', () => {expect(true).to.equal(true);
    });
});

describe('index.html', () => {
  it('should say howdy', (done) => {
    const index = fs.readFileSync('./src/index.html', "utf-8");
    jsdom.env(index, function(err, window) {
      const h1 = window.document.getElementsBTagName('h1') [0];
      expect(h1.innerHTML).to.equal("Howdy y'all");
      done();
      window.close();
    });
  });
})
