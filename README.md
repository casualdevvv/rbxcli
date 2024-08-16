# rbxcli

A CLI tool for managing Roblox versions, allowing you to download the latest, previous, or custom version hash of Roblox. This tool also includes the ability to launch Roblox with or without custom arguments.

## Getting Started with rbxcli

### Prerequisites

Before you begin, ensure you have [Node.js](https://nodejs.org/) installed. This will also install npm (Node Package Manager), which is required to install the dependencies for rbxcli.

### Installation

1. **Download the Source Code**
   - Head over to the [releases page](https://github.com/casualdevvv/rbxcli/releases) and download the latest source code.

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

#### Can this be used to downgrade Roblox?

Yes, just select the "2. Download the last LIVE version (downgrade)" option in the menu. This will download the previous LIVE version of Roblox.

#### Can this be used to launch Roblox games from [roblox.com](https://roblox.com)?

No, there is no protocol support for launching games directly from the website. However, you can manually launch games by opening the `RobloxPlayerBeta.exe` in the downloaded version folder. Please note that rbxcli is not intended to replace the Roblox launcher or Bloxstrap.

#### How does this work?

rbxcli retrieves the latest or specified version of Roblox's `rbxPkgManifest` and downloads all necessary files from `setup.rbxcdn.com`, extracting them into the specified destination. It then creates an `AppSettings.xml` file.

#### Can I download any Roblox version using this?

Yes, select the "3. Download a custom version hash" option, then input the version hash you want to download.

#### Can I download Roblox versions from specific channels?

Yes, select the "4. Download from a specific channel" option, then enter the channel name (e.g., `zbeta` or `zintegration`).

#### Can I launch Roblox with custom arguments?

Yes, after downloading a Roblox version, select the "6. Launch Roblox with args" option to provide custom arguments for launching the game.

## Credits

Special thanks to [Bloxstrap](https://github.com/pizzaboxer/bloxstrap) for providing inspiration and resources that helped in the development of rbxcli, particularly for the folder mappings used during extraction.
