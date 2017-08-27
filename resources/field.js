module.exports = function(type){
    this.title = null;
    this.label = null;
    this.type = typeof type !== 'undefined' ? type : null;
    this.panels = [];

    this.hasSubFields = function() {
        return ['section', 'repeater'].indexOf(this.type) > -1;
    }
};