cd ../img

if [[ -f general_1-xl.jpg ]] ; then
    convert -resize 6% general_1-xl.jpg general_1-xs.jpg
    convert -resize 13% general_1-xl.jpg general_1-s.jpg
    convert -resize 25% general_1-xl.jpg general_1-m.jpg
    convert -resize 50% general_1-xl.jpg general_1-l.jpg
fi

if [[ -f general_2-xl.jpg ]] ; then
    convert -resize 6% general_2-xl.jpg general_2-xs.jpg
    convert -resize 13% general_2-xl.jpg general_2-s.jpg
    convert -resize 25% general_2-xl.jpg general_2-m.jpg
    convert -resize 50% general_2-xl.jpg general_2-l.jpg
fi

if [[ -f general_3-xl.jpg ]] ; then
    convert -resize 6% general_3-xl.jpg general_3-xs.jpg
    convert -resize 13% general_3-xl.jpg general_3-s.jpg
    convert -resize 25% general_3-xl.jpg general_3-m.jpg
    convert -resize 50% general_3-xl.jpg general_3-l.jpg
fi
