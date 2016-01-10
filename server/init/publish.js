/*
This are some init functions for our server.

 */


// HEre we are publishing data to the clients. We can tell the client what data we want to make available.
// In this case we are saying "whenever a client subscribes to the images data, publish all data to it"

Meteor.publish('images', function () {
    return images.find();
});



// This is a SyncCron, is a helpful way of running recouring tasks in JS without having to create single thread waits.
// The reason it exists here is to avoid the application the data becoming too large. Hence whenever we have
// 20 images, we empty the collection
Meteor.startup(function(){
    SyncedCron.add({
        name: 'Clean DB',
        schedule: function(parser) {
            // parser is a later.parse object
            return parser.text('every 10 seconds');
        },
        job: function() {

            if(images.find().count()>20){
                console.log('cleaning');
                images.remove({});
            }
        }
    });
    SyncedCron.start();

})
