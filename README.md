# Simple Bootstrap Image Panes

Designers love images with text overlays. Responsive Web pages don't. This makes it easy -- well, 
easier -- to integrate centered live text overlays into Bootstrap 3.

It contains two classes, .pane-outer and .pane-inner, that define the image box and the overlay respectively. It also
contains a number of classes that can help with the process of making sure that images don't crop oddly as the size
and dimensions change.

In addition, it contains a short script that re-creates the effect in IE8, which is immune to the charms of the
transform property.

## Installation

Add 'pane.css' to your css directory, and 'ie8-pane.js" to your js directory. Then create a link to the css in the
`&lt;head&gt;` section:

`<link rel="stylesheet" href="css/pane.css">`

And a conditional loading of the Javascript file at the end of your document, after your other `&lt;script&gt;` lines:

```html
 <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
 <!-- Include all compiled plugins (below), or include individual files as needed -->
 <script src="js/bootstrap.min.js"></script>
 <!--[if lt IE 9]>
 <script src="js/ie8-pane.js"></script>
 <![endif]-->
```

## Usage

```html
<div class="col-md-4 pane-outer focus-left focus-top" style="background-image: url('your-background-image.jpg');">
        <div class="pane-inner">
            Text Overlay
        </div>
</div>
```

You'll probably want to set a height on your column, or else the background will be the same size as the foreground.

## Notes

There are a couple basic approaches to vertically centering a div of arbitrary size within another div of arbitrary
size. Setting `display: table-cell; vertical-align: middle` works in many cases, but it doesn't work if the outer div 
is set to float, which Bootstrap columns are.

The `transform: translateY(-50%)` approach (&lt;http://zerosixthree.se/vertical-align-anything-with-just-3-lines-of-css/&gt;)
works well with floating divs, but it isn't supported by IE8, surprise surprise. So, Javascript to the rescue.

## To-Do

* Make the Javascript friendlier in terms of namespace.
* Make the centering update as the windows is resized in IE8.
* Add the ability to override the default centering and have that reflected in IE8.
* Possibly add the ability to have the pane "auto-size" to the size of the image in a responsive manner.
