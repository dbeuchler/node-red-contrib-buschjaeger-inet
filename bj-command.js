module.exports = function(RED) {
    function BjCommandNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;

        this.radio = RED.nodes.getNode(config.radio);

        node.on('input', function(msg) {
            var command = msg.payload.command;
            var payload = msg.payload.payload;
            var id = msg.payload.id;

            b = Buffer.from("COMMAND:" + command + "\r\n" + payload + "\r\n" + "ID:" + id + "\r\n\r\n");

            msg.payload = b.toString();

            node.send(msg);
        });
    }
    RED.nodes.registerType("bj-command", BjCommandNode);
}