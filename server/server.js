var io = require('socket.io').listen(8888);

var res = [];
var trans = [];

    io.sockets.on('connection', function (socket)
    {
        console.log("Server started..");
        socket.on('message',
            function (msg)
        {
            console.log("MSG:  " + msg.join(", "));
            if (msg [0] == 1)
            {
                res = [1,"answer"];

            }
            else if (msg [0] == 2)
            {
                res = [2,"answer"];
            }
            else if (msg [0] == 3)
            {
                res = [3,"answer"];
                if (msg[1])
                {
                    xml_parser(msg[1]);
                }
            }
            else
            {
                trans = transfer (msg);
                res = [gc.GRACOOL, msg[1], msg [2],trans];
            }
            console.log(res);
            socket.send(res);

        });

        socket.on('input', function (pos) {});//client.onInput(pos);
        socket.on('disconnect', function () {});
    });




/*
request
1 - gracool
2 - agent_name
3 - req_name
4 - array


response

1 - gracool
2 - agent_mane
3 - res_name
4 - array


req_names

UPLOAD
UPDATE (year,month)
DETAIL_DAY (year, month, day)
DETAIL_PER (year, month, day)
CHANGE_DAY ([data])
CHANGE_PER ([data])
LOG_IN
LOG_OUT
LOG_UP


 */