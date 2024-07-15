const topBarCenterText = `N2YQT - FN33eh`;
// Menu items
// Structure is as follows HTML Color code, Option, target URL, scaling 1=Original Size, side (optional, nothing is Left, "R" is Right)
// The values are [color code, menu text, target link, scale factor, side],
// add new lines following the structure for extra menu options. The comma at the end is important!
const aURL = [
  ["add10d", "BACK", "#", "1"],
  ["add10d", "BACK", "#", "1", "R"],
  ["ff9100", "Refresh", "#", "1"],
  ["0dd1a7", "Help", "#", "1"],
//  ["2196F3", "CLUBLOG", "https://clublog.org/livestream/N2YQT", "1.7"],
//  ["2196F3", "DX MAPS", "https://www.dxmaps.com/spots/mapg.php?Lan=E", "1"],
//  ["2196F3", "DX CLUSTER", "https://dxcluster.ha8tks.hu/map/", "1"],
//  ["2196F3", "LIGHTNING", "https://map.blitzortung.org/#3.87/36.5/-89.41", "1", "R", ],
  ["2196F3", "P25 DASH", "https://p25.tourge.net", "1"],
  ["2196F3", "M17 Dash", "http://m17nys.kd2yfy.net:81", "1"],
  ["2196F3", "ADS-B", "https://globe.adsbexchange.com", "1"],
  ["2196F3", "RADAR", "https://radar.weather.gov/", "1", "R"],
  ["2196F3", "TIME.IS", "https://time.is/", "1", "R"],
  ["2196F3", "WEATHER", "https://www.nysmesonet.org/mesonow#network=nysm&stid=GFAL", "1", "R"],
  ["2196F3", "WINDS", "https://earth.nullschool.net/#current/wind/surface/level/orthographic=-78.79,44.09,3000", "1", "R" ],
  [
    "FF0000",
    "ABOUT",
    "about.html",
    "1",
  ]
];

// Dashboard items
// Structure is Title, Image Source URL
// [Title, Image Source URL],
// the comma at the end is important!
// You can't add more items because there are only 12 placeholders on the dashboard
// but you can replace the titles and the images with anything you want.
const aIMG = [
  [
    "RADAR", 
    "https://radar.weather.gov/ridge/standard/KENX_loop.gif",
  ],
  [
    "APRS",
    "https://dashboard.tourge.net/map.png",
  ],
  [
    "AURORA/NOAA D-RAP",
    "https://services.swpc.noaa.gov/images/animations/ovation/north/latest.jpg",
    "https://services.swpc.noaa.gov/images/animations/d-rap/global/d-rap/latest.png",
  ],
  [
    "ISS & RS-44 POSITION",
    "https://www.heavens-above.com/orbitdisplay.aspx?icon=iss&width=600&height=300&mode=M&satid=25544",
    "https://www.heavens-above.com/orbitdisplay.aspx?icon=default&width=600&height=300&mode=M&satid=44909",
  ],
  [
    "SATELLITE",
    "https://cdn.star.nesdis.noaa.gov/GOES16/GLM/SECTOR/ne/EXTENT3/GOES16-NE-EXTENT3-600x600.gif",
  ],
  [
    "SPC 1/2/3 DAY OUTLOOK",
    "https://www.spc.noaa.gov/partners/outlooks/state/images/NY_swody1.png",
    "https://www.spc.noaa.gov/partners/outlooks/state/images/NY_swody2.png",
    "https://www.spc.noaa.gov/partners/outlooks/state/images/NY_swody3.png",
  ],
  [
    "LIGHTNING",
    "https://www.blitzortung.org/en/Images/image_b_ny.png",
  ],
  [
    "CAMS EX17/GFL/CTOWN",
    "https://511ny.org/map/Cctv/10338--18",
    "https://api.nysmesonet.org/cam/index.php/image/nysm/GFAL/latest?labels=stid;date",
    "https://api.nysmesonet.org/cam/index.php/image/nysm/CHES/latest?labels=stid;date",

  ],
  ["GREY LINE", "https://www.timeanddate.com/scripts/sunmap.php?iso=now"],
  [
    "NHC 2 DAY OUTLOOK",
    "https://www.nhc.noaa.gov/xgtwo/two_atl_2d0.png",
  ],
  ["6M/10M SPORADIC-E", "https://www.tvcomm.co.uk/g7izu/Autosave/NA_ES_AutoSave.JPG"],
  ["HF PROPAGATION",
  "https://www.hamqsl.com/solar101vhf.php",
  "https://www.hamqsl.com/solar100sc.php",
  "https://www.hamqsl.com/solarpich.php"],
];
