module.exports = function(type){
    this.title = null;
    this.label = null;
    this.type = typeof type !== 'undefined' ? type : null;
    this.fields = [];
    this.numFields = 1;
    this.min = 0;
    this.max = null;
};