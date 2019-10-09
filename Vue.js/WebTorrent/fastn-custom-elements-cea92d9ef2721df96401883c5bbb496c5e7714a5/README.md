# fastn-custom-elements

A test to see if fastn works natively with web-components/custom-elements

## Result

It does!

## Example

I used the webtorrent-element from https://github.com/mikeal/webtorrent-element in the example.

[see it working](korynunn.github.io/fastn-custom-elements/example/index.html)

## How

Literally all you need to do is import the web-component however you want:

```html
<script src="https://cdn.jsdelivr.net/npm/webtorrent-element@latest/dist/webtorrent-element.min.js"></script>
```

and then in fastn:

```js

fastn('my-web-component', {
    webComponentAttribute: fastn.binding('modelValue')
})

```

And it works with bound attributes and everything.