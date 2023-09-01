#!/bin/bash
for dir in static/*; do
    if [ -d "$dir" ]; then
        foldername=$(basename "$dir")

        output_file="content/tournament_pages/$foldername/$foldername.md"

        hugo new $output_file --kind tournament-result

        for file in $dir/*/*/*; do
            if [[ $file == *.log ]]; then

                output_file2="content/tournament_pages/$foldername/$(basename "$file" .log).md"

                hugo new content $output_file2 --kind match-result
            fi
        done
    fi
done