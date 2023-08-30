#!/bin/bash
for dir in static/*; do
    if [ -d "$dir" ]; then
        foldername=$(basename "$dir")

        output_file="content/tournament_pages/$foldername/$foldername.md"

        template_file="layouts/tournament-results.md"

        hugo new $output_file --kind tournament-result
    fi
done