![screen shot 2013-06-17 at 13 31 47](https://f.cloud.github.com/assets/574696/661644/4593118a-d739-11e2-9bdf-4b91b99b8a38.png)

Install
---

```
component install kelonye/ember-datepicker
```

Usage
---

```javascript

var picker = require('ember-datepicker');
App.DatePickerView = Em.TextField.extend(picker);

{{view App.DatePickerView value=model.date}}

```


Example
---

    $ make example

License
---

MIT