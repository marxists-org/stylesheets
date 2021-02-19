This is how the works.css and border.css stlesheets set the format in your HTML files.

If you link works-color.css in the header of your HTML file, the browser reads the
works.css from top to bottom to interpret the various classes of element.

It gets the basic p format first, and then varies it according to each class. 
So each class 'inherits' much of its format from the basic p format.

It then reads works-color.css and amends the various class of element as it reads.

So you have to read works.css to see all the various formats available.
But at a glance, you can see how works-color.css changes this basic style.

The set of stylesheets based on border.css work the same way.

the border-colour styles are used for indexes, and the works-colour styles for
the texts as such.

There are a number of other stylesheets which are not part of sets like these.

Andy Blunden, 2018.

