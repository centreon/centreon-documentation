#!/bin/bash

echo -e "\nCheck if all procedures have a reference in sidebars.json (TOC)\n"

for procedure in $(egrep -re '^id:' en/integrations/plugin-packs/procedures/ | cut -d':' -f3 | sed 's/[^a-zA-Z0-9.-]//g')
do
    SIDEBARS=$(cat en/sidebars.json | grep integrations/plugin-packs/procedures/$procedure > /dev/null 2>&1)
    if [ $? -eq 1 ]; then
        echo -e "EN: missing $procedure"
    fi
done
for procedure in $(egrep -re '^id:' fr/integrations/plugin-packs/procedures/ | cut -d':' -f3 | sed 's/[^a-zA-Z0-9.-]//g')
do
    SIDEBARS=$(cat fr/sidebars.json | grep integrations/plugin-packs/procedures/$procedure > /dev/null 2>&1)
    if [ $? -eq 1 ]; then
        echo -e "FR: missing $procedure"
    fi
done


echo -e "\nCheck if all references in sidebars.jso have a associated markdown file\n"

for procedure in $(egrep -re "\s+\"integrations\/plugin\-packs\/procedures\/(.*)\",?\n?" en/sidebars.json | cut -d'/' -f5 | sed 's|"||' | sed 's|,||')
do
    REFERENCE=$(grep -r "id: $procedure" en/integrations/plugin-packs/procedures/)
    if [ $? -eq 1 ]; then
        echo -e "EN: missing $procedure"
    fi
done
for procedure in $(egrep -re "\s+\"integrations\/plugin\-packs\/procedures\/(.*)\",?\n?" fr/sidebars.json | cut -d'/' -f5 | sed 's|"||' | sed 's|,||')
do
    REFERENCE=$(grep -r "id: $procedure" fr/integrations/plugin-packs/procedures/)
    if [ $? -eq 1 ]; then
        echo -e "FR: missing $procedure"
    fi
done