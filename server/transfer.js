
var res = [];
var n1 = ["Ivanov", "Petroff", "Sidorov", "Fima"];
var n2 = ["Sergey", "Aleksey", "Evrey", "Neevrey"];
var date = ["02.07.2016", "08.07.2016", "16.07.2016", "16.07.2016"];
var st1 = [0,1,1,1];
var st2 = [1,0,1,1];
var st3 = [1,0,1,1];
var st4 = [0,1,1,1];
var str = [st1, st2, st3, st4];
var events = [0, 1, 2, 4];
var cc = ["___","___","___","___"];
var ans= [];

for (var i=0; i<4; i++)
{
    ans [i] = [date[i], n1[i], n2[i], cc[i], events[i], str[i]];
}

var nww;
var www;
var sww;

var mailsend  = function()
{

    nww = new Date();
    www = nww.toTimeString().slice(0,8);
    sww = "18:41:11";
    console.log (www);
    if (www >= sww)
    {
        console.log ("!!!!!!!!");
        if (ans[1][5][1]!=0)
        {ans[1][5][2] = 0;}

        return;
    }
    setTimeout(mailsend,1000);


};


setTimeout(mailsend,1000);


transfer = function (msg)
{



    //console.log("fsfs" + msg[2]);
      switch (msg[2])
      {

          case gc.UPLOAD:
              xml_parser(msg[3]);
              res[0] = "IS DONE!!!";
              break;

          case gc.UPDATE:
              console.log("fsfs" + msg);
              //if (msg[3][0] == 2016 && msg[3][1] == 7)
              {
                  res = ans;
                  console.log("fsfs   " + res);
              }
              break;

          case gc.DETAIL_DAY:
              //day id
              break;

          case gc.DETAIL_PER:
              // person id
              break;

          case gc.CHANGE_DAY:
              //...
              break;
          case gc.NEW_PER:
              //...
              break;

          case gc.CHANGE_PER:

              res = [];
              //detailed person + event
        ans[msg[3][0]][3] = msg[3][1];
              ans[msg[3][0]][5][1] = 1;
              ans[msg[3][0]][5][0] = 0;
              //console.log("qwdqd  " + ans);

              res [0] = 1;

              break;

          case gc.LOG_IN:
              gc.login = msg[3][1];
              res [0] = true;
              break;

          case gc.LOG_OUT:
              break;

          case gc.LOG_UP:
              break;
      }
    return res;
};