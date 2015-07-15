#!/bin/bash
#
# git update - keep records of all css changes on whirlpool, kitchenaid, and maytag sites
#

export PATH=/usr/local/bin:$PATH
PUSHONLY="0"

while [[ $1 = -* ]]; do
    arg=$1; shift           # shift the found arg away.

    case $arg in
    	pushonly)
			PUSHONLY="1"
			;;
		-o)
			PUSHONLY="1"
			shift           # foo takes an arg, needs an extra shift
			;;
        -path)
            GITPATH="$1"
            shift           # foo takes an arg, needs an extra shift
            ;;
        -a)
            GITPATH="$1"
            shift           # foo takes an arg, needs an extra shift
            ;;
        -user)
			GITUSER="$1"
			shift           # foo takes an arg, needs an extra shift
            ;;
        -u)
        	GITUSER="$1"
			shift           # foo takes an arg, needs an extra shift
            ;;
        -password)
			GITPASS="$1"
			shift           # foo takes an arg, needs an extra shift
            ;;
        -p)
			GITPASS="$1"
			shift           # foo takes an arg, needs an extra shift
            ;;
    esac
done

if [ -z $GITPATH ]; then echo Git path not set. Terminating.; exit; fi
if [ -z $GITUSER ]; then echo Git user not set. Terminating.; exit; fi
if [ -z $GITPASS ]; then echo Git pass not set. Terminating.; exit; fi

AGENT="Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.3 (KHTML, like Gecko) Version/8.0 Mobile/12A4345d Safari/600.1.4"

if [ PUSHONLY="0" ]; then
	mkdir $GITPATH
	cd $GITPATH
	wget --recursive -r --page-requisites -A .css,.js,.html --no-parent http://cuat.whirlpool.ca/en_CA/
	wget --recursive -r --page-requisites -A .css,.js,.html --no-parent http://cuat.whirlpool.ca/fr_CA/
	wget --recursive -r --page-requisites -A .css,.js,.html --no-parent http://cuat.maytag.ca/en_CA/
	wget --recursive -r --page-requisites -A .css,.js,.html --no-parent http://cuat.maytag.ca/fr_CA/
	wget --recursive -r --page-requisites -A .css,.js,.html --no-parent http://cuat.kitchenaid.ca/en_CA/
	wget --recursive -r --page-requisites -A .css,.js,.html --no-parent http://cuat.kitchenaid.ca/fr_CA/

	mkdir $GITPATH/mobile
	cd $GITPATH/mobile
	wget --user-agent $AGENT --recursive -r --page-requisites -A .css,.js,.html --no-parent http://cuat.whirlpool.ca/en_CA/
	wget --user-agent $AGENT --recursive -r --page-requisites -A .css,.js,.html --no-parent http://cuat.whirlpool.ca/fr_CA/
	wget --user-agent $AGENT --recursive -r --page-requisites -A .css,.js,.html --no-parent http://cuat.maytag.ca/en_CA/
	wget --user-agent $AGENT --recursive -r --page-requisites -A .css,.js,.html --no-parent http://cuat.maytag.ca/fr_CA/
	wget --user-agent $AGENT --recursive -r --page-requisites -A .css,.js,.html --no-parent http://cuat.kitchenaid.ca/en_CA/
	wget --user-agent $AGENT --recursive -r --page-requisites -A .css,.js,.html --no-parent http://cuat.kitchenaid.ca/fr_CA/
fi

git init
git remote add origin https://$GITUSER:$GITPASS@github.com/$GITUSER/cuat.git

git add -A .
if [ PUSHONLY="1" ]; then git commit -m "Update"; fi
if [ PUSHONLY="0" ]; then git commit -m "Update - runtime `$SECONDS/60` minutes"; fi
git push origin master
