- Open terminal
- Clone the repository

```
$ cd /path/to/games/
$ git clone https://github.com/whipowill/quake-dir.git Quake
```

- Download the game engine [QSS-M](https://qssm.quakeone.com/) and put it in that directory
- Find a copy of the game files from the original game
- Put the pak files in the ``/path/to/quake/id1/`` directory
- Put the music files in the ``/path/to/quake/id1/music/`` directory
- Create your game shortcut to include ``-game scarlet -particles 99999 -listen 16``
- Create your own ``settings.cfg`` file to overwrite my ``autoexec.cfg`` file

```
$ cd /path/to/games/Quake/scarlet/
$ touch settings.cfg
$ vim settings.cfg
```

- Whenever you want to run updates

```
$ cd /path/to/games/Quake
$ git pull origin master
```

- Play the game