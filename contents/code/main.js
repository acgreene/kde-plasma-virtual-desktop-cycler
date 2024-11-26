class VirtualDesktopSwitcher {
    constructor() {
        this.currentIndex = 0;
        
        // Keep track of current desktop index
        workspace.currentDesktopChanged.connect(desktop => {
            this.currentIndex = workspace.desktops.indexOf(desktop);
        });

        // Forward cycling with Ctrl+Right
        registerShortcut(
            "Switch to Next Virtual Desktop",
            "Switch to Next Virtual Desktop",
            "Ctrl+Right",
            () => this.switchDesktop('forward')
        );

        // Backward cycling with Ctrl+Left
        registerShortcut(
            "Switch to Previous Virtual Desktop",
            "Switch to Previous Virtual Desktop",
            "Ctrl+Left",
            () => this.switchDesktop('backward')
        );
    }

    switchDesktop(direction) {
        const numDesktops = workspace.desktops.length;
        
        if (direction === 'forward') {
            this.currentIndex = (this.currentIndex + 1) % numDesktops;
        } else {
            this.currentIndex = (this.currentIndex - 1 + numDesktops) % numDesktops;
        }

        workspace.currentDesktop = workspace.desktops[this.currentIndex];
    }
}