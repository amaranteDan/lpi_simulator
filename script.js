// Sample questions
const questions = [
  {
    question: "What command is used to list files in Linux?",
    options: ["ls", "cd", "mkdir", "rm"],
    answer: "ls",
  },
  {
    question: "Which file stores user account information?",
    options: ["/etc/passwd", "/etc/shadow", "/etc/group", "/etc/hosts"],
    answer: "/etc/passwd",
  },
  {
    question: "What command is used to create a directory?",
    options: ["mkdir", "rmdir", "cd", "touch"],
    answer: "mkdir",
    topic: "File Management",
  },
  {
    question: "What command is used to check running processes?",
    options: ["ps", "top", "htop", "jobs"],
    answer: "ps",
    topic: "Process Management",
  },
  // Add more questions...
  {
    question: "What command is used to list files in Linux?",
    options: ["ls", "cd", "mkdir", "rm"],
    answer: "ls",
    topic: "File Management",
  },
  {
    question: "Which file stores user account information?",
    options: ["/etc/passwd", "/etc/shadow", "/etc/group", "/etc/hosts"],
    answer: "/etc/passwd",
    topic: "Users & Permissions",
  },
  {
    question: "What command is used to create a directory?",
    options: ["mkdir", "rmdir", "cd", "touch"],
    answer: "mkdir",
    topic: "File Management",
  },
  {
    question: "What command is used to check running processes?",
    options: ["ps", "top", "htop", "jobs"],
    answer: "ps",
    topic: "Process Management",
  },
  {
    question: "Which command shows the current working directory?",
    options: ["pwd", "ls", "whoami", "echo $PWD"],
    answer: "pwd",
    topic: "File Management",
  },
  {
    question: "Which command is used to move or rename a file?",
    options: ["mv", "cp", "rm", "rename"],
    answer: "mv",
    topic: "File Management",
  },
  {
    question: "Which command displays disk usage of a directory?",
    options: ["du", "df", "ls", "free"],
    answer: "du",
    topic: "Storage",
  },
  {
    question: "Which command shows free disk space?",
    options: ["df", "du", "free", "lsblk"],
    answer: "df",
    topic: "Storage",
  },
  {
    question: "Which command shows memory usage?",
    options: ["free", "top", "vmstat", "htop"],
    answer: "free",
    topic: "Memory",
  },
  {
    question: "Which command changes file permissions?",
    options: ["chmod", "chown", "umask", "ls -l"],
    answer: "chmod",
    topic: "Users & Permissions",
  },
  {
    question: "Which command is used to change file ownership?",
    options: ["chown", "chmod", "usermod", "passwd"],
    answer: "chown",
    topic: "Users & Permissions",
  },
  {
    question: "Which command shows network interface information?",
    options: ["ifconfig", "ip addr", "netstat -i", "all of the above"],
    answer: "all of the above",
    topic: "Networking",
  },
  {
    question: "Which command pings a host to check connectivity?",
    options: ["ping", "traceroute", "curl", "netcat"],
    answer: "ping",
    topic: "Networking",
  },
  {
    question: "Which command shows the route taken by packets?",
    options: ["traceroute", "ping", "netstat", "route"],
    answer: "traceroute",
    topic: "Networking",
  },
  {
    question: "Which file contains the list of mounted file systems?",
    options: ["/etc/fstab", "/etc/mtab", "/etc/mounts", "/proc/mounts"],
    answer: "/etc/fstab",
    topic: "Storage",
  },
  {
    question: "Which command is used to search for text inside files?",
    options: ["grep", "find", "locate", "awk"],
    answer: "grep",
    topic: "Text Processing",
  },
  {
    question: "Which command is used to search for files by name?",
    options: ["find", "grep", "locate", "which"],
    answer: "find",
    topic: "File Management",
  },
  {
    question: "Which command updates the file database for 'locate'?",
    options: ["updatedb", "locate -u", "dbupdate", "mlocate"],
    answer: "updatedb",
    topic: "File Management",
  },
  {
    question: "Which command shows the manual page of a command?",
    options: ["man", "help", "info", "whatis"],
    answer: "man",
    topic: "Documentation",
  },
  {
    question: "Which command displays the last lines of a file?",
    options: ["tail", "head", "less", "cat"],
    answer: "tail",
    topic: "Text Processing",
  },
  {
    question: "Which command is used to monitor real-time system logs?",
    options: ["tail -f", "dmesg -w", "journalctl -f", "all of the above"],
    answer: "all of the above",
    topic: "Logs",
  },
  {
    question: "Which command compresses files with gzip?",
    options: ["gzip", "zip", "tar -z", "compress"],
    answer: "gzip",
    topic: "Compression",
  },
  {
    question: "Which command extracts .tar.gz files?",
    options: ["tar -xvzf", "gzip -d", "unzip", "gunzip"],
    answer: "tar -xvzf",
    topic: "Compression",
  },
  {
    question: "Which command shows currently logged-in users?",
    options: ["who", "w", "users", "all of the above"],
    answer: "all of the above",
    topic: "Users & Permissions",
  },
  {
    question: "Which command changes the current user?",
    options: ["su", "sudo", "login", "switch"],
    answer: "su",
    topic: "Users & Permissions",
  },
  {
    question: "Which command allows a user to run commands as root?",
    options: ["sudo", "su", "root", "admin"],
    answer: "sudo",
    topic: "Users & Permissions",
  },

  // ===== Topic 101: System Architecture =====
  {
    question: "Which command shows PCI devices in the system?",
    options: ["lsusb", "lspci", "lsdev", "lsblk"],
    answer: "lspci",
    topic: "101",
  },
  {
    question: "Which command shows USB devices connected?",
    options: ["lsusb", "lspci", "usb-devices", "dmidecode"],
    answer: "lsusb",
    topic: "101",
  },
  {
    question: "Which command displays currently loaded kernel modules?",
    options: ["lsmod", "modprobe", "insmod", "rmmod"],
    answer: "lsmod",
    topic: "101",
  },
  {
    question: "Which of these commands can insert a kernel module?",
    options: ["insmod", "lsmod", "modprobe", "rmmod"],
    answer: "insmod",
    topic: "101",
  },
  {
    question: "Which of these commands loads modules resolving dependencies?",
    options: ["insmod", "modprobe", "rmmod", "lsmod"],
    answer: "modprobe",
    topic: "101",
  },
  {
    question: "Which command removes a kernel module?",
    options: ["rmmod", "modprobe -r", "insmod", "lsmod"],
    answer: "rmmod",
    topic: "101",
  },
  {
    question: "Which directory provides runtime system and kernel information as a filesystem?",
    options: ["/sys", "/proc", "/dev", "/run"],
    answer: "/sys",
    topic: "101",
  },
  {
    question: "Which directory provides process and kernel info in a filesystem interface?",
    options: ["/sys", "/proc", "/dev", "/run"],
    answer: "/proc",
    topic: "101",
  },
  {
    question: "Which command prints kernel ring buffer (boot messages)?",
    options: ["dmesg", "journalctl", "syslog", "logread"],
    answer: "dmesg",
    topic: "101",
  },
  {
    question: "Which command shows events logged by systemd’s journal?",
    options: ["journalctl", "dmesg", "syslog", "tail /var/log/messages"],
    answer: "journalctl",
    topic: "101",
  },
  {
    question: "Which utility shows detailed hardware information (CPU, memory, etc.)?",
    options: ["hwinfo", "lshw", "inxi", "dmidecode"],
    answer: "lshw",
    topic: "101",
  },
  {
    question: "Which command shows BIOS/DMI table information?",
    options: ["dmidecode", "lshw", "hwinfo", "inxi"],
    answer: "dmidecode",
    topic: "101",
  },
  {
    question: "Which command shows PCI bus and device topology (with classes)?",
    options: ["lspci -v", "lsusb -v", "lshw", "hwinfo"],
    answer: "lspci -v",
    topic: "101",
  },
  {
    question: "Where are modules loaded from by default (path)?",
    options: ["/lib/modules/$(uname -r)", "/usr/lib/modules", "/etc/modules", "/modules"],
    answer: "/lib/modules/$(uname -r)",
    topic: "101",
  },
  {
    question: "Which command allows you to blacklist kernel modules so they won’t load automatically?",
    options: ["editing /etc/modprobe.d/*.conf", "rm /lib/modules", "chmod on module file", "alias in /etc/modules"],
    answer: "editing /etc/modprobe.d/*.conf",
    topic: "101",
  },
  {
    question: "Which bootloader is commonly used on modern Linux systems (UEFI/BIOS)?",
    options: ["GRUB 2", "LILO", "SYSLINUX", "NTLDR"],
    answer: "GRUB 2",
    topic: "102",  // borderline but in installation/boot mgmt
  },
  {
    question: "Which file is typically the GRUB configuration file?",
    options: ["/boot/grub/grub.cfg", "/etc/grub.conf", "/etc/grub2.cfg", "/boot/boot.cfg"],
    answer: "/boot/grub/grub.cfg",
    topic: "102",
  },
  {
    question: "Which command installs the GRUB bootloader to MBR or EFI partition?",
    options: ["grub-install", "update-grub", "grub-mkconfig", "grub-setup"],
    answer: "grub-install",
    topic: "102",
  },
  {
    question: "Which command regenerates the GRUB configuration?",
    options: ["update-grub", "grub-mkconfig", "grub-install", "grub-update"],
    answer: "update-grub",
    topic: "102",
  },
  {
    question: "When designing disk layout, which partition is often mandatory for EFI systems?",
    options: ["EFI System Partition (ESP)", "/boot", "swap", "/home"],
    answer: "EFI System Partition (ESP)",
    topic: "102",
  },
  {
    question: "What is the recommended practice for placing /boot on simpler systems?",
    options: ["/boot inside root partition", "Separate /boot partition", "No /boot needed", "/boot mounted on /home"],
    answer: "Separate /boot partition",
    topic: "102",
  },
  {
    question: "Which command can create a new ext4 filesystem on /dev/sda1?",
    options: ["mkfs.ext4 /dev/sda1", "mkfs /dev/sda1 -t ext4", "mkfs.ext3 /dev/sda1", "newfs /dev/sda1"],
    answer: "mkfs.ext4 /dev/sda1",
    topic: "102",
  },
  {
    question: "Which command shows which shared libraries a binary uses?",
    options: ["ldd", "nm", "objdump", "readelf"],
    answer: "ldd",
    topic: "102",
  },
  {
    question: "Which command updates the shared library cache (ld.so cache)?",
    options: ["ldconfig", "ldcache", "ldupdate", "ldreload"],
    answer: "ldconfig",
    topic: "102",
  },
  {
    question: "Which file configures dynamic linker run-time bindings and library paths?",
    options: ["/etc/ld.so.conf", "/etc/ld.so.cache", "/etc/ldconfig.conf", "/etc/ld.library"],
    answer: "/etc/ld.so.conf",
    topic: "102",
  },
  {
    question: "Which command shows which package owns a file (on Debian-based systems)?",
    options: ["dpkg -S", "rpm -qf", "dpkg -qf", "apt-file search"],
    answer: "dpkg -S",
    topic: "102",
  },
  {
    question: "Which command shows which package owns a file (on RPM-based systems)?",
    options: ["rpm -qf", "dpkg -S", "yum whatprovides", "rpm -qa"],
    answer: "rpm -qf",
    topic: "102",
  },
  {
    question: "Which command installs a package via Debian APT?",
    options: ["apt install pkg", "dpkg -i pkg", "apt-get install pkg", "aptitude install pkg"],
    answer: "apt install pkg",
    topic: "102",
  },
  {
    question: "Which command removes a package using apt (but keeps config)?",
    options: ["apt remove pkg", "apt purge pkg", "dpkg -r pkg", "apt-get remove pkg"],
    answer: "apt remove pkg",
    topic: "102",
  },
  {
    question: "Which command purges a package (remove + config) in Debian?",
    options: ["apt purge pkg", "apt remove pkg", "dpkg -P pkg", "apt-get purge pkg"],
    answer: "apt purge pkg",
    topic: "102",
  },
  {
    question: "Which command upgrades all installed packages in Debian/Ubuntu?",
    options: ["apt upgrade", "apt-get update", "apt full-upgrade", "apt-get dist-upgrade"],
    answer: "apt upgrade",
    topic: "102",
  },
  {
    question: "Which command performs update of package list in Debian/Ubuntu?",
    options: ["apt update", "apt-get upgrade", "apt-get update", "apt-refresh"],
    answer: "apt update",
    topic: "102",
  },
  {
    question: "Which command installs an RPM (local file) package?",
    options: ["rpm -i pkg.rpm", "yum install pkg.rpm", "dnf install pkg.rpm", "rpm --install pkg"],
    answer: "rpm -i pkg.rpm",
    topic: "102",
  },
  {
    question: "Which command upgrades an installed RPM package?",
    options: ["rpm -U pkg.rpm", "rpm -u pkg.rpm", "rpm -i pkg.rpm", "yum update pkg"],
    answer: "rpm -U pkg.rpm",
    topic: "102",
  },
  {
    question: "Which command queries RPM database for a package?",
    options: ["rpm -qi pkg", "rpm -q pkg", "yum info pkg", "rpm -ql pkg"],
    answer: "rpm -qi pkg",
    topic: "102",
  },
  {
    question: "Which tool is commonly used to handle dependencies automatically on RPM-based systems?",
    options: ["yum / dnf", "rpm only", "apt", "rpmdep"],
    answer: "yum / dnf",
    topic: "102",
  },
  {
    question: "Which file is used to configure third-party rpm repositories (on CentOS/RHEL)?",
    options: ["/etc/yum.repos.d/*.repo", "/etc/rpm.conf", "/etc/yum.conf", "/etc/rpm/repos.d"],
    answer: "/etc/yum.repos.d/*.repo",
    topic: "102",
  },
  {
    question: "Which command builds a Debian package from source directory?",
    options: ["dpkg-buildpackage", "make deb", "apt build", "dpkg --build"],
    answer: "dpkg-buildpackage",
    topic: "102",
  },
  {
    question: "Which command installs a .deb file manually?",
    options: ["dpkg -i file.deb", "apt install file.deb", "apt-get install file.deb", "dpkg install file.deb"],
    answer: "dpkg -i file.deb",
    topic: "102",
  },
  {
    question: "Which command lists files inside a .deb package?",
    options: ["dpkg -c file.deb", "dpkg -L file.deb", "apt contents file.deb", "dpkg --contents"],
    answer: "dpkg -c file.deb",
    topic: "102",
  },
  // ===== CONTINUAÇÃO DAS PERGUNTAS =====

// --- Topic 101: System Architecture ---
{
  question: "Which runlevel is used for reboot?",
  options: ["0", "3", "5", "6"],
  answer: "6",
  topic: "101",
},
{
  question: "Which runlevel is used for system halt/shutdown?",
  options: ["0", "1", "3", "6"],
  answer: "0",
  topic: "101",
},
{
  question: "Which runlevel is for single-user/emergency mode?",
  options: ["1", "2", "3", "5"],
  answer: "1",
  topic: "101",
},
{
  question: "Which system initialization method uses targets instead of runlevels?",
  options: ["systemd", "SysVinit", "Upstart", "init"],
  answer: "systemd",
  topic: "101",
},
{
  question: "Which systemd target corresponds to multi-user mode?",
  options: ["multi-user.target", "graphical.target", "rescue.target", "default.target"],
  answer: "multi-user.target",
  topic: "101",
},
{
  question: "Which command changes the default systemd target?",
  options: ["systemctl set-default", "systemctl isolate", "systemctl default", "init"],
  answer: "systemctl set-default",
  topic: "101",
},
{
  question: "Which systemd command shows the current default target?",
  options: ["systemctl get-default", "systemctl status", "systemctl list-units", "systemctl isolate"],
  answer: "systemctl get-default",
  topic: "101",
},
{
  question: "Which kernel parameter lets you pass options at boot (e.g., single)?",
  options: ["GRUB cmdline", "kernel.args", "bootline", "lilo.conf"],
  answer: "GRUB cmdline",
  topic: "101",
},
{
  question: "Which command lists block devices?",
  options: ["lsblk", "blkid", "fdisk -l", "parted -l"],
  answer: "lsblk",
  topic: "101",
},
{
  question: "Which command shows filesystem UUIDs?",
  options: ["blkid", "lsblk -f", "dumpe2fs", "df -h"],
  answer: "blkid",
  topic: "101",
},
{
  question: "Which command is used to display CPU information?",
  options: ["lscpu", "cat /proc/cpuinfo", "inxi -C", "all of the above"],
  answer: "all of the above",
  topic: "101",
},
{
  question: "Which file contains kernel boot parameters (persistent)?",
  options: ["/etc/default/grub", "/boot/grub.cfg", "/etc/grub.conf", "/boot/boot.cfg"],
  answer: "/etc/default/grub",
  topic: "101",
},
{
  question: "Which command writes changes to partition table after editing with fdisk?",
  options: ["w", "q", "x", "p"],
  answer: "w",
  topic: "101",
},
{
  question: "Which utility can create GPT partitions?",
  options: ["parted", "gdisk", "fdisk (newer)", "all of the above"],
  answer: "all of the above",
  topic: "101",
},
{
  question: "Which file contains static device major/minor assignments?",
  options: ["/proc/devices", "/etc/devices", "/sys/devices", "/etc/udev/rules.d"],
  answer: "/proc/devices",
  topic: "101",
},
{
  question: "Which command generates an initramfs image?",
  options: ["mkinitramfs", "dracut", "update-initramfs", "all of the above"],
  answer: "all of the above",
  topic: "101",
},
{
  question: "Which command lists all systemd targets?",
  options: ["systemctl list-unit-files --type=target", "systemctl list-targets", "systemctl list-units --type=target", "all of the above"],
  answer: "all of the above",
  topic: "101",
},
{
  question: "Which runlevel corresponds to graphical login in SysVinit?",
  options: ["5", "3", "1", "6"],
  answer: "5",
  topic: "101",
},
{
  question: "Which tool is used to manage udev rules?",
  options: ["udevadm", "udevctl", "udev", "sysctl"],
  answer: "udevadm",
  topic: "101",
},
{
  question: "Which log file contains boot messages in SysVinit systems?",
  options: ["/var/log/messages", "/var/log/boot.log", "/var/log/syslog", "/var/log/dmesg"],
  answer: "/var/log/boot.log",
  topic: "101",
},

// --- Topic 102: Linux Installation & Package Management ---
{
  question: "Which command lists all installed Debian packages?",
  options: ["dpkg -l", "apt list --installed", "aptitude search '~i'", "all of the above"],
  answer: "all of the above",
  topic: "102",
},
{
  question: "Which command lists all installed RPM packages?",
  options: ["rpm -qa", "yum list installed", "dnf list installed", "all of the above"],
  answer: "all of the above",
  topic: "102",
},
{
  question: "Which file contains APT repository configuration?",
  options: ["/etc/apt/sources.list", "/etc/apt/apt.conf", "/etc/apt/repos.conf", "/etc/apt/config"],
  answer: "/etc/apt/sources.list",
  topic: "102",
},
{
  question: "Which directory contains additional APT repo configs?",
  options: ["/etc/apt/sources.list.d/", "/etc/apt/repos.d/", "/etc/apt/conf.d/", "/etc/apt.d/"],
  answer: "/etc/apt/sources.list.d/",
  topic: "102",
},
{
  question: "Which command shows dependencies of a Debian package?",
  options: ["apt-cache depends pkg", "apt-rdepends pkg", "dpkg -s pkg", "all of the above"],
  answer: "all of the above",
  topic: "102",
},
{
  question: "Which command shows dependencies of an RPM package?",
  options: ["rpm -qR pkg", "yum deplist pkg", "dnf repoquery --requires pkg", "all of the above"],
  answer: "all of the above",
  topic: "102",
},
{
  question: "Which command searches available packages in apt?",
  options: ["apt search", "apt-cache search", "aptitude search", "all of the above"],
  answer: "all of the above",
  topic: "102",
},
{
  question: "Which command downloads a package without installing it (Debian)?",
  options: ["apt download pkg", "apt-get download pkg", "apt-get --download-only install pkg", "all of the above"],
  answer: "all of the above",
  topic: "102",
},
{
  question: "Which command downloads a package without installing it (RPM)?",
  options: ["yumdownloader pkg", "dnf download pkg", "rpm -i --downloadonly", "both yumdownloader and dnf"],
  answer: "both yumdownloader and dnf",
  topic: "102",
},
{
  question: "Which file lists libraries currently mapped into memory by processes?",
  options: ["/proc/<pid>/maps", "/proc/<pid>/mem", "/proc/<pid>/smaps", "/proc/<pid>/ld.so"],
  answer: "/proc/<pid>/maps",
  topic: "102",
},
{
  question: "Which command verifies package files against checksums (RPM)?",
  options: ["rpm -V pkg", "rpm -K pkg.rpm", "rpm --verify pkg", "all of the above"],
  answer: "all of the above",
  topic: "102",
},
{
  question: "Which command verifies package integrity in Debian?",
  options: ["debsums", "dpkg -V", "md5sum /var/lib/dpkg/info/pkg.md5sums", "all of the above"],
  answer: "all of the above",
  topic: "102",
},
{
  question: "Which command rebuilds the RPM database?",
  options: ["rpm --rebuilddb", "yum --rebuilddb", "dnf rebuilddb", "rpmdb --rebuild"],
  answer: "rpm --rebuilddb",
  topic: "102",
},
{
  question: "Which command rebuilds the Debian package database?",
  options: ["dpkg --configure -a", "apt --fix-broken install", "dpkg-reconfigure", "all of the above"],
  answer: "all of the above",
  topic: "102",
},
{
  question: "Which tool allows building RPMs from source SPEC files?",
  options: ["rpmbuild", "rpm-build", "make rpm", "rpmcreate"],
  answer: "rpmbuild",
  topic: "102",
},
{
  question: "Which tool allows rebuilding Debian packages from source?",
  options: ["dpkg-buildpackage", "debuild", "fakeroot debian/rules build", "all of the above"],
  answer: "all of the above",
  topic: "102",
},
{
  question: "Which command configures a package after unpacking (Debian)?",
  options: ["dpkg --configure pkg", "dpkg -i pkg.deb", "dpkg-reconfigure pkg", "apt --configure pkg"],
  answer: "dpkg --configure pkg",
  topic: "102",
},
{
  question: "Which command reconfigures an already installed package (Debian)?",
  options: ["dpkg-reconfigure pkg", "dpkg --configure pkg", "apt reconfigure pkg", "dpkg -r pkg"],
  answer: "dpkg-reconfigure pkg",
  topic: "102",
},
{
  question: "Which command extracts contents of an RPM file without installing?",
  options: ["rpm2cpio pkg.rpm | cpio -id", "rpm -qpl pkg.rpm", "rpm -Uvh --extract", "rpm --unpack"],
  answer: "rpm2cpio pkg.rpm | cpio -id",
  topic: "102",
},
{
  question: "Which command extracts contents of a .deb file?",
  options: ["dpkg-deb -x file.deb dir", "ar x file.deb", "dpkg -c file.deb", "all of the above"],
  answer: "all of the above",
  topic: "102",
},
{
  question: "Which command lists files in an installed Debian package?",
  options: ["dpkg -L pkg", "dpkg -c pkg.deb", "apt-file list pkg", "all of the above"],
  answer: "dpkg -L pkg",
  topic: "102",
},
{
  question: "Which command lists files in an installed RPM package?",
  options: ["rpm -ql pkg", "rpm -qpl pkg.rpm", "yum list pkg-files", "dnf repoquery -l pkg"],
  answer: "rpm -ql pkg",
  topic: "102",
},
{
  question: "Which command removes orphaned packages in Debian/Ubuntu?",
  options: ["apt autoremove", "apt-get autoremove", "deborphan", "all of the above"],
  answer: "all of the above",
  topic: "102",
},
{
  question: "Which command removes orphaned packages in RPM-based systems?",
  options: ["yum autoremove", "dnf autoremove", "rpm --clean", "both yum and dnf"],
  answer: "both yum and dnf",
  topic: "102",
},
{
  question: "Which package manager supports transactions and rollback on RPM-based distros?",
  options: ["dnf", "yum", "rpm", "zypper"],
  answer: "dnf",
  topic: "102",
},
{
  question: "Which package manager is used in SUSE-based distributions?",
  options: ["zypper", "apt", "yum", "dnf"],
  answer: "zypper",
  topic: "102",
},
{
  question: "Which command updates repository metadata in RPM-based systems?",
  options: ["yum makecache", "dnf makecache", "zypper refresh", "all of the above"],
  answer: "all of the above",
  topic: "102",
},
{
  question: "Which tool installs packages from source archives automatically (Debian)?",
  options: ["apt source pkg && dpkg-buildpackage", "apt-get source pkg", "apt build-dep pkg", "all of the above"],
  answer: "all of the above",
  topic: "102",
},
{
  question: "Which file lists essential packages required for system bootstrapping (Debian)?",
  options: ["/var/lib/dpkg/status", "/etc/dpkg/dpkg.cfg", "/var/lib/dpkg/info", "/var/lib/apt/lists"],
  answer: "/var/lib/dpkg/status",
  topic: "102",
},
{
  question: "Which file contains RPM database (packages installed)?",
  options: ["/var/lib/rpm", "/etc/rpmdb", "/usr/lib/rpmdb", "/var/lib/yum"],
  answer: "/var/lib/rpm",
  topic: "102",
},
{
  question: "Which command removes all cached package files (Debian)?",
  options: ["apt clean", "apt-get clean", "apt autoclean", "all of the above"],
  answer: "all of the above",
  topic: "102",
},
{
  question: "Which command removes all cached package files (RPM)?",
  options: ["yum clean all", "dnf clean all", "zypper clean", "all of the above"],
  answer: "all of the above",
  topic: "102",
},
{
  question: "Which RPM query option lists changelog entries?",
  options: ["rpm -q --changelog pkg", "rpm -qch pkg", "rpm -qc pkg", "rpm -ql pkg"],
  answer: "rpm -q --changelog pkg",
  topic: "102",
},
{
  question: "Which Debian tool handles debconf database reconfiguration?",
  options: ["dpkg-reconfigure", "debconf-set-selections", "dpkg --configure -a", "all of the above"],
  answer: "all of the above",
  topic: "102",
},
{
  question: "Which command shows which package would be installed without actually installing?",
  options: ["apt install --simulate pkg", "apt-get --dry-run install pkg", "aptitude -s install pkg", "all of the above"],
  answer: "all of the above",
  topic: "102",
},
{
  question: "Which command downloads source package in RPM distros?",
  options: ["dnf download --source pkg", "yumdownloader --source pkg", "rpmbuild --rebuild src.rpm", "all of the above"],
  answer: "all of the above",
  topic: "102",
},

];

// Seleção dos elementos
const startBtn = document.getElementById("start-btn");
const quizContainer = document.getElementById("quiz-container");
const startContainer = document.getElementById("start-container");
const questionContainer = document.getElementById("question-container");
const submitBtn = document.getElementById("submit-btn");
const resetBtn = document.getElementById("reset-btn");
const resultContainer = document.getElementById("result");
const timerElement = document.getElementById("timer");
const pauseBtn = document.getElementById("pause-btn");

// Variáveis do Quiz
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeRemaining = 60 * 60; // 60 minutos em segundos
let paused = false;
let userAnswers = []; // Para registrar as respostas do usuário

// Função para iniciar o quiz
function startQuiz() {
  startContainer.style.display = "none";
  quizContainer.style.display = "block";
  submitBtn.style.display = "inline-block";
  resetBtn.style.display = "inline-block";
  showQuestion();
  startTimer();
}

// Exibir pergunta
function showQuestion() {
  questionContainer.innerHTML = "";
  const q = questions[currentQuestionIndex];
  
  const questionElement = document.createElement("div");
  questionElement.classList.add("question");
  questionElement.innerHTML = `<h3>${q.question}</h3>`;
  
  q.options.forEach(option => {
    const button = document.createElement("button");
    button.classList.add("option");
    button.textContent = option;
    button.onclick = () => selectAnswer(option);
    questionElement.appendChild(button);
  });

  questionContainer.appendChild(questionElement);
}

// Selecionar resposta
function selectAnswer(selected) {
  userAnswers.push({
    question: questions[currentQuestionIndex].question,
    selected: selected,
    correct: questions[currentQuestionIndex].answer,
    topic: questions[currentQuestionIndex].topic
  });

  if (selected === questions[currentQuestionIndex].answer) {
    score++;
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
}

// Encerrar quiz
function endQuiz() {
  quizContainer.style.display = "none";
  submitBtn.style.display = "none";
  pauseBtn.style.display = "none";
  stopTimer();

  let resultHTML = `<h2>Você acertou ${score} de ${questions.length}!</h2>`;

  // Mostrar feedback detalhado
  const stats = {};
userAnswers.forEach(ans => {
  const t = ans.topic || "Outros";
  if (!stats[t]) stats[t] = { total: 0, correct: 0 };
  stats[t].total++;
  if (ans.selected === ans.correct) stats[t].correct++;
});

resultHTML += "<h3>Desempenho por tópico:</h3><ul>";
for (let t in stats) {
  const { total, correct } = stats[t];
  const percent = Math.round((correct / total) * 100);
  resultHTML += `<li>${t}: ${correct}/${total} (${percent}%)</li>`;
}
resultHTML += "</ul>";

  resultContainer.innerHTML = resultHTML;
}

// Resetar quiz
function resetQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  timeRemaining = 60 * 60;
  paused = false;
  userAnswers = [];
  resultContainer.innerHTML = "";
  timerElement.textContent = "Time Remaining: 60:00";
  pauseBtn.textContent = "Pause";
  startContainer.style.display = "block";
  quizContainer.style.display = "none";
  submitBtn.style.display = "none";
  resetBtn.style.display = "none";
}

// Timer
function startTimer() {
  updateTimerDisplay();
  timer = setInterval(() => {
    if (!paused) {
      timeRemaining--;
      updateTimerDisplay();
      if (timeRemaining <= 0) {
        endQuiz();
      }
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
}

function updateTimerDisplay() {
  let minutes = Math.floor(timeRemaining / 60);
  let seconds = timeRemaining % 60;
  timerElement.textContent = `Time Remaining: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

// Pausar/Continuar timer
pauseBtn.addEventListener("click", () => {
  paused = !paused;
  pauseBtn.textContent = paused ? "Resume" : "Pause";
});

// Eventos
startBtn.addEventListener("click", startQuiz);
submitBtn.addEventListener("click", endQuiz);
resetBtn.addEventListener("click", resetQuiz);