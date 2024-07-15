// sourced these folder mappings from bloxstrap, thanks!

const folderMappings = {
  _common: {
    'Libraries.zip': '',
    'shaders.zip': 'shaders/',
    'ssl.zip': 'ssl/',
    'WebView2.zip': '',
    'WebView2RuntimeInstaller.zip': 'WebView2RuntimeInstaller/',
    'content-avatar.zip': 'content/avatar/',
    'content-configs.zip': 'content/configs/',
    'content-fonts.zip': 'content/fonts/',
    'content-models.zip': 'content/models/',
    'content-sky.zip': 'content/sky/',
    'content-sounds.zip': 'content/sounds/',
    'content-textures2.zip': 'content/textures/',
    'content-textures3.zip': 'PlatformContent/pc/textures/',
    'content-terrain.zip': 'PlatformContent/pc/terrain/',
    'content-platform-fonts.zip': 'PlatformContent/pc/fonts/',
    'extracontent-places.zip': 'ExtraContent/places/',
    'extracontent-luapackages.zip': 'ExtraContent/LuaPackages/',
    'extracontent-translations.zip': 'ExtraContent/translations/',
    'extracontent-models.zip': 'ExtraContent/models/',
    'extracontent-textures.zip': 'ExtraContent/textures/',
  },
  _playerOnly: {
    'RobloxApp.zip': '',
  },
  _studioOnly: {
    'RobloxStudio.zip': '',
    'ApplicationConfig.zip': 'ApplicationConfig/',
    'content-studio_svg_textures.zip': 'content/studio_svg_textures/',
    'content-qt_translations.zip': 'content/qt_translations/',
    'content-api-docs.zip': 'content/api_docs/',
    'extracontent-scripts.zip': 'ExtraContent/scripts/',
    'BuiltInPlugins.zip': 'BuiltInPlugins/',
    'BuiltInStandalonePlugins.zip': 'BuiltInStandalonePlugins/',
    'LibrariesQt5.zip': '',
    'Plugins.zip': 'Plugins/',
    'Qml.zip': 'Qml/',
    'StudioFonts.zip': 'StudioFonts/',
    'redist.zip': '',
  },
};

const AppSettings = `<?xml version="1.0" encoding="UTF-8"?>
<Settings>
    <ContentFolder>content</ContentFolder>
    <BaseUrl>http://www.roblox.com</BaseUrl>
</Settings>`;

module.exports = {
  folderMappings,
  AppSettings
};
