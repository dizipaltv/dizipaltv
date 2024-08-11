const { Sync } = require("../filer");
const os = require("os");
const path = require("path");

class Config {
    static BASIC_CONFIGS = {
        "currentSiteURL": "https://dizipal738.com",
        "latestAdress": 738,
        "adBlocker": true,
        "checkAdressOnStartup": false
    }
    static CONFIG_FOLDER = path.join(os.homedir(), 'AppData', 'Roaming', 'Dizipal');
    static CONFIG_FILE = path.join(Config.CONFIG_FOLDER, ".dizipalrc");
    static check() {
        try {
            // if config folder not exist 
            Sync.make_dir(Config.CONFIG_FOLDER);
            console.log(`ℹ️ [--config.Config.check--] - The ${Config.CONFIG_FOLDER} folder has been created again.`);

            // if not exist config file
            if (!Sync.file_there(Config.CONFIG_FILE)) {
                Sync.update_json(Config.CONFIG_FILE, Config.BASIC_CONFIGS);
            };

            // if basic_config keys doesn't exist
            if (Sync.file_there(Config.CONFIG_FILE)) {
                const _file = Sync.read_json(Config.CONFIG_FILE);

                // Iterate over each entry in BASIC_CONFIGS
                Object.entries(Config.BASIC_CONFIGS).forEach(([key, value]) => {
                    // Check if the key is not present in _file
                    if (!_file.hasOwnProperty(key)) {
                        // Add the key-value pair to _file
                        _file[key] = value;
                    }
                });

                // Update the CONFIG_FILE with the new content
                Sync.update_json(Config.CONFIG_FILE, _file);
            }


            console.log(`✅ [--config.Config.check--] - All checked passed!`);
        } catch (err) {
            console.error(`❌ [--config.Config.check--] - An error occurred: ${err.message}`);
        } 
    }

    static setInformation(json) {
        Config.check();
        Sync.update_json(Config.CONFIG_FILE, json);
        console.log(`✅ [--config.Config.setInformation--] - successfully setted informations!`);
    }

    static get getPackageInfo() {
        return Sync.read_json(path.join(__dirname, "..", "..", "package.json"));
    }

    static get getInformation() {
        Config.check();
        console.log(`✅ [--config.Config.getInformation--] - Getting informations!`);
        return Sync.read_json(Config.CONFIG_FILE);
    }
}

module.exports = {
    Config,
}