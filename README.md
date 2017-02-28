#Miss New Booty 4

Custom Bootstrap.css generator for BS4.

_Booty, booty, booty, booty, rockin' everywhere_
- Bubba Sparxx
![bs](http://cmt.mtvnimages.com/uri/mgid:uma:video:mtv.com:880667?width=657&height=370&crop=true&quality=0.85)

##Directions

In `themes`, create a folder for your new theme. Copy in a `_custom.scss` from either another theme, or from `_variables.scss` in the node Booty package.

Override whatever you want, and add whatever you want. Make sure to remove the `! default` for stuff you want to override.

##Gulp Tasks

`gulp serve` serves up the the `test/index.html` and watches the `darkbooty` theme. If you are working on a different theme, be sure to edit index.html and the relevant gulp tasks.

`gulp dark` builds the `darkbooty` theme and shoves it in `dist`. 
 
`gulp stock` builds stock Booty 4 and shoves in `dist`.

`gulp clean` whacks the `dist` folder for a fresh start.
 
