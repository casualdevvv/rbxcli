
# rbxlivecli

A CLI alternative Roblox "bootstrapper" which can download the latest, previous, or custom version hash of Roblox.

## Getting Started with rbxlivecli

### Prerequisites

Before you begin, ensure you have [Node.js](https://nodejs.org/) installed. This will also install npm (Node Package Manager), which is required to install the dependencies for rbxlivecli.

### Installation

1. **Download the Source Code**
   - Head over to the [releases page](https://github.com/casualdevvv/rbxlivecli/releases) and download the latest source code.

2. **Install Dependencies**
   - Open a terminal in the downloaded source code directory and run:
     ```bash
     npm install
     ```

3. **Run the Application**
   - Start the application by running:
     ```bash
     npm start
     ```

## FAQ

#### Can this be used to Downgrade Roblox?

Yes, just select the "2. Download the last LIVE version (downgrade)" option in the menu. This will download the previous LIVE version of Roblox.

#### Can this be used to launch Roblox games from [roblox.com](https://roblox.com)?

No, there is no protocol support for launching games directly from the website. However, you can manually launch games by opening the `RobloxPlayerBeta.exe` in the downloaded version folder. Please note that rbxlivecli is not intended to replace the Roblox launcher or Bloxstrap.

#### How does this work?

Similar to how rdd.latte.to or Bloxstrap handles downloading Roblox versions, rbxlivecli retrieves the latest version of Roblox's `rbxPkgManifest` for the version being downloaded. It then downloads all necessary files from `setup.rbxcdn.com`, extracts them into the specified destination, and creates an `AppSettings.xml` file.

#### Can I download any Roblox version using this?

Yes, just select the "3. Download a custom version hash" option, you can then input what version you would like to download.

## Credits

Special thanks to [Bloxstrap](https://github.com/pizzaboxer/bloxstrap) for providing inspiration and resources that helped in the development of rbxlivecli. (Specifically the folder mappings for extraction)





