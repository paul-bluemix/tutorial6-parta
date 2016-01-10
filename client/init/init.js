// Here we can setup some initial functions for the client, in this case, we want it to subscribe to the images data.
// When it subscribes, data from the DB will be made available to the client. Meteor handles this in a special way,
// it creates a local mini db which is a replica of the real one, and keep them in sync.

Meteor.subscribe('images');