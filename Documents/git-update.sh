#!/bin/bash
#
# git update - keep records of all css changes on whirlpool, kitchenaid, and maytag sites
#

export PATH=/usr/local/bin:$PATH
cd /Users/stepoole/Documents
wget --recursive -r --page-requisites -A .css,.js,.html --no-parent http://cuat.whirlpool.ca
wget --recursive -r --page-requisites -A .css,.js,.html --no-parent http://cuat.maytag.ca
wget --recursive -r --page-requisites -A .css,.js,.html --no-parent http://cuat.kitchenaid.ca
cd ./cuat
git add -A .
git commit -m "Update"
git push https://rlstephenpoole:Pgr0upe12@github.com/rlstephenpoole/cuat.git master