
// this helper is the object that the ui can use to access the data. This way, the UI is bound to the data.
// in this case, we use it to create the cards on the screen. Further description in the prac
Template.home.helpers({
    myImages:function(){
        console.log(images.find().count());
        return images.find();
    }
});

Template.home.events({

});

Template.home.rendered=function(){

}