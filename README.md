## Installation

1. Clone this repository and navigate into it.
```shell
git clone git@github.com:acgreene/kde-plasma-virtual-desktop-cycler.git
cd kde-plasma-virtual-desktop-cycler
```

2. Move the repository contents to the following path on your linux machine.
```shell
mkdir -p ~/.local/share/kwin/scripts/virtual-desktop-cycler
cp -r * ~/.local/share/kwin/scripts/virtual-desktop-cycler/
```

3. Restart KWin for the changes to take effect (optional)
```shell
kwin_x11 --replace &
```

4. After copying the files, enable the script:
- Open system settings
- Go to Window Management -> KWin Scripts
- Find and enable the "Virtual Desktop Cycler" in the list.