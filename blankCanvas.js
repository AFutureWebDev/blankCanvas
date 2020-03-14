const svg = d3.select("svg");

// the + just before SVG parses the string 'width/height' into a number
const height = document.body.clientHeight;
const width = document.body.clientWidth;

svg
    .attr('width', width)
    .attr('height', height)
.append('rect')
    .attr('width', width)
    .attr('height', height)
    .attr('rx', 40)