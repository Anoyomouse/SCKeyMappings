mapping_order=["seat_general", "spaceship_general", "spaceship_view", "spaceship_movement", "spaceship_quantum", "spaceship_docking", "spaceship_targeting", "spaceship_targeting_advanced", "spaceship_target_hailing", "spaceship_radar", "spaceship_scanning", "spaceship_mining", "spaceship_salvage", "turret_movement", "turret_advanced", "spaceship_weapons", "spaceship_missiles", "spaceship_defensive", "vehicle_capacitor_assignment", "spaceship_auto_weapons", "spaceship_power", "spaceship_hud", "lights_controller", "vehicle_mobiglas", "stopwatch", "player", "prone", "mapui", "hacking", "tractor_beam", "incapacitated", "zero_gravity_eva", "zero_gravity_traversal", "vehicle_general", "vehicle_driver", "debug", "IFCS_controls", "spectator", "default", "ui_textfield", "ui_notification", "player_emotes", "player_input_optical_tracking", "player_choice", "flycam", "view_director_mode", "character_customizer", "RemoteRigidEntityController", "server_renderer"];
all_keys=["f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "f10", "f11", "f12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m", "escape", "tab", "lshift", "equals", "backspace", "lbracket", "rbracket", "enter", "slash", "rshift", "pause", "home", "pgup", "end", "pgdn", "np_1", "np_2", "np_3", "np_4", "np_5", "np_6", "np_7", "np_8", "np_9", "np_0", "np_period", "np_divide", "np_multiply", "np_subtract", "np_add", "up", "down", "left", "right", "lctrl", "space", "f+mouse2", "hmd_pitch", "hmd_roll", "hmd_yaw", "maxis_z", "mouse1", "mouse2", "mouse3", "mwheel_down", "mwheel_up"];
action_map={"seat_general": "Vehicles - Seats and Operator Modes", "spaceship_general": "Vehicles - Cockpit", "spaceship_view": "Vehicles - View", "spaceship_movement": "Flight - Movement", "spaceship_quantum": "Flight - Quantum Travel", "spaceship_docking": "Flight - Docking", "spaceship_targeting": "Vehicles - Targeting", "spaceship_targeting_advanced": "Vehicles - Target Cycling", "spaceship_target_hailing": "Flight - Target Hailing", "spaceship_radar": "Flight - Radar", "spaceship_scanning": "Vehicles - Scanning", "spaceship_mining": "Vehicles - Mining", "spaceship_salvage": "spaceship_salvage", "turret_movement": "Turret Movement", "turret_advanced": "Turret Advanced", "spaceship_weapons": "Vehicles - Weapons", "spaceship_missiles": "Vehicles - Missiles", "spaceship_defensive": "Vehicles - Shields and Countermeasures", "vehicle_capacitor_assignment": "Vehicles - Power Triangle Assignment", "spaceship_auto_weapons": "spaceship_auto_weapons", "spaceship_power": "Flight - Power", "spaceship_hud": "Flight - HUD", "lights_controller": "Lights", "vehicle_mobiglas": "Vehicle - Mobiglas", "stopwatch": "Stop Watch", "player": "On Foot - All", "prone": "On Foot - All", "mapui": "mapui", "hacking": "hacking", "tractor_beam": "On Foot - All", "incapacitated": "On Foot - All", "zero_gravity_eva": "E.V.A - All", "zero_gravity_traversal": "zero_gravity_traversal", "vehicle_general": "Ground Vehicle - General", "vehicle_driver": "Ground Vehicle - Movement", "debug": "debug", "IFCS_controls": "IFCS_controls", "spectator": "Electronic Access - Spectator", "default": "Social - General", "ui_textfield": "ui_textfield", "ui_notification": "Social - Invites", "player_emotes": "Social - Emotes", "player_input_optical_tracking": "VOIP, FOIP and Head Tracking", "player_choice": "Quick Keys, Interactions, and Inner Thought", "flycam": "flycam", "view_director_mode": "Camera - Advanced Camera Controls", "character_customizer": "character_customizer", "RemoteRigidEntityController": "RemoteRigidEntityController", "server_renderer": "server_renderer"};
mapping_data={
  "seat_general": {
    "u": [
      "tap lshift u: Emergency Exit Seat - Press LShift + H to engage emergency exit"
    ],
    "y": [
      "press ralt y: Eject"
    ],
    "m": [
      "tap m: Mining Mode (Toggle) - Mining Mode Toggle",
      "tap m: Salvage Mode (Toggle) - Activate salvage mode when seated."
    ],
    "v": [
      "tap v: Scanning Mode (Toggle)"
    ],
    "b": [
      "tap b: Quantum Travel System (Toggle)"
    ],
    "mouse3": [
      "tap mouse3: Missile Operator Mode (Toggle)",
      "tap mouse3: v_operator_mode_cycle_forward"
    ]
  },
  "spaceship_general": {
    "backspace": [
      "press backspace: Self Destruct"
    ],
    "r": [
      "press ralt r: Flight / Systems Ready - Flight / Systems Ready"
    ],
    "k": [
      "press ralt k: Port Lock Toggle All - Toggle Open/Close Ports"
    ],
    "1": [
      "all 1: pc_conversation_option1"
    ],
    "2": [
      "all 2: pc_conversation_option2"
    ],
    "3": [
      "all 3: pc_conversation_option3"
    ],
    "4": [
      "all 4: pc_conversation_option4"
    ],
    "5": [
      "all 5: pc_conversation_option5"
    ]
  },
  "spaceship_view": {
    "hmd_yaw": [
      " hmd_yaw: v_view_yaw_absolute"
    ],
    "hmd_pitch": [
      " hmd_pitch: v_view_pitch_absolute"
    ],
    "hmd_roll": [
      " hmd_roll: v_view_roll_absolute"
    ],
    "f4": [
      "tap f4: Cycle camera view"
    ],
    "f": [
      "PR f: v_view_interact"
    ],
    "z": [
      "hold z: Freelook (Hold)"
    ]
  },
  "spaceship_movement": {
    "q": [
      "PR q: Roll left"
    ],
    "e": [
      "PR e: Roll right"
    ],
    "space": [
      "PR space: Strafe up (abs.)"
    ],
    "lctrl": [
      "PR lctrl: Strafe down (abs.)"
    ],
    "a": [
      "PR a: Strafe left (abs.)"
    ],
    "d": [
      "PR d: Strafe right (abs.)"
    ],
    "w": [
      "PR w: Throtte - Forward (abs.) - Throtte - Forward (abs.)"
    ],
    "s": [
      "PR s: Throtte - Backward (abs.) - Throtte - Backward (abs.)"
    ],
    "c": [
      "smart_toggle c: Decoupled Mode (Toggle, Hold)",
      "press lalt c: Cruise Control (Toggle) - Toggles Cruise Control mode on and off"
    ],
    "lshift": [
      "all lshift: Boost"
    ],
    "maxis_z": [
      " maxis_z: Speed Limiter (Rel.) - Speed Limiter (Rel.)",
      " ralt maxis_z: Acceleration Limiter Up / Down (rel.) - Acceleration Limiter Up / Down (rel.) - Decreases / increases acceleration limiter relative to old value"
    ],
    "x": [
      "PR x: Spacebrake"
    ],
    "rshift": [
      "smart_toggle rshift: Lock Pitch / Yaw Movement (Toggle / Hold) - While active no rotational inputs are allowed to your ship. This is useful for arresting movement when you lost control using a mouse."
    ],
    "n": [
      "tap n: Landing System (Toggle)",
      "delayed_press n: Autoland - Activate Autoland",
      "tap lalt n: Request Landing - Contacts ATC and other landing services."
    ],
    "k": [
      "press k: Toggle VTOL",
      "tap lalt k: Cycle Configuration - Cycle between the vehicle's expanded and retracted configurations."
    ],
    "l": [
      "tap lalt l: v_atc_loading_area_request"
    ],
    "b": [
      "tap b: Cycle Master Mode"
    ],
    "equals": [
      "tap equals: Jump Drive - Request Jump",
      "delayed_press equals: Jump Drive - Engage Jump"
    ]
  },
  "spaceship_quantum": {
    "b": [
      "delayed_press b: Engage Quantum Drive (Hold) - Engages the quantum drive."
    ]
  },
  "spaceship_docking": {
    "n": [
      "tap n: Toggle Docking Mode - Toggles docking mode.",
      "delayed_hold n: Invoke Docking - Invokes docking."
    ],
    "0": [
      "delayed_press 0: Toggle Docking Camera - Toggles the docking camera."
    ]
  },
  "spaceship_targeting": {
    "1": [
      "tap 1: Pin Index 1 - Lock / Unlock Pinned Target",
      "tap lalt 1: Pin Index 1 - Pin / Unpin Selected Target"
    ],
    "2": [
      "tap 2: Pin Index 2 - Lock / Unlock Pinned Target",
      "tap lalt 2: Pin Index 2 - Pin / Unpin Selected Target"
    ],
    "3": [
      "tap 3: Pin Index 3 - Lock / Unlock Pinned Target",
      "tap lalt 3: Pin Index 3 - Pin / Unpin Selected Target"
    ],
    "0": [
      "tap 0: Remove All Pinned Targets"
    ],
    "t": [
      "tap lalt t: Unlock Locked Target"
    ],
    "l": [
      "smart_toggle lalt l: Enable / Disable Look Ahead - Enables and disables Look Ahead Mode"
    ]
  },
  "spaceship_targeting_advanced": {
    "t": [
      "tap t: Cycle Lock - In View - Forward",
      "tap t: Cycle Lock - In View - Under Reticle"
    ],
    "4": [
      "tap 4: Cycle Lock - Attackers - Forward",
      "tap lalt 4: Cycle Lock - Attackers - Reset to Closest"
    ],
    "5": [
      "tap 5: Cycle Lock - Hostiles - Forward",
      "tap lalt 5: Cycle Lock - Hostiles - Reset to Closest"
    ],
    "6": [
      "tap 6: Cycle Lock - Friendlies - Forward",
      "tap lalt 6: Cycle Lock - Friendlies - Reset to Closest"
    ],
    "7": [
      "tap 7: Cycle Lock - All - Forward",
      "tap lalt 7: Cycle Lock - All - Reset to Closest"
    ],
    "8": [
      "tap 8: Cycle Lock - Sub-Target - Forward",
      "tap lalt 8: Cycle Lock - Sub-Target - Reset to Main Target"
    ]
  },
  "spaceship_target_hailing": {
    "9": [
      "tap 9: Hail Target - HailTarget"
    ]
  },
  "spaceship_radar": {
    "v": [
      "delayed_hold v: Activate Ping (Hold & Release) - Activates the Ping Wave"
    ]
  },
  "spaceship_scanning": {
    "left": [
      "tap left: v_ui_prev_scan_tab",
      "tap rctrl left: v_ui_prev_contact_page"
    ],
    "right": [
      "tap right: v_ui_next_scan_tab",
      "tap rctrl right: v_ui_next_contact_page"
    ],
    "up": [
      "tap up: v_ui_prev_scan_page",
      "tap rctrl up: v_ui_prev_contact"
    ],
    "down": [
      "tap down: v_ui_next_scan_page",
      "tap rctrl down: v_ui_next_contact"
    ]
  },
  "spaceship_mining": {
    "maxis_z": [
      "press lalt maxis_z: Increase Mining Laser Power - Increase Mining Laser Power"
    ],
    "1": [
      "press lalt 1: Activate Mining Module (Slot 1) - Activate a Mining Module"
    ],
    "2": [
      "press lalt 2: Activate Mining Module (Slot 2) - Activate a Mining Module"
    ],
    "3": [
      "press lalt 3: Activate Mining Module (Slot 3) - Activate a Mining Module"
    ],
    "j": [
      "press lalt j: Jettison Cargo - Jettison Cargo"
    ]
  },
  "spaceship_salvage": {
    "mwheel_up": [
      "press lalt mwheel_up: tractor_beam_vehicle_increase_distance"
    ],
    "mwheel_down": [
      "press lalt mwheel_down: tractor_beam_vehicle_decrease_distance"
    ],
    "a": [
      "smart_toggle ralt a: v_salvage_toggle_fire_left",
      " lalt a: v_salvage_focus_left"
    ],
    "d": [
      "smart_toggle ralt d: v_salvage_toggle_fire_right",
      " lalt d: v_salvage_focus_right"
    ],
    "w": [
      "smart_toggle ralt w: v_salvage_toggle_fire_fracture",
      " lalt w: v_salvage_focus_fracture"
    ],
    "s": [
      "smart_toggle ralt s: v_salvage_toggle_fire_disintegrate",
      " lalt s: v_salvage_focus_all_heads"
    ],
    "g": [
      "press g: Salvage Mode Gimbal (Toggle) - Toggle between gimbled and fixed salvage targeting modes.",
      " lalt g: v_salvage_reset_gimbal"
    ],
    "maxis_z": [
      " lalt maxis_z: Relative Beam Spacing - Adjust the relative spacing between the Vulture's two salvage heads."
    ],
    "mouse2": [
      " lalt mouse2: Salvage Beam Axis (Toggle) - Set the orientation axis of the salvage beam to vertical or horizontal."
    ]
  },
  "turret_movement": {
    "q": [
      "smart_toggle q: Toggle Turret Mouse Movement (VJoy, FPS style) - Enables / Disables relative mouse mode for turrets"
    ],
    "y": [
      "PRH y: Exit Remote Turret"
    ],
    "z": [
      "hold z: Zoom Toggle (Remote Turret) - Zoom Toggle (Remote Turret)"
    ],
    "g": [
      "press g: Turret Gyro Stabilization (Toggle) - Turret Gyro Stabilization (Toggle)"
    ]
  },
  "turret_advanced": {
    "e": [
      "press e: Turret E.S.P. Toggle On / Off - Enables / Disables Turret E.S.P."
    ],
    "c": [
      "hold_no_retrigger c: Recenter Turret (Hold)"
    ],
    "a": [
      "smart_toggle a: Turret - Speed Limiter - On/Off (Hold/Toggle) - Toggles the limiter for the rotational turret speed",
      "all a: Turret - Speed Limiter - Decrease (rel) - Decreases the speed of the turret."
    ],
    "d": [
      "all d: Turret - Speed Limiter - Increase (rel) - Increases the speed of the turret."
    ],
    "b": [
      "P b: Cycle fire mode (staggered / combined)"
    ],
    "lshift": [
      "all lshift: turret_instant_zoom"
    ],
    "s": [
      "press s: turret_change_position"
    ]
  },
  "spaceship_weapons": {
    "g": [
      "tap lalt g: Manual Gimbal Mode - Swap VJoy / Look Direction (Toggle, Hold) - This will cause the aim reticle to either follow the VJoy indication on the HUD or your look direction.",
      "tap ralt g: Manual Gimbal Mode - Lock Aim Vector - Locks the aim vector in manual gimbal mode.",
      "tap g: Cycle Fixed / Auto Gimbal Modes",
      "delayed_press g: Set Manual Gimbal Mode (Long Press)"
    ]
  },
  "spaceship_missiles": {
    "mouse1": [
      "press mouse1: Launch Missiles (Tap)"
    ],
    "mouse2": [
      "press mouse2: Cycle Next Missile Type"
    ],
    "g": [
      "tap g: Increase Number of Armed Missiles",
      "tap lalt g: Reset Number of Armed Missiles"
    ],
    "t": [
      "delayed_press t: v_weapon_bombing_toggle_desired_impact_point_hold"
    ]
  },
  "spaceship_defensive": {
    "h": [
      "PRH h: Decoy - Launch Burst (tap), Set and Launch Burst (hold) - Launches a decoy countermeasure.",
      "press ralt h: Decoy - Increase Burst Size (tap) - Increases the burst size by one.",
      "press lalt h: Decoy - Decrease Burst Size (tap) - Decreases the burst size by one."
    ],
    "j": [
      "press j: Noise - Deploy (Tap) - Deploys a noise countermeasure."
    ],
    "np_8": [
      "press np_8: Shield raise level front"
    ],
    "np_2": [
      "press np_2: Shield raise level back"
    ],
    "np_4": [
      "press np_4: Shield raise level left"
    ],
    "np_6": [
      "press np_6: Shield raise level right"
    ],
    "np_7": [
      "press np_7: Shield raise level top"
    ],
    "np_1": [
      "press np_1: Shield raise level bottom"
    ],
    "np_5": [
      "press np_5: Shield reset levels"
    ]
  },
  "vehicle_capacitor_assignment": {
    "f5": [
      "PRH f5: Weapons - Increase (Tap) / Set to Max (Hold)"
    ],
    "f6": [
      "PRH f6: Engines - Increase (Tap) / Set to Max (Hold)"
    ],
    "f7": [
      "PRH f7: Shields - Increase (Tap) / Set to Max (Hold)"
    ],
    "f8": [
      "press f8: Reset Assignments"
    ]
  },
  "spaceship_auto_weapons": {
    "slash": [
      "P slash: v_weapon_toggle_ai"
    ]
  },
  "spaceship_power": {
    "u": [
      "press u: Toggle Power - All -  Toggle Power - All"
    ],
    "i": [
      "press i: Toggle Power - Thrusters"
    ],
    "o": [
      "press o: Toggle Power - Shields"
    ],
    "p": [
      "press p: Toggle Power - Weapons"
    ],
    "f9": [
      "PH f9: Decrease Throttle",
      "double_tap f9: Decrease Throttle to Min"
    ],
    "f10": [
      "PH f10: Increase Throttle",
      "double_tap f10: Increase Throttle to Max"
    ]
  },
  "spaceship_hud": {
    "f1": [
      "press f1: mobiGlas (Toggle)"
    ],
    "tab": [
      "all tab: Scoreboard"
    ],
    "f2": [
      "press f2: Map - Map"
    ],
    "x": [
      "press lalt x: Wipe Helmet Visor - Quickly wipe your helmet visor to improve visibility"
    ]
  },
  "lights_controller": {
    "l": [
      "press l: Headlights (Toggle)"
    ]
  },
  "vehicle_mobiglas": {
    "r": [
      "tap r: ui_3d_display_reorient"
    ],
    "e": [
      "double_tap_nonblocking e: ui_3d_display_center"
    ],
    "np_subtract": [
      "PH np_subtract: ui_3d_display_zoom_out_button"
    ],
    "np_add": [
      "PH np_add: ui_3d_display_zoom_in_button"
    ],
    "w": [
      "PH w: ui_3d_display_nonToggledPanUp"
    ],
    "s": [
      "PH s: ui_3d_display_nonToggledPanDown"
    ],
    "a": [
      "PH a: ui_3d_display_nonToggledPanLeft"
    ],
    "d": [
      "PH d: ui_3d_display_nonToggledPanRight"
    ],
    "up": [
      "PH up: ui_3d_display_nonToggledYawUp"
    ],
    "down": [
      "PH down: ui_3d_display_nonToggledYawDown"
    ],
    "left": [
      "PH left: ui_3d_display_nonToggledPitchLeft"
    ],
    "right": [
      "PH right: ui_3d_display_nonToggledPitchRight"
    ],
    "lctrl": [
      "hold lctrl: ui_3d_display_pinMode"
    ]
  },
  "player": {
    "a": [
      "hold a: Move Left",
      "double_tap_nonblocking a: Dodge left{}",
      "PH a: ui_3d_display_nonToggledPanLeft"
    ],
    "d": [
      "hold d: Move Right",
      "double_tap_nonblocking d: Dodge Right",
      "PH d: ui_3d_display_nonToggledPanRight"
    ],
    "w": [
      "hold w: Move Forward",
      "PH w: ui_3d_display_nonToggledPanUp"
    ],
    "s": [
      "hold s: Move Backwards",
      "double_tap_nonblocking s: Dodge Back{}",
      "PH s: ui_3d_display_nonToggledPanDown"
    ],
    "space": [
      "press space: Jump",
      "hold space: ledgegrab"
    ],
    "lctrl": [
      "hold_toggle lctrl: Crouch",
      "hold lctrl: ui_3d_display_pinMode"
    ],
    "x": [
      "press x: Prone",
      "tap lalt x: reloadSecondary",
      "press lalt x: Wipe Helmet Visor - Quickly wipe your helmet visor to improve visibility"
    ],
    "lshift": [
      "hold_toggle lshift: Sprint",
      "hold lshift: Hold Breath (ADS)"
    ],
    "q": [
      "hold q: Lean Left"
    ],
    "e": [
      "hold e: Lean Right",
      "PR e: use",
      "double_tap_nonblocking e: ui_3d_display_center"
    ],
    "1": [
      "tap 1: Select Sidearm",
      "tap 1: select_primary_pit",
      "all 1: pc_conversation_option1"
    ],
    "2": [
      "tap 2: Select Primary Weapon",
      "tap 2: select_secondary_pit",
      "all 2: pc_conversation_option2"
    ],
    "3": [
      "tap 3: Select Secondary Weapon",
      "tap 3: select_sidearm_pit",
      "all 3: pc_conversation_option3"
    ],
    "4": [
      "tap 4: Select Gadget",
      "tap 4: select_MeleeWeapon_pit",
      "all 4: pc_conversation_option4"
    ],
    "5": [
      "tap 5: Select Melee - Select Melee",
      "tap 5: select_gadget_pit",
      "all 5: pc_conversation_option5"
    ],
    "0": [
      "tap 0: Unarmed Combat"
    ],
    "r": [
      "tap r: Reload",
      "press lalt r: ammoRepool",
      "delayed_press_medium r: Holster Weapon",
      "tap r: ui_3d_display_reorient"
    ],
    "j": [
      "tap j: Customize Weapon - Customize Weapon"
    ],
    "u": [
      "press u: FPS Underbarrel Attachment Action"
    ],
    "b": [
      "press b: Change Fire Mode"
    ],
    "pgdn": [
      "press pgdn: Weapon Zeroing Decrease - Adjust the weapon scope to accommodate a closer target distance into sighting."
    ],
    "pgup": [
      "press pgup: Weapon Zeroing Increase / Auto - Adjust the weapon scope to accommodate a farther target distance into sighting."
    ],
    "m": [
      "delayed_hold_long m: Request Rescue (while Incapacitated)"
    ],
    "t": [
      "press t: Flashlight (Toggle)"
    ],
    "f4": [
      "tap f4: Third Person View (Toggle)"
    ],
    "f11": [
      "press f11: toggle_cursor_input"
    ],
    "z": [
      "hold z: Free View Camera (Hold) - Holding allows free view camera in third person"
    ],
    "up": [
      "press up: pan_thirdperson_up",
      "PH up: ui_3d_display_nonToggledYawUp"
    ],
    "down": [
      "press down: pan_thirdperson_down",
      "PH down: ui_3d_display_nonToggledYawDown"
    ],
    "hmd_yaw": [
      " hmd_yaw: hmd_rotateyaw"
    ],
    "hmd_pitch": [
      " hmd_pitch: hmd_rotatepitch"
    ],
    "hmd_roll": [
      " hmd_roll: hmd_rotateroll"
    ],
    "f1": [
      "press f1: mobiGlas (Toggle)"
    ],
    "tab": [
      " tab: Scoreboard"
    ],
    "enter": [
      "press enter: pl_hud_confirm"
    ],
    "np_subtract": [
      "PH np_subtract: ui_3d_display_zoom_out_button"
    ],
    "np_add": [
      "PH np_add: ui_3d_display_zoom_in_button"
    ],
    "left": [
      "PH left: ui_3d_display_nonToggledPitchLeft"
    ],
    "right": [
      "PH right: ui_3d_display_nonToggledPitchRight"
    ],
    "f2": [
      "press f2: Map - Map"
    ],
    "backspace": [
      "delayed_press_medium backspace: Force Re-spawn (E.V.A. / On Foot)"
    ]
  },
  "mapui": {
    "a": [
      "hold a: mapui_pan_left"
    ],
    "d": [
      "hold d: mapui_pan_right"
    ],
    "w": [
      "hold w: mapui_pan_forward"
    ],
    "s": [
      "hold s: mapui_pan_back"
    ],
    "e": [
      "PR e: mapui_cycle_section_up"
    ],
    "q": [
      "PR q: mapui_cycle_section_down"
    ]
  },
  "hacking": {
    "rshift": [
      "double_tap rshift: hacking_minigame_debug_toggle_command_input"
    ],
    "y": [
      "press y: hacking_minigame_abort"
    ],
    "h": [
      "press h: hacking_minigame_help_window_toggle"
    ],
    "w": [
      "hold w: hacking_minigame_movement_up"
    ],
    "s": [
      "hold s: hacking_minigame_movement_down"
    ],
    "a": [
      "hold a: hacking_minigame_movement_left"
    ],
    "d": [
      "hold d: hacking_minigame_movement_right"
    ],
    "f": [
      "press f: hacking_minigame_ability_inject"
    ],
    "v": [
      "delayed_press v: hacking_minigame_ability_ping"
    ],
    "q": [
      "press q: hacking_minigame_ability_slowdown"
    ],
    "r": [
      "press r: hacking_minigame_ability_swap"
    ],
    "e": [
      "press e: hacking_minigame_ability_wraparound"
    ],
    "i": [
      "press i: hacking_minigame_cycle_input_mode"
    ]
  },
  "tractor_beam": {
    "r": [
      "hold r: tractor_beam_rotate"
    ],
    "b": [
      "press b: tractor_beam_detach"
    ]
  },
  "incapacitated": {
    "backspace": [
      "delayed_hold_long backspace: Regen (while Incapacitated)"
    ]
  },
  "zero_gravity_eva": {
    "q": [
      "hold q: Roll Left"
    ],
    "e": [
      "hold e: Roll Right"
    ],
    "space": [
      "hold space: Strafe Up"
    ],
    "lctrl": [
      "hold lctrl: Strafe Down"
    ],
    "a": [
      "hold a: Strafe Left"
    ],
    "d": [
      "hold d: Strafe Right"
    ],
    "w": [
      "hold w: Strafe Forward"
    ],
    "s": [
      "hold s: Strafe Backward"
    ],
    "x": [
      "hold x: Brake"
    ],
    "lshift": [
      "hold lshift: Boost"
    ],
    "z": [
      "hold z: Freelook (Hold)"
    ]
  },
  "zero_gravity_traversal": {
    "space": [
      "hold space: zgt_launch"
    ],
    "y": [
      "press y: zgt_detach"
    ],
    "q": [
      "press q: Roll Left"
    ],
    "e": [
      "press e: Roll Right"
    ]
  },
  "vehicle_general": {
    "space": [
      "PR space: Horn"
    ],
    "f4": [
      "tap f4: Cycle camera view"
    ],
    "z": [
      "hold z: Freelook (Hold)"
    ],
    "f11": [
      "tap f11: v_toggle_cursor_input"
    ],
    "hmd_yaw": [
      " hmd_yaw: v_view_yaw_absolute"
    ],
    "hmd_pitch": [
      " hmd_pitch: v_view_pitch_absolute"
    ],
    "hmd_roll": [
      " hmd_roll: v_view_roll_absolute"
    ],
    "f1": [
      "press f1: mobiGlas (Toggle)"
    ],
    "r": [
      "press ralt r: Flight / Systems Ready - Flight / Systems Ready"
    ],
    "k": [
      "press ralt k: Port Lock Toggle All - Toggle Open/Close Ports"
    ],
    "f2": [
      "press f2: Map - Map"
    ],
    "x": [
      "press lalt x: Wipe Helmet Visor - Quickly wipe your helmet visor to improve visibility"
    ]
  },
  "vehicle_driver": {
    "w": [
      "PR w: Drive Forward"
    ],
    "s": [
      "PR s: Drive Backward"
    ],
    "a": [
      "PR a: Turn Left"
    ],
    "d": [
      "PR d: Turn Right"
    ],
    "x": [
      "hold x: Brake"
    ],
    "lshift": [
      "all lshift: v_boost"
    ],
    "rshift": [
      "smart_toggle rshift: Lock Pitch / Yaw Movement (Toggle / Hold) - While active no rotational inputs are allowed to your ship. This is useful for arresting movement when you lost control using a mouse."
    ],
    "v": [
      "press v: v_mgv_switch_brake_on_idle"
    ]
  },
  "debug": {
    "f9": [
      "P f9: godmode"
    ],
    "pause": [
      "P pause: pause_and_fly"
    ],
    "f11": [
      "P f11: toggleaidebugdraw"
    ],
    "np_divide": [
      "P np_divide: ai_DebugCenterViewAgent"
    ],
    "f10": [
      "P f10: togglepdrawhelpers"
    ],
    "np_multiply": [
      "P np_multiply: mannequin_debugai"
    ],
    "np_period": [
      "press np_period: pl_result_state_debug_target"
    ],
    "end": [
      "press end: mov_advance_all_sequences"
    ],
    "home": [
      "press home: mov_pause_resume_all_sequences"
    ]
  },
  "IFCS_controls": {
    "a": [
      "PR rctrl a: v_IFCS_A"
    ],
    "b": [
      "PR rctrl b: v_IFCS_B"
    ],
    "x": [
      "PR rctrl x: v_IFCS_X"
    ],
    "y": [
      "PR rctrl y: v_IFCS_Y"
    ]
  },
  "spectator": {
    "1": [
      "press 1: Spectator Camera Lock Target"
    ],
    "b": [
      "press b: Spectator Camera HUD (Toggle)"
    ],
    "n": [
      "press n: spectate_gen_nextcamera"
    ],
    "f4": [
      "press f4: Spectator Camera Mode (Next)",
      "press f4: spectate_toggle_thirdperson"
    ],
    "a": [
      "hold a: spectate_moveleft"
    ],
    "d": [
      "hold d: spectate_moveright"
    ],
    "w": [
      "hold w: spectate_moveforward"
    ],
    "s": [
      "hold s: spectate_moveback"
    ],
    "space": [
      "hold space: spectate_moveup"
    ],
    "lctrl": [
      "hold lctrl: spectate_movedown"
    ],
    "lshift": [
      "hold lshift: spectate_freecam_sprint"
    ],
    "z": [
      "press z: spectate_toggle_freecam",
      "hold z: spectate_free_look"
    ],
    "q": [
      "hold q: spectate_roll_left"
    ],
    "e": [
      "hold e: spectate_roll_right"
    ]
  },
  "default": {
    "np_1": [
      "press np_1: hmd_toggle"
    ],
    "np_2": [
      "press np_2: hmd_center"
    ],
    "backspace": [
      "tap backspace: cam_toggle_cinematic",
      "PR backspace: flashui_backspace"
    ],
    "o": [
      "PR o: objectives"
    ],
    "f5": [
      "press f5: toggle_trackview"
    ],
    "f": [
      "all f: Re-spawn",
      "press f: ui_hide_hint"
    ],
    "x": [
      "press x: retry",
      "press x: ready",
      "press lctrl x: ui_cut"
    ],
    "y": [
      "PH y: Exit seat"
    ],
    "f3": [
      "P f3: flymode"
    ],
    "space": [
      "H space: flymode_strafe_up",
      "PR space: ui_skip_video",
      "PR space: flashui_spacebar"
    ],
    "lctrl": [
      "H lctrl: flymode_strafe_down"
    ],
    "q": [
      "H q: flymode_roll_left"
    ],
    "e": [
      "H e: flymode_roll_right"
    ],
    "escape": [
      "P escape: ui_toggle_pause",
      "PR escape: ui_back"
    ],
    "up": [
      "PH up: ui_up",
      "PRH up: flashui_up"
    ],
    "down": [
      "PH down: ui_down",
      "PRH down: flashui_down"
    ],
    "left": [
      "PH left: ui_left",
      "PH left: ui_radialmenu_pageleft",
      "PRH left: flashui_left"
    ],
    "right": [
      "PH right: ui_right",
      "PH right: ui_radialmenu_pageright",
      "PRH right: flashui_right"
    ],
    "tab": [
      "PR tab: flashui_tab"
    ],
    "f11": [
      "press f11: CommLink App (Toggle)"
    ],
    "f12": [
      "press f12: Chat Window (Toggle)"
    ],
    "c": [
      "press lctrl c: ui_copy"
    ],
    "v": [
      "press lctrl v: ui_paste"
    ]
  },
  "ui_textfield": {
    "backspace": [
      "PRH backspace: ui_textfield_backspace"
    ],
    "up": [
      "PRH up: ui_textfield_arrow_up"
    ],
    "down": [
      "PRH down: ui_textfield_arrow_down"
    ],
    "left": [
      "PRH left: ui_textfield_arrow_left"
    ],
    "right": [
      "PRH right: ui_textfield_arrow_right"
    ]
  },
  "ui_notification": {
    "lbracket": [
      "P lbracket: Accept Invite"
    ],
    "rbracket": [
      "tap rbracket: Reject Invite",
      "delayed_hold rbracket: Ignore Invite (hold) - Ignore Invite"
    ]
  },
  "player_emotes": {
    "np_5": [
      "press np_5: Forward"
    ],
    "np_1": [
      "press np_1: Left"
    ],
    "np_3": [
      "press np_3: Right"
    ],
    "np_2": [
      "press np_2: Stop"
    ],
    "np_4": [
      "press np_4: Yes"
    ],
    "np_6": [
      "press np_6: No"
    ]
  },
  "player_input_optical_tracking": {
    "np_divide": [
      "press np_divide: Enable Head Tracking (Toggle) - Switches head tracking on / off (Toggle)"
    ],
    "np_add": [
      "hold np_add: VOIP Push To Talk - VOIP Push To Talk",
      "hold lalt np_add: VOIP Push To Talk (Proximity only) - VOIP Push To Talk (Proximity only)"
    ],
    "np_subtract": [
      "delayed_hold np_subtract: FOIP Selfie Cam - FOIP Selfie Cam"
    ],
    "np_multiply": [
      "press np_multiply: FOIP Recalibrate{} - FOIP Recalibrate"
    ],
    "np_period": [
      "press np_period: Cycle through audio channels - Cycle through audio channels"
    ]
  },
  "player_choice": {
    "f": [
      "RH f: Interaction Mode - Interaction Mode"
    ],
    "a": [
      "press a: MFD Left"
    ],
    "d": [
      "press d: MFD Right"
    ],
    "w": [
      "press w: MFD Up"
    ],
    "s": [
      "press s: MFD Down"
    ],
    "f+mouse2": [
      "press f+mouse2: Personal Inner Thought (PIT) - Personal Inner Thought"
    ],
    "np_0": [
      "press np_0: Exit"
    ],
    "i": [
      "press i: Personal Commodity Inventory (Toggle)"
    ],
    "m": [
      "press lalt m: Mining Mode Actions - PIT Category"
    ],
    "3": [
      "all 3: Weapon Select Radial Menu",
      "all 3: pc_qs_weapons_pit_sidearm"
    ],
    "1": [
      "all 1: Weapon Select Radial Menu",
      "all 1: pc_qs_weapons_pit_primary"
    ],
    "2": [
      "all 2: Weapon Select Radial Menu",
      "all 2: pc_qs_weapons_pit_secondary"
    ],
    "g": [
      "all g: Throwable Select Radial Menu"
    ],
    "c": [
      "all c: pc_qs_consumables"
    ],
    "tab": [
      "all lshift tab: Flight Mode Select Radial Menu"
    ]
  },
  "flycam": {
    "w": [
      "PR w: flycam_movefwd"
    ],
    "s": [
      "PR s: flycam_moveback"
    ],
    "d": [
      "PR d: flycam_moveright"
    ],
    "a": [
      "PR a: flycam_moveleft"
    ],
    "q": [
      "PR q: flycam_moveup"
    ],
    "e": [
      "PR e: flycam_movedown"
    ],
    "up": [
      "P up: flycam_speedup"
    ],
    "down": [
      "P down: flycam_speeddown"
    ],
    "space": [
      "PR space: flycam_turbo"
    ],
    "z": [
      "P z: flycam_setpoint"
    ],
    "x": [
      "P x: flycam_play"
    ],
    "c": [
      "P c: flycam_clear"
    ]
  },
  "view_director_mode": {
    "f4": [
      "PR f4: Advanced Camera Controls Modifier (Hold)"
    ],
    "z": [
      "P z: Advanced Camera Controls Modifier (Hold)"
    ],
    "np_1": [
      "delayed_press np_1: Save View 1",
      "tap np_1: Load View 1"
    ],
    "np_2": [
      "delayed_press np_2: Save View 2",
      "tap np_2: Load View 2"
    ],
    "np_3": [
      "delayed_press np_3: Save View 3",
      "tap np_3: Load View 3"
    ],
    "np_4": [
      "delayed_press np_4: Save View 4",
      "tap np_4: Load View 4"
    ],
    "np_5": [
      "delayed_press np_5: Save View 5",
      "tap np_5: Load View 5"
    ],
    "np_6": [
      "delayed_press np_6: Save View 6",
      "tap np_6: Load View 6"
    ],
    "np_7": [
      "delayed_press np_7: Save View 7",
      "tap np_7: Load View 7"
    ],
    "np_8": [
      "delayed_press np_8: Save View 8",
      "tap np_8: Load View 8"
    ],
    "np_9": [
      "delayed_press np_9: Save View 9",
      "tap np_9: Load View 9"
    ],
    "np_0": [
      "delayed_press np_0: Clear Saved View"
    ],
    "right": [
      "PH right: X Offset Positive"
    ],
    "left": [
      "PH left: X Offset Negative"
    ],
    "up": [
      "PH up: Y Offset Positive / Spectator Freecam Focal Point Forward"
    ],
    "down": [
      "PH down: Y Offset Negative{}/ Spectator Freecam Focal Point Backward"
    ],
    "pgup": [
      "PH pgup: Z Offset Positive"
    ],
    "pgdn": [
      "PH pgdn: Z Offset Negative"
    ],
    "np_add": [
      "P np_add: Increase FoV"
    ],
    "np_subtract": [
      "P np_subtract: Decrease FoV"
    ],
    "home": [
      "P home: view_fstop_in"
    ],
    "end": [
      "P end: Decrease DoF"
    ],
    "np_multiply": [
      "PR np_multiply: Reset Current View"
    ]
  },
  "character_customizer": {
    "lshift": [
      "hold lshift: character_customizer_enable_rotation"
    ],
    "up": [
      "PRH up: character_customizer_library_scroll_up",
      "PR up: character_customizer_pitch_up"
    ],
    "down": [
      "PRH down: character_customizer_library_scroll_down",
      "PR down: character_customizer_pitch_down"
    ],
    "right": [
      "PR right: character_customizer_edit_dna_pos",
      "PR right: character_customizer_yaw_right"
    ],
    "left": [
      "PR left: character_customizer_edit_dna_neg",
      "PR left: character_customizer_yaw_left"
    ]
  },
  "RemoteRigidEntityController": {
    "w": [
      "hold w: remote_moveForward"
    ],
    "s": [
      "hold s: remote_moveBack"
    ],
    "a": [
      "hold a: remote_moveLeft"
    ],
    "d": [
      "hold d: remote_moveRight"
    ],
    "space": [
      "hold space: remote_moveUp"
    ],
    "lctrl": [
      "hold lctrl: remote_moveDown"
    ],
    "c": [
      "hold c: remote_scaleUp"
    ],
    "z": [
      "hold z: remote_scaleDown"
    ],
    "q": [
      "hold q: remote_rollLeft"
    ],
    "e": [
      "hold e: remote_rollRight"
    ],
    "v": [
      "tap v: remote_switchControl"
    ],
    "y": [
      "tap y: remote_stopControl"
    ],
    "b": [
      "tap b: remote_switchTarget"
    ]
  },
  "server_renderer": {
    "f4": [
      "tap f4: v_view_cycle_fwd"
    ]
  }
};
