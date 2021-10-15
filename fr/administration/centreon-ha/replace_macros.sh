#!/bin/bash

source macros.def
SED_CMD=$(which sed)

for macro_name in "${!MACROS_DEF[@]}" ; do
    SED_CMD+=" -e 's/$macro_name/${MACROS_DEF[$macro_name]}/g'"
done
eval "$SED_CMD"
