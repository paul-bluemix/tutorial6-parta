Template.card.helpers({
    // This helper iterates through the labels and return the highest value as the title.
    // we use this in the template in the {{title}} to find a meaningful way to dynamicall asssign
    // a title to the card
    title:function(){
        var titleLabel="No Label";
        var highest=0;
        if(this.labels){
            this.labels.forEach(function(label){
                if(label.label_score>highest){
                    titleLabel=label.label_name;
                    highest=label.label_score;
          }

            })
        }
        return titleLabel;
    }
});