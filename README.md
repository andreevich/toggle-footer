# toggle-footer
angular component toggle footer
### Usage ###
Include in your index.html files:
```html
<head>
<!--...-->
    <link href="../component/toggle-footer-style.min.css" type="text/css" rel="stylesheet">
<!--...-->
</head>
<!--...-->
</body>
<!--...-->
    <script src="../component/toggleFooterComponent.min.js"></script>
</html>
```
### Events ###
You may subscribe on change footer state
```js
$rootScope.$on(toggleFooterEvent.CHANGE_STATE, function (event, obj) {
    //obj.isClose - state of footer [Boolean]
    //obj.trigger - who initiated event [String: 'component'/'user']
})
```
### Methods ###

```js
toggleFooterFactory.setState(state); // state - Boolean;
toggleFooterFactory.getState();

```
![](https://github.com/andreevich/toggle-footer/blob/master/example/video.gif)
