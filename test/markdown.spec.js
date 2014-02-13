var http    = require('http');
var should  = require('should');
var request = require('supertest');
var markdown = require('../lib/markdown');

describe('markdown', function() {

  it('prepares titles for first hierarchy', function() {
    var previousHierarchy = [];
    var currentHierarchy = ['Events', 'Sports', 'Get list of sports'];
    markdown.makeTitles(currentHierarchy, previousHierarchy).should.eql(['# Events', '## Sports', '### Get list of sports']);
  });

  it('prepares titles for second hierarchy', function() {
    var previousHierarchy = ['Events', 'Sports', 'Get list of sports'];
    var currentHierarchy = ['Events', 'Competitions', 'Competitions by sport'];
    markdown.makeTitles(currentHierarchy, previousHierarchy).should.eql(['## Competitions', '### Competitions by sport']);
  });

  it('prepares titles for third hierarchy', function() {
    var previousHierarchy = ['Events', 'Competitions', 'Competitions by sport'];
    var currentHierarchy = ['Events', 'Competitions', 'Filter by country'];
    markdown.makeTitles(currentHierarchy, previousHierarchy).should.eql(['### Filter by country']);
  });

});
