# Swgohtool

ng serve --host=127.0.0.1

then run debug from vscode

https://feddyswgoh.wixsite.com/feddy
 
https://panosweb.se/feddy/?player=357182769

ng build swgohtool --configuration production

ng build swgohtool --configuration production --base-href="/feddytool/" --output-path=dist\feddytool
ng build swgohtool --configuration production --base-href="/dianogas/" --output-path=dist\dianogas
ng build swgohtool --configuration production --base-href="/rooms/" --output-path=dist\rooms

cpit
https://imgur.com/a/iGZObX5

//Release notes
v2.0
    List all characters in order of power (GLs, GLs ships, Journeys etc from api/characters)
    Use json files to generate the priority lists
    When clicking on a character it should open the farming list (Journey guides)
    Fetch guild from URL

v1.13
    Changed the api path 
    Fixed chewpo relic for Leia
    Updated farming list
    Added battle for Nabbo reqs
v1.13
    Added third sister
    Added jar jar
    Added Bo-katan
    Fixed a bug where the icon wasn't showing for units that the user does not have
v1.11
    Added GL Leia
    Added new Raid toons
v1.10
    Added Krayt raid
    Removed cpit
    Every farm inside Krayt, is sorted by power.
v1.9
    Added Cal Kestis event
    Hide completed > false by default
    Changed Malak minimum reqs to 17500
    Added Leviathan
v1.8
    Completed farm list
v1.7
    Add omicron support
v1.6
    Updated farming list
v1.5
    Hide completed
    Added tabs
    Completed first now
    Added farm list
    High priority farm list
v1.4
    Bugfix: welcome image over small devices
    Added links to each toon. If the player has the toon then link to players toon. If not the link to general swgoh toon
v1.3
    Do not reload ship and units if already loaded
    If the ally_code is in the list of feddy then show it as active
    Minimised response time per player (66% faster loading time)
    Message if no user is selected
    Added discord join button
    Added github links
    Bugfix: wrong margin on bottom
v1.2
    Bug fix: Loading component not in center
    Bug fix: When pressing enter the function gets the first of the feddy list
    Feature: add last updated
    Feature: Compare last updated with now
    

2023-02-03 v1.1
    Added loading component
    Added min power for toons
    Added min power for ships
    Fixed GAS and malak
    Added check mark if Farm is ok
    Added check mark if power required is ok
    Added beskar mando
    Added version text
