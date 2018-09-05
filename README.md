# Sticky Table Plugin for JQuery
jquery.stickytable is a lightweight plugin to help developers have fixed rows or columns in a `<table>` using CSS classes only.
It doesn't need any initialization and it's totally responsive.

## Requirements
- [jQuery](http://jquery.com/)

That's it!

## How to use Sticky Table
- Add `jquery.stickytable.js` and `jquery.stickytable.css` to your page -or their minified versions-.
- Wrap your `<table>` tag with a `<div>` with class `sticky-table`. We will refer to this `<div>` as the *wrapper*.

### Fixed rows
To have a fixed header:
- Add `sticky-header` class to the `<tr>` element you want to get sticky relatively to the top.

To have a fixed footer:
- Add `sticky-footer` class to the `<tr>` element you want to get sticky relatively to the bottom.

### Fixed columns
To have a fixed column, all the column's cells should be sticky. To have a sticky cell:
- If your table is `LTR`:
  - Add `sticky-ltr-cells` class to the *wrapper*.
  - Add `sticky-cell` class to the `<td>` or `<th>` element you want to get sticky relatively to the left.
  - Add `sticky-cell-opposite` class to the `<td>` or `<th>` element you want to get sticky relatively to the right.
- If your table is `RTL`:
  - Add `sticky-rtl-cells` class to the *wrapper*.
  - Add `sticky-cell` class to the `<td>` or `<th>` element you want to get sticky relatively to the right.
  - Add `sticky-cell-opposite` class to the `<td>` or `<th>` element you want to get sticky relatively to the left.

### AJAX loaded content
If there is a table loaded using AJAX after the document is initially loaded
and it's needed to be sticky, trigger the `stickyTable` event on `$( document )` like:
```
$( document ).trigger( "stickyTable" );
```

You can view examples for more clarification.
## Known Issues
We are aware of the following issues and we would be grateful if anyone can help us with them:
- On RTL tables, sticky rows and cells flickers or doesn't appear at all in Microsoft Edge
## Credits
Big thanks to [othree](https://github.com/othree) for his [jQuery RTL Scroll Type Detector](https://github.com/othree/jquery.rtl-scroll-type) which helped us alot supporting RTL tables for different browsers
## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
