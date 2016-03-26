(function(ext) {
    var device = null;

    // Extension API interactions

    ext._deviceConnected = function(dev) {
        console.log(dev);
        device = dev;
    }

    ext._deviceRemoved = function(dev) {
        if(device != dev) return;
        device = null;
    };

    ext._shutdown = function() {
        if(device) device.close();
        device = null;
    };

    ext._getStatus = function() {
        if(!device) return {status: 1, msg: 'disconnected'};
        return {status: 2, msg: 'connected'};
    }

    ext.my_first_block = function() {
        // Code that gets executed when the block is run
        console.log('my first block is executed');
    };

    var descriptor = {
        blocks: [
            // Block type, block name, function name
            [' ', 'my first block', 'my_first_block'],
        ]
    };

    ScratchExtensions.register('iPhone', descriptor, ext, {type: 'serial'});
})({});
