module.exports = function(RED) {
    function BjRadioNode(n) {
        RED.nodes.createNode(this,n);
        this.host = n.host;
        this.port = n.port;
    }
    RED.nodes.registerType("bj-radio", BjRadioNode);
}