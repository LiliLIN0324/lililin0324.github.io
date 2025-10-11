$(document).ready(function() {
  const portfolioFiles = [
    '000.png',
    '100.png','101.png',
    '200.png','201.png',
    '300.png','301.png',
    '400.png','401.png',
    '500.png','501.png',
    '600.png','601.png',
    '700.png','701.png',
    '800.png','801.png',
    '900.png','901.png',
    '1000.png','1001.png',
    '1100.png','1101.png',
    '1200.png','1201.png',
    '1300.png','1301.png',
    '1400.png','1401.png',
    '1500.png','1501.png',
    '1600.png','1601.png',
    '1700.png','1701.png',
    '1800.png','1801.png',
    '1900.png','1901.png',
    '2000.png','2001.png',
    '2100.png','2101.png',
    '2200.png','2201.png',
    '2300.png','2301.png',
    '2400.png','2401.png',
    '2500.png','2501.png',
    '2600.png','2601.png',
    '2700.png','2701.png',
    '2800.png','2801.png',
    '2900.png','2901.png',
    '3000.png'
  ];

  portfolioFiles.sort((a,b) => {
    const numA = parseInt(a.match(/\d+/)[0]);
    const numB = parseInt(b.match(/\d+/)[0]);
    return numA - numB;
  });

  portfolioFiles.forEach(file => {
    const div = `<div><img src='/assets/portfolio/${file}' style="width:100%;height:auto;"></div>`;
    $('#flipbook').append(div);
  });

  $("#flipbook").turn({
    width: 800,
    height: 530,
    autoCenter: true,
    display: 'double'
  });
});
