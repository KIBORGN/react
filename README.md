
- Local vine setup
- Mountable calls vine update RPC
- Manifest rebuild

Initial work to render a line

Dispose of line renderer on destroy

- Vine object
- Prefab setup

- Holding E when nearing the end of a vine will swap you to an appropriately set next vine
- Rotation speed changes
- Mountable now shared between swings

Rotate y angle of mountable higher as dy increases. Gives access to higher angles wil more steep vine swings

Change mountable so the player doesnt insta die on dismount

Now able to rotate z axis porabola arcs via using world space to project each point around a central pivot

Auto dismount player at the end of sampling (just use distance for now)

- Player rotation follows orientation of parabola flow.
- More code structure cleanup.
- Inject use level in vine utils

Refactor parabolic sampling into its own class. Remove cardinal spline code. Integrate porabola visualisation into the vine launch points. Remove old visualisation code,

Cardinal Splines offering little improvement with increased complication. Lets fake a porabola instead

Initial work to try out Cardinal Splines:
- Setup minimal tension values (basically Catmull-Rom)
- Movement adjustments

Change input to jump only

Mountable:
- Added dismount on input
- Added eye override pose
- Adjusted poses when on mountable
- Changed mountable spawning behaviour

Partial modifier and RPC build

- Scene updates
- Prefab properties populated
- Manifest

- Initial launch point and mountable basic scripts
- Basic prefab setup
- Vine launch points can connect together

Initial scene setup
