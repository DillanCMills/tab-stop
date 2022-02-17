# tab-stop README

Set one or more tab stops to assist with aligning and formatting your code.

## Features

Tab Stop lets you specify one or more columns to indent your code to when invoking the extension. You can use it to fill space before your `=` signs to keep them aligned throughout your file, or keep all your line comments starting at the same column. You can also optionally change the character that gets filled from the default, ` `. 

If your cursor is past the last tab stop you provide, nothing will be filled. If you provide multiple characters to fill, it will cycle through them and stop at provided column, trimming the character string as needed.

Example:

Turn this:
\!\[Before\]\(images/before.png\)

Into this:
\!\[After\]\(images/after.png\)

Note: this is not an auto-formatter. I had to place cursors at each appropriate place in the example. I recommend binding the `tab-stop.indent` command to a keybinding so it is easy to invoke as you type. 

This extension pairs nicely with VS Code's column markers. Set a marker to each tab stop so you have a visual indication of where you will indent to next. 

## Extension Settings

This extension contributes the following settings:

* `tab-stop.character`: Specify the character(s) to be filled from the current cursor position to the next tab stop. Default: ` `
* `tab-stop.columns`: A list of column values to fill the specified character to. Order does not matter. You must provide at least one value for the extension to operate. Having multiple values will allow you to sequentially indent to each tab stop until you reach the largest value. Default: `[80]`

## Known Issues

None

## Release Notes

### 1.0.0

Initial release of Tab Stop
