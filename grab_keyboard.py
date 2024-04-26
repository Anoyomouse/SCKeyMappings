import xml.etree.ElementTree as ET
from collections import defaultdict, OrderedDict


class Mappings:
    """Main class to parse the defaultProfile.xml and generate the mappings for the keyboard.
    Also uses global.ini to get the strings for the labels and descriptions.
    """
    def __init__(self):
        """Initializes the class with the keyboard order and loads the strings from global.ini."""
        self.keyboard_order = [str(x) for x in range(1, 10)] + ['0'] + list('qwertyuiopasdfghjklzxcvbnm') + [f'f{x}' for x in range(1, 12 + 1)]
        self.strings = {}
        self.mappings = {}
        self.load_strings()

    def load_strings(self):
        """Loads the strings from global.ini and stores them in the strings dictionary."""
        strings = {}
        with open('global.ini', mode='rb') as f: # , encoding='utf8'
            for k, v in [k.split(b'=', 1) for k in f.readlines()]:
                try:
                    lbl = k.decode()
                    if lbl[0] == '\ufeff':
                        lbl = lbl[1:]
                    if b'\xc2\xa0' in v:
                        if v.startswith(b'\xc2\xa0'):
                            v = v[2:]
                        v = v.replace(b'\xc2\xa0', b'{}')
                    if b'\xa0' in v:
                        v = v.replace(b'\xa0', b' ')
                    strings.update({lbl: v.decode().strip('\r\n')})
                except UnicodeDecodeError as e:
                    print(e, v)
                    strings.update({k.decode(): str(v)})
        self.strings = strings

    def get_string(self, d: dict[str, str], key: str, default_value: str) -> str:
        """Gets the string from the global.ini file based on the key and the default value."""
        if not self.strings:
            self.load_strings()
        if d.get(key, '') and (lbl := d[key][1:]) in self.strings:
            return self.strings[lbl]
        return default_value

    def get_key_mask(self, d):
        """Gets the key mask based on the dictionary passed in."""
        if 'activationMode' in d:
            return d['activationMode']
        mask = 'P' if int(d.get('onPress', '0')) else ''
        mask += 'R' if int(d.get('onRelease', '0')) else ''
        mask += 'H' if int(d.get('onHold', '0') or '0') else ''
        return mask

    def parse_xmls(self):
        """Parses the defaultProfile.xml file and stores the mappings in the mappings dictionary."""
        tree = ET.parse('defaultProfile.xml')
        root = tree.getroot()

        mappings = OrderedDict() # defaultdict(lambda: defaultdict(lambda: [])))
        mapping_order = []
        actionmap = defaultdict(lambda: {})
        modifiers = ['lalt', 'ralt', 'lshift', 'lctrl', 'rctrl']
        all_keys = []
        for child in root:
            if child.tag == 'actionmap':
                label = self.get_string(child.attrib, 'UILabel', child.attrib['name'])
                category = self.get_string(child.attrib, 'UICategory', child.attrib['name'])
                #  <actionmap name="seat_general" version="1" UILabel="@ui_CGSeatGeneral" UICategory="@ui_CCSeatGeneral">
                am_name = child.attrib['name']
                # print(child.tag, am_name, label, category, child.attrib)
                mapping_order.append(am_name)
                actionmap[am_name].update({
                    "version": child.attrib.get('version', "1"),
                    "label": label,
                    "category": category
                })
                for action in child:
                    # print(action.tag, action.attrib)
                    if 'keyboard' in action.attrib:
                        key = action.attrib['keyboard']
                        modifier = ''
                        if '+' in key:
                            k = key.split('+')
                            if len(k) != 2:
                                print(f"Ack keybind -- {k}")
                                raise ValueError(k)
                            if k[0] in modifiers:
                                key = k[1]
                                modifier = k[0]
                            elif k[1] in modifiers:
                                modifier = k[1]
                                key = k[0]
                            else:
                                print(f"Unknown modifier {key}")
                        data = {
                            'name': action.attrib['name'],
                            'label': self.get_string(action.attrib, 'UILabel', action.attrib['name']),
                            "mode": self.get_key_mask(action.attrib), # .get('activationMode', ''),
                            "description": self.get_string(action.attrib, 'UIDescription', action.attrib['name']),
                            'category': action.attrib.get('Category', '')
                        }
                        if modifier:
                            data.update({"mod": modifier})
                        if key not in all_keys:
                            all_keys.append(key)
                        mappings.setdefault(am_name, defaultdict(lambda: []))[key].append(data)
                        # mappings[am_name][key].append(data)

            self.actionmap = actionmap
            self.mappings = mappings
            self.mapping_order = mapping_order
            self.all_keys = all_keys

    def print_key(self, key, val):
        """Prints the key and the value of the key."""
        if isinstance(val, list) and len(val) > 0:
            for v in val:
                self.print_key(key, v)
            return
        print(f'   {val['mode']} {' '.join([x for x in filter(lambda x: x, [val.get('mod', ''), key])])}: {val['label']} - {val['description']}')

    def print(self):
        """Prints the mappings for the keyboard."""
        if not self.mappings:
            self.parse_xmls()
        for cat in self.mappings:
            if cat in self.actionmap:
                print(self.actionmap[cat].get('label', cat), self.actionmap[cat])
            else:
                print(cat)
            for key in self.keyboard_order:
                if key in self.mappings[cat]:
                    self.print_key(key, self.mappings[cat][key])
            for key in sorted(self.mappings[cat]):
                if key not in [' ', ''] and key not in self.keyboard_order:
                    self.print_key(key, self.mappings[cat][key])

    def print_keyboard(self):
        """Prints the mappings for the keyboard in a more readable format."""
        if not self.mappings:
            self.parse_xmls()

        for key in self.keyboard_order:
            for cat in self.mappings:
                if key in self.mappings[cat]:
                    if cat in self.actionmap:
                        print(self.actionmap[cat].get('label', cat), self.actionmap[cat])
                    else:
                        print(cat)
                    self.print_key(key, self.mappings[cat][key])

        for key in sorted(self.all_keys):
            if key not in [' ', ''] and key not in self.keyboard_order:
                for cat in self.mappings:
                    if key in self.mappings[cat]:
                        if cat in self.actionmap:
                            print(self.actionmap[cat].get('label', cat), self.actionmap[cat])
                        else:
                            print(cat)
                        self.print_key(key, self.mappings[cat][key])

    def gen_keyboard(self):
        """Generates the mappings for the keyboard in a well formatted dictionary."""
        if not self.mappings:
            self.parse_xmls()

        keys = defaultdict(lambda: defaultdict(lambda: []))
        for key in self.all_keys:
            if key in ['', ' ']:
                continue
            for cat in self.mappings:
                if key in self.mappings[cat]:
                    my_cat = self.actionmap[cat].get('label', cat)
                    keys[key][my_cat] = [
                            f"{val['mode']} {' '.join([x for x in filter(lambda x: x, [val.get('mod', ''), key])])}: {val['label']} - {val['description']}"
                            for val in self.mappings[cat][key]
                        ]
        return keys

    def gen_keyboard_cat(self):
        """Generates the mappings for the keyboard in a well formatted dictionary by category."""
        if not self.mappings:
            self.parse_xmls()

        keys = OrderedDict()
        for cat in self.mappings:
            for key in self.mappings[cat]:
                if key in ['', ' ']:
                    continue
                if key in self.mappings[cat]:
                    #my_cat = self.actionmap[cat].get('label', cat)
                    keys.setdefault(cat, {})[key] = [
                            f"{val['mode']} {' '.join([x for x in filter(lambda x: x, [val.get('mod', ''), key])])}: {val['label']} - {val['description']}"
                            for val in self.mappings[cat][key]
                        ]
        return keys

if __name__ == '__main__':
    mappings = Mappings()
    # mappings.print()
    # mappings.print_keyboard()
    data = mappings.gen_keyboard_cat()
    import json
    with open('data.js', 'w') as f:
        f.write("mapping_order=")
        json.dump(mappings.mapping_order, f)
        f.write(";\n")
        f.write("all_keys=")
        json.dump([x.lower() for x in filter(lambda x: x not in ['', ' '], mappings.all_keys)], f)
        f.write(";\n")
        f.write("action_map=")
        json.dump(dict([(k,mappings.actionmap[k].get('label', k)) for k in mappings.actionmap.keys() if k not in ['', ' ']]), f)
        f.write(";\n")
        f.write("mapping_data=")
        json.dump(data, f, indent=2)
        f.write(";\n")

    print("Done")
