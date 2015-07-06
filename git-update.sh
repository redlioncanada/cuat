#!/bin/bash
#
# git update - keep records of all css changes on whirlpool, kitchenaid, and maytag sites
#

export PATH=/usr/local/bin:$PATH
cd /Users/stepoole/Documents/cuat
wget --recursive -r --page-requisites -A .css,.js,.html --no-parent http://cuat.whirlpool.ca/en_CA/
wget --recursive -r --page-requisites -A .css,.js,.html --no-parent http://cuat.whirlpool.ca/fr_CA/
wget --recursive -r --page-requisites -A .css,.js,.html --no-parent http://cuat.maytag.ca/en_CA/
wget --recursive -r --page-requisites -A .css,.js,.html --no-parent http://cuat.maytag.ca/fr_CA/
wget --recursive -r --page-requisites -A .css,.js,.html --no-parent http://cuat.kitchenaid.ca/en_CA/
wget --recursive -r --page-requisites -A .css,.js,.html --no-parent http://cuat.kitchenaid.ca/fr_CA/
git add -A .
git commit -m "Update"
git push https://rlstephenpoole:Pgr0upe12@github.com/rlstephenpoole/cuat.git master