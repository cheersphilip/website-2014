var bonnetTest = new Animation([{ sprite: 'bonnet_inv', time: 0.2 }], bonnet_sprites);
var fuelcapTest = new Animation([{ sprite: 'fuelcap_inv', time: 0.2 }], fuelcap_sprites);
var roofTest = new Animation([{ sprite: 'roof_inv', time: 0.2 }], roof_sprites);
var sideTest = new Animation([{ sprite: 'side_inv', time: 0.2 }], side_sprites);
var wheelTest = new Animation([{ sprite: 'wheel_inv', time: 0.2 }], wheel_sprites);
var windowTest = new Animation([{ sprite: 'window_inv', time: 0.2 }], window_sprites);
var windscreenTest = new Animation([{ sprite: 'windscreen_inv', time: 0.2 }], windscreen_sprites);

var bonnet_anim = new Animation([
    { sprite: 'bonnet_01', time: 0.2 },
    { sprite: 'bonnet_02', time: 0.2 },
    { sprite: 'bonnet_01', time: 0.2 },
    { sprite: 'bonnet_03', time: 0.1 },
    { sprite: 'bonnet_04', time: 0.1 },
    { sprite: 'bonnet_05', time: 0.1 },
    { sprite: 'bonnet_06', time: 0.1 },
    { sprite: 'bonnet_07', time: 0.1 },
    { sprite: 'bonnet_08', time: 0.1 },
    { sprite: 'bonnet_09', time: 0.1 }
  ], bonnet_sprites);

var fuelcap_anim = new Animation([
    { sprite: 'fuelcap_01', time: 0.1 },
    { sprite: 'fuelcap_02', time: 0.1 },
    { sprite: 'fuelcap_03', time: 0.1 },
    { sprite: 'fuelcap_04', time: 0.1 },
    { sprite: 'fuelcap_05', time: 0.1 },
    { sprite: 'fuelcap_06', time: 0.1 },
    { sprite: 'fuelcap_07', time: 0.1 },
    { sprite: 'fuelcap_08', time: 0.1 },
    { sprite: 'fuelcap_09', time: 0.1 },
    { sprite: 'fuelcap_10', time: 0.2 },
    { sprite: 'fuelcap_11', time: 0.3 },
    { sprite: 'fuelcap_12', time: 0.2 },
    { sprite: 'fuelcap_13', time: 0.1 },
    { sprite: 'fuelcap_14', time: 0.1 },
    { sprite: 'fuelcap_15', time: 0.1 },
    { sprite: 'fuelcap_16', time: 0.1 },
    { sprite: 'fuelcap_17', time: 0.1 }
  ], fuelcap_sprites);

var roof_anim = new Animation([
    { sprite: 'roof_01', time: 1.1 },
    { sprite: 'roof_02', time: 0.1 },
    { sprite: 'roof_03', time: 0.1 },
    { sprite: 'roof_04', time: 0.1 },
    { sprite: 'roof_05', time: 0.1 },
    { sprite: 'roof_06', time: 0.1 },
    { sprite: 'roof_07', time: 0.1 },
    { sprite: 'roof_08', time: 0.1 },
    { sprite: 'roof_09', time: 0.1 },
    { sprite: 'roof_10', time: 0.1 },
    { sprite: 'roof_11', time: 0.1 },
    { sprite: 'roof_12', time: 0.1 }
    // { sprite: 'roof_13', time: 0.1 }
  ], roof_sprites);

var side_anim = new Animation([
    { sprite: 'side_01', time: 0.2 },
    { sprite: 'side_02', time: 0.2 },
    { sprite: 'side_03', time: 0.2 },
    { sprite: 'side_04', time: 0.2 },
    { sprite: 'side_05', time: 0.1 },
    { sprite: 'side_06', time: 0.1 },
    { sprite: 'side_07', time: 0.1 },
    { sprite: 'side_08', time: 0.1 },
    { sprite: 'side_09', time: 0.1 },
    { sprite: 'side_10', time: 0.1 },
    { sprite: 'side_11', time: 0.1 },
    { sprite: 'side_12', time: 0.1 },
    { sprite: 'side_13', time: 0.1 },
    { sprite: 'side_14', time: 0.1 },
    { sprite: 'side_15', time: 0.1 },
    { sprite: 'side_16', time: 0.1 },
    { sprite: 'side_17', time: 0.1 }
  ], side_sprites);

var wheel_anim = new Animation([
    { sprite: 'wheel_01', time: 0.05 },
    { sprite: 'wheel_02', time: 0.05 },
    { sprite: 'wheel_03', time: 0.05 },
    { sprite: 'wheel_04', time: 0.05 },
    { sprite: 'wheel_05', time: 0.1 },
    { sprite: 'wheel_06', time: 0.5 },
    { sprite: 'wheel_07', time: 0.05 },
    { sprite: 'wheel_08', time: 0.05 },
    { sprite: 'wheel_09', time: 0.1 },
    { sprite: 'wheel_10', time: 0.1 },
    { sprite: 'wheel_11', time: 0.1 },
    { sprite: 'wheel_12', time: 1.1 },
    { sprite: 'wheel_13', time: 0.1 },
    { sprite: 'wheel_14', time: 0.1 },
    { sprite: 'wheel_15', time: 0.1 },
    { sprite: 'wheel_16', time: 0.1 },
    { sprite: 'wheel_17', time: 0.1 },
    { sprite: 'wheel_18', time: 0.1 },
    { sprite: 'wheel_19', time: 0.1 },
    { sprite: 'wheel_20', time: 0.1 },
    { sprite: 'wheel_21', time: 0.1 },
    { sprite: 'wheel_22', time: 0.1 }
  ], wheel_sprites);

//note spelling of 'windo' to avoid conflict
var window_anim = new Animation([
    { sprite: 'window_01', time: 0.1 },
    { sprite: 'window_02', time: 0.1 },
    { sprite: 'window_03', time: 0.1 },
    { sprite: 'window_04', time: 0.1 },
    { sprite: 'window_05', time: 0.1 },
    { sprite: 'window_06', time: 0.1 },
    { sprite: 'window_07', time: 0.1 },
    { sprite: 'window_08', time: 0.8 },
    { sprite: 'window_09', time: 0.1 },
    // { sprite: 'window_10', time: 0.5 },
    { sprite: 'window_11', time: 0.7 },
    { sprite: 'window_12', time: 0.1 },
    { sprite: 'window_13', time: 0.1 },
    { sprite: 'window_14', time: 0.1 },
    { sprite: 'window_15', time: 0.1 },
    { sprite: 'window_16', time: 0.1 },
    { sprite: 'window_17', time: 0.1 },
    { sprite: 'window_18', time: 0.1 },
    { sprite: 'window_19', time: 0.1 }
  ], window_sprites);

var windscreen_anim = new Animation([
    { sprite: 'windscreen_01', time: 0.1 },
    { sprite: 'windscreen_02', time: 0.1 },
    { sprite: 'windscreen_03', time: 0.1 },
    { sprite: 'windscreen_04', time: 0.1 },
    { sprite: 'windscreen_05', time: 0.1 },
    { sprite: 'windscreen_06', time: 1.4 },
    { sprite: 'windscreen_07', time: 0.8 },
    { sprite: 'windscreen_08', time: 0.1 },
    { sprite: 'windscreen_07', time: 0.8 },
    { sprite: 'windscreen_08', time: 0.1 },
    { sprite: 'windscreen_07', time: 0.6 },
    { sprite: 'windscreen_06', time: 1.8 },
    { sprite: 'windscreen_07', time: 0.8 },
    { sprite: 'windscreen_08', time: 0.2 },
    { sprite: 'windscreen_07', time: 1.6 },
    { sprite: 'windscreen_06', time: 0.1 }
  ], windscreen_sprites);

//the default moonwalker anim
var walk = new Animation([
    { sprite: 'stand', time: 0.05 },
    { sprite: 'walk_1', time: 0.1 },
    { sprite: 'walk_2', time: 0.15 },
    { sprite: 'walk_3', time: 0.1 },
    { sprite: 'stand', time: 0.05 },
    { sprite: 'walk_4', time: 0.1 },
    { sprite: 'walk_5', time: 0.1 },
    { sprite: 'walk_6', time: 0.1 },
    { sprite: 'stand', time: 0.1 },
    { sprite: 'walk_1', time: 0.1 },
    { sprite: 'walk_2', time: 0.15 },
    { sprite: 'walk_3', time: 0.1 },
    { sprite: 'stand', time: 0.05 },
    { sprite: 'walk_4', time: 0.1 },
    { sprite: 'walk_5', time: 0.1 },
    { sprite: 'walk_6', time: 0.1 },
    { sprite: 'stand', time: 0.05 }
  ], sprites);

//bundle that into an array for convenience
var animArray = [
    fuelcap_anim,
    wheel_anim,
    side_anim,
    window_anim,
    roof_anim,
    windscreen_anim,
    bonnet_anim
];