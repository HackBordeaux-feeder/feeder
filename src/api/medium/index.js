var parser = require('rss-parser');

parser.parseURL('https://medium.com/feed/the-mission', function(err, parsed) {
  // console.log('There is ' + parsed.feed.entries.length + ' entries');
  parsed.feed.entries.forEach(function(entry) {
    const title = entry.title
    const link = entry.link
    const content = entry['content:encoded']
    const getImageRegex = /(<img alt="" src="[\:\w\d\.\/\-\*]*" \/>)/g
    var image = getMatches(content, getImageRegex, 1)[0]
    console.log(image);
  })
})

function getMatches(string, regex, index) {
  index || (index = 1); // default to the first capturing group
  var matches = [];
  var match;
  while (match = regex.exec(string)) {
    matches.push(match[index]);
  }
  return matches;
}
