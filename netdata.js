if (window.jQuery) {
  var $cell = jQuery('td.mapsearchOuterCell');
  var aps = [];
  var apString = '';
  jQuery('td.mapsearchOuterCell').each((index, cell) => {
      var $a = $(cell).children('a');
      var ap = {
        ssid: $a.data('netid'),
        name: $a.find('tr').eq(0).find('td').eq(1).text()
      };
      aps.push(ap);
      apString += `${ap.name} ${ap.ssid}\r\n;`
  });
console.log(apString)
console.table(aps)
}
