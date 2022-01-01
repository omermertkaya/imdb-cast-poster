[![Build Status](https://travis-ci.org/ollar/image-resize-util.svg?branch=master)](https://travis-ci.org/ollar/image-resize-util)

image-resize-util
==============================================================================

Takes an image and resizes it to given size, uses pica.js


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.16 or above
* Ember CLI v2.13 or above
* Node.js v10 or above


Installation
------------------------------------------------------------------------------

```
ember install image-resize-util
```


Usage
------------------------------------------------------------------------------

```
imageResize(file: File, {
    maxWidth: Number = 800,
    maxHeight: Number = 600,
    keepRatio: Boolean = true
}, resizeOptions: PicaOptionsObject) => Promise(Blob)
```

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
