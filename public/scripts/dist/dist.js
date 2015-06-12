var musicApp=angular.module("musicApp",["ngRoute","musicApp.controllers"]).config(["$routeProvider",function(e){"use strict";e.when("/songs",{templateUrl:"/views/songs.html",controller:"SongCtrl"}).when("/playlist",{templateUrl:"/views/playlist.html",controller:"PlaylistCtrl"}).otherwise({templateUrl:"/views/home.html",controller:"HomeCtrl"})}]),controllerModule=angular.module("musicApp.controllers",[]);controllerModule.controller("HomeCtrl",["$scope",function(e){"use strict";e.message="Home Controller"}]),controllerModule.controller("PlaylistCtrl",["$scope",function(e){"use strict";e.computers=[{name:"Commodore 64",year:1982},{name:"ZX Spectrum",year:1982},{name:"BBC Micro",year:1981},{name:"Apple II",year:1977},{name:"Atari 800",year:78}]}]),controllerModule.controller("SongListCtrl",["$scope",function(e){"use strict";e.companys=[{name:"Commodore",description:"Commodore International (or Commodore International Limited) was a North American home computer and electronics manufacturer. Commodore International (CI) along with its subsidiary Commodore Business Machines (CBM) participated in the development of the home–personal computer industry in the 1970s and 1980s. The company developed and marketed one of the worlds best-selling desktop computers, the Commodore 64 (1982) and released its Amiga computer line in 1985."},{name:"Sinclair",description:"Sinclair Research Ltd is a British consumer electronics company founded by Sir Clive Sinclair in Cambridge. Originally incorporated in 1973 as Ablesdeal Ltd. and renamed to Westminster Mail Order Ltd and then Sinclair Instrument Ltd. in 1975, it remained dormant until 1976, when it was activated with the intention of continuing Sinclairs commercial work from his earlier company Sinclair Radionics; it adopted the name Sinclair Research in 1981."},{name:"Acorn Computers",description:"Acorn Computers Ltd. was a British computer company established in Cambridge, England, in 1978. The company produced a number of computers which were especially popular in the UK, including the Acorn Electron and the Acorn Archimedes. Acorns BBC Micro computer dominated the UK educational computer market during the 1980s[1] It is more known for its BBC Micro model B computer than for its other products."},{name:"Apple",description:"Apple was established on April 1, 1976, by Steve Jobs, Steve Wozniak and Ronald Wayne[10][11] to sell the Apple I personal computer kit. The Apple I kits were computers single handedly designed and hand-built by Wozniak[12][13] and first shown to the public at the Homebrew Computer Club."},{name:"Atari",description:'Atari (from a Japanese verb meaning "to hit the target") is a corporate and brand name owned by several entities since its inception in 1972, currently by Atari Interactive, a subsidiary of the French publisher Atari, SA (ASA).[1][2][3] The original Atari, Inc. founded in 1972 by Nolan Bushnell and Ted Dabney was a pioneer in arcade games, home video game consoles, and home computers. The companys products, such as Pong and the Atari 2600, helped define the electronic entertainment industry from the 1970s to the mid-1980s.'}]}]);