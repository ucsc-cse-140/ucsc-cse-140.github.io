# ucsc-cse-140.github.io
Repository containing the programming assignment instructions and pacai documentation for CSE140.

## Generating Documentation
The documentation was created using [pdoc3](https://pdoc3.github.io/pdoc/). In terminal, navigate to the folder containing pacai, then run:
```
pdoc --html pacai
```


## Link Appending
Currently, the instruction html files refer will point to documentation using local paths, meaning they will need to be on the same repository. In the case that the insturctions and the documentation are stored on different repos, you can either replace all the links by hand or implement the following script for each of the links. This will append a relative path to a base URL given as a variable. This way, if the base repo was to ever change location again, only the base URL variable would need to be changed for each of the pages.

<br>In the body, give the link an id.
```
<a id="actionsLink" href='#'>pacai.core.actions.Actions</a>
```

In the script:
1. Create a variable for the base URL.
2. Create a variable for the local path.
3. Create a variable to combine the local path and base url.
4. Create a variable for the element with the id of the link.
5. Set the link element's href to the combined link.
```
var baseURL = "https://ucsc-cse-140.github.io";
var directionsPath = 'core/directions.html#pacai.core.directions.Directions';
var combinedDirectionsLink = new URL(directionsPath, baseURL).href;
var combinedDirectionsLinkElement = document.getElementById("directionsLink");
combinedDirectionsLinkElement.href = combinedDirectionsLink;
```
