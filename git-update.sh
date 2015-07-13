#!/bin/bash
#
# git update - keep records of all css changes on whirlpool, kitchenaid, and maytag sites
#
export PATH=/usr/local/bin:$PATH
LOCALUSER="stepoole"
GITUSER="rlstephenpoole"
GITPASS="Pgr0upe12"
AGENT="Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.3 (KHTML, like Gecko) Version/8.0 Mobile/12A4345d Safari/600.1.4"

mkdir /Users/$LOCALUSER/Documents/cuat
cd /Users/$LOCALUSER/Documents/cuat
wget --recursive -r --page-requisites -A .css,.js,.html --no-parent http://cuat.whirlpool.ca/en_CA/
wget --recursive -r --page-requisites -A .css,.js,.html --no-parent http://cuat.whirlpool.ca/fr_CA/
wget --recursive -r --page-requisites -A .css,.js,.html --no-parent http://cuat.maytag.ca/en_CA/
wget --recursive -r --page-requisites -A .css,.js,.html --no-parent http://cuat.maytag.ca/fr_CA/
wget --recursive -r --page-requisites -A .css,.js,.html --no-parent http://cuat.kitchenaid.ca/en_CA/
wget --recursive -r --page-requisites -A .css,.js,.html --no-parent http://cuat.kitchenaid.ca/fr_CA/
mkdir /Users/$LOCALUSER/Documents/cuat/mobile
cd /Users/$LOCALUSER/Documents/cuat/mobile
wget --user-agent $AGENT --recursive -r --page-requisites -A .css,.js,.html --no-parent http://cuat.whirlpool.ca/en_CA/
wget --user-agent $AGENT --recursive -r --page-requisites -A .css,.js,.html --no-parent http://cuat.whirlpool.ca/fr_CA/
wget --user-agent $AGENT --recursive -r --page-requisites -A .css,.js,.html --no-parent http://cuat.maytag.ca/en_CA/
wget --user-agent $AGENT --recursive -r --page-requisites -A .css,.js,.html --no-parent http://cuat.maytag.ca/fr_CA/
wget --user-agent $AGENT --recursive -r --page-requisites -A .css,.js,.html --no-parent http://cuat.kitchenaid.ca/en_CA/
wget --user-agent $AGENT --recursive -r --page-requisites -A .css,.js,.html --no-parent http://cuat.kitchenaid.ca/fr_CA/
git add -A .
git commit -m "Update"
git push https://$GITUSER:$GITPASS@github.com/$GITUSER/cuat.git master