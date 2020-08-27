#!/bin/sh

if [ "$1" = "" ]; then
  echo "usage ./runTexMake.sh path/to/file.tex"
  exit 1
fi

if [ ! -e "$1" ]; then
  echo "File does not exist: $1"
  exit 0
fi

runPandoc() {
  cat $1 | sed -n -e '/---/,/---/d; p' | pandoc -f latex -t html >> $2
}

runMake4Ht() {
  TMP_CD_TEX="false"
  FOUT="$2"
  FNAME="$1"
  F_RAW="$(echo $FNAME | sed 's/\.tex$//')"
  if [ "$(dirname $1)" = "tex" ]; then
    TMP_CD_TEX="true"
    cd tex
    FNAME="$(basename $1)"
  fi

  # make4ht -uf html5+staticsite "$FNAME"
  make4ht -u "$FNAME" "fn-in"
  FNAME_START=$(basename $FNAME .tex)
  
  if [ -d ../../imgs/ ]; then
    IMAGES=$(ls ./$FNAME_START*.png)
    cp $IMAGES ../../imgs/
    git add ../../imgs/
  fi

  if "$TMP_CD_TEX" = "true" ]; then
    cd ..
  fi
  
  cat ${F_RAW}.html | sed -n '/<body>/,/<\/body>/p' | head -n -1 | tail -n +2 | sed -r 's/(src='"'"')(.*\.png'"'"')/\1..\/..\/imgs\/\2/' >> $FOUT
  echo "\n<style>" >> $FOUT
  cat ${F_RAW}.css >> $FOUT
  echo "</style>" >> $FOUT
}

cd $(git rev-parse --show-toplevel)
echo "runTexMake in dir: $(pwd)"
echo "runTexMake for file: $1"
filedir=$(dirname $1)
filename=$(basename $1)
filenoext=$(basename $1 ".tex")
inputfname=$filename
dirpre="."
( cd $filedir ;
  echo -n "runTexMake running main in dir: $(pwd) -- thisdir: "
  thisdir=$(basename $(pwd))
  echo "$thisdir"
  if [ "$thisdir" = "tex" ]; then
    cd ../
    dirpre="tex"
  fi ;
  echo "pandoc $dirpre/$filename\n-- running in $(pwd)" ;
  #htlatex $dirpre/$filename ;
  F="$dirpre/$filename"
  set -x
  # front matter
  cat $F | sed -n -e '/---/,/---/s/^% //p' > $filenoext.html
  # main body
  #runPandoc $F $filenoext.html
  runMake4Ht $F $filenoext.html
  set +x
  echo "git add $filenoext.html" ;
  git add $filenoext.html
  echo "done: git add"
  #git update-index --add $filenoext.html
  # $filenoext.css
)

echo "done: runTexMake.sh"
