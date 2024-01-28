#!/bin/bash

cd ../img

for f in * ; do
    # Check if f is a jpg file
    if [[ $f == *.jpg ]] ; then
        # Check if f.webp exists
        if [[ ! -f $f.webp ]] ; then
            # Remove the extention
            fn="${f%.*}"

            # Convert f to f.webp
            convert $f $fn.webp

            # Delete the old file
            rm $f
        fi
    fi
done
