# Sticky Table Plugin for JQuery
jquery.stickytable is a lightweight plugin to help developers to have fixed rows or columns in a `<table>` using CSS classes only.
It doesn't need any initialization and it's totally responsive.

## Requirements
- [jQuery](http://jquery.com/)

That's it!

## How to use Sticky Table
- Add `jquery.stickytable.js` and `jquery.stickytable.css` to your page -or their minified versions-.
- Wrap your `<table>` tag with a `<div>` with class `sticky-table`. Will refer to this `<div>` as the *wrapper*.

### Fixed rows
To have a fixed row (header, footer, ..etc):
- Add `sticky-headers` class to the *wrapper*.
- Add `sticky-row` class to the `<tr>` element you want to get sticky.

### Fixed columns
To have a fixed column, all the column's cells should be sticky. To have a sticky cell:
- If your table is `LTR`:
  - Add `sticky-ltr-cells` class to the *wrapper*.
  - Add `sticky-cell` class to the `<td>` or `<th>` element you want to get sticky.
- If your table is `RTL`:
  - Add `sticky-rtl-cells` class to the *wrapper*.
  - Add `sticky-cell` class to the `<td>` or `<th>` element you want to get sticky.

You can view examples for more clarification.

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
