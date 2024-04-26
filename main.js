key_mappings = { "escape": "esc", "lshift": "⇧", "rshift": "⇧", "np_divide": "/", "np_multiply": "*",
"np_subtract": "-", "np_add": "+", "np_enter": "⏎", "enter": "⏎", "numlock": "num", "comma": ",", "period": ".", "backslash": "\\",
"lbracket": "[", "rbracket": "]", "apostrophe": "'", "backspace": "←", "np_period": ".", "equals": "=", "slash": "/",
"semicolon": ";", "minus": "-", "numlock": "num", "print": "Prt SC", "scrolllock": "SL", "pause": "Pause",
"lctrl": "Ctrl", "lalt": "Alt", "lwin": "⊞", "rctrl": "Ctrl", "ralt": "Alt", "rwin": "⊞", "menu": "≣", "space": "———"};
for(i = 0; i < 10; i++) {
  key_mappings["np_" + i] = String(i);
  key_mappings["f" + i] = "F" + i;
}

for(i = 0; i <= 2; i++) {
  key_mappings["f1" + i] = "F1" + i;
}

var o_o = function () {
  var self = this;
  self.keyboard = [];
  self.keyboard.push(["escape", "gap_fkey", "f1", "f2", "f3", "f4", "gap_fkey", "f5", "f6", "f7", "f8", "gap_fkey", "f9", "f10", "f11", "f12", "gap_20", "print", "scrolllock", "pause"]);
  self.keyboard.push(["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "minus", "equals", "backspace", "gap_20", "insert", "home", "pgup", "gap_20", "numlock", "np_divide", "np_multiply", "np_subtract"]);
  self.keyboard.push(["tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "lbracket", "rbracket", "backslash", "gap_20", "delete", "end" , "pgdn", "gap_20", "np_7", "np_8", "np_9", "np_add"]);
  self.keyboard.push(["caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "semicolon", "apostrophe", "enter", "gap_20", "gap_key", "gap_key", "gap_key", "gap_20", "np_4", "np_5", "np_6"]);
  self.keyboard.push(["lshift", "z", "x", "c", "v", "b", "n", "m", "comma", "period", "slash", "rshift", "gap_20", "gap_key", "up" , "gap_key", "gap_20", "np_1" , "np_2", "np_3", "np_enter"]);
  self.keyboard.push(["lctrl", "lwin", "lalt", "space", "ralt", /*"rwin"*/ "fn", "menu", "rctrl", "gap_20", "left", "down" , "right", "gap_20", "np_0", "np_period"]);

  self.used_keys = all_keys;
  self.key_class = function(key) {
    clas = "key_" + key
    if (self.used_keys.indexOf(key) >= 0) {
      clas += " used";
    }
    if (self.selectedClick() == key) {
      clas += " fixed"
    }
    if (self.selected() == key) {
      clas += " selected"
    }
    return clas;
  };

  self.selected = ko.observable();

  self.categories = mapping_order;

  self.selectedCategories = ko.observableArray([]);
  ko.utils.arrayPushAll(self.selectedCategories, self.categories);

  self.mouseOver = (data) => {
    if (self.selectedClick() === undefined) {
      self.selected(data);
    }
  }
  self.caption = (data) => {
    if (data in key_mappings)
      return key_mappings[data];
    if (data.length == 1)
      return data.toUpperCase();
    return data;
  }

  self.selectedClick = ko.observable();
  self.itemClick = (data) => {
    let selData = ko.unwrap(self.selectedClick);
    console.log("Click", data, selData, data === selData);
    if (selData === undefined || selData !== data) {
      self.selected(data);
      self.selectedClick(data);
    } else {
      self.selectedClick(undefined);
    }
  };

  self.selectedKeyDescription = ko.pureComputed(() => {
    let val = self.selected();
    if (val === undefined) {
      return "";
    }

    mappings = [];
    ko.utils.arrayForEach(self.categories, (k) => {
      if (!(k in mapping_data)) { // stopwatch, prone
        return;
      }
      if (self.selectedCategories.indexOf(k) > 0) {
        if ( val in mapping_data[k] ) {
          mappings.push({ "cat": action_map[k], "keys": mapping_data[k][val] });
        }
      }
    })

    return mappings;
  });

  self.catClass = (cat) => {
    // console.log("CSS Class", cat, self.selectedCategories.indexOf(cat));
    if (self.selectedCategories.indexOf(cat) >= 0) {
      return "bg-primary";
    }
    return "";
  }

  self.toggleCat = (cat) => {
    console.log("Click", cat);
    if (self.selectedCategories.indexOf(cat) >= 0) {
      self.selectedCategories.remove(cat);
    } else {
      self.selectedCategories.push(cat);
    }
  }
}
ko.applyBindings(new o_o());
