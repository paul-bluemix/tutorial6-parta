/*
The models are local objects which reference to collections inside the db. If the collection doesnt't exist in the db, it will be created.
Here you can also set the basic rules on how the data is handled, for example, you may only want to make the server able to delete data from
the db.
 */

images = new Mongo.Collection('images');
stuff = new Mongo.Collection('stuff');

// Collection2 already does schema checking
// Add custom permission rules if needed
if (Meteor.isServer) {
    images.allow({
        insert : function () {
            return true;
        },
        update : function () {
            return true;
        },
        remove : function () {
            return true;
        }
    });
}


// Collection2 already does schema checking
// Add custom permission rules if needed
if (Meteor.isClient) {
    images.allow({
        insert : function () {
            return true;
        },
        update : function () {
            return true;
        },
        remove : function () {
            return true;
        }
    });
}