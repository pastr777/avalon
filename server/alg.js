alg = function ()
{
  var a = [1,2,3,4,5,6,7,8,9];
    var c = [a,a,a,a,a];
    var b = 0;
    var f = [];
    var i = [0,0,0,0,0];
    var l = [];
    for (var r=0; r<c.length;r++)
    {
        l[r] = c[r].length;
    }

    switch (3)
   {
       case  3:
           for (var z=0; z<5;z++)
           {
               console.log(z);
               //console.log(f);
               for (i[z]=0;i[z]<l[z];i[z]++)
               {
                   f[z]=i[z];
                   //console.log(f);
                   //console.log(i.join(", "));
                   console.log(f.join(", "));
               }
           }
           //for ( i[0]=0; i[0]<c[0].length;i[0]++)
           //{
           //    f [0] = i[0];
           //    for ( i[1]=0; i[1]<c[1].length;i[1]++)
           //    {
           //        f [1] = i[1];
           //        for ( i[2]=0; i[2]<c[2].length;i[2]++)
           //        {
           //            f [2] = i[2];
           //            for ( i[3]=0; i[3]<c[3].length;i[3]++)
           //            {
           //                f [3] = i3;
           //                for ( i[4]=0; i[4]<c[4].length;i[4]++)
           //                {
           //                    f [4] = i[4];
           //                    //console.log(f[i4]);
           //                    console.log(f.join(", "));
           //                }
           //            }
           //        }
           //    }
           //}
           break;
       case  4:
           for (var i0=0; i0<9;i0++)
           {
               for (var i1=0; i1<9;i1++)
               {
                   for (var i2=0; i2<9;i2++)
                   {
                       for (var i3=0; i3<9;i3++)
                       {
                           for (var i4=0; i4<9;i4++)
                           {
                               f [4]= [i0, i1, i2, i3, i4];
                               //console.log(f.join(", "));

                           }
                       }
                   }
               }
           }
           break;
       case  5:
           var i0 = c[0].length-1;
           if (i0>-1)
           {
               do
               {
                   var i1 = c[1].length-1;
                   if (i1>-1)
                   {
                       do
                       {
                           var i2 = c[2].length-1;
                           if (i2>-1)
                           {
                               do
                               {
                                   var i3 = c[3].length-1;
                                   if (i3>-1)
                                   {
                                       do
                                       {
                                           var i4 = c[4].length-1;
                                           if (i4>-1)
                                           {
                                               do
                                               {
                                                   f = [i0, i1, i2, i3, i4];
                                                   //console.log(f.join(", "));
                                               }
                                               while(--i4>=0);
                                           }
                                       }
                                       while(--i3>=0);
                                   }
                               }
                               while(--i2>=0);
                           }
                       }
                       while(--i1>=0);
                   }
               }
               while(--i0>=0);
           }
           break;
       case  6:

           break;
       case  7:
           for (var i=0; i < 8; i++)
           {
               b+=a[i];
           }
           break;
       case  8:
           var i = 7;
           if (i>-1)
           {
               do
               {
                   b+=a[i];
               }
               while(--i>=0);
           }
           break;
       case  1:
           for (var i=0; i < a.length; i++)
           {
               b+=a[i];
           }
           break;
       case  2:
           var i = a.length-1;
           if (i>-1)
           {
               do
               {
                   b+=a[i];
               }
               while(--i>=0);
           }
           break;
   }


};
//fib_loop = function (n)
//{
//    var fib = [ 1, 1 ];
//    for( var i = 2; i <= n; i++ )
//        fib[i] = fib[i-1] + fib[i-2];
//    return fib[n];
//
//    //var app = require('express').createServer();
//    //
//    //var fibonacci = function(n, callback) {
//    //    var inner = function(n1, n2, i) {
//    //        if (i > n) {
//    //            callback(null, n2);
//    //            return;
//    //        }
//    //        var func = (i % 100) ? inner : inner_tick;
//    //        func(n2, n1 + n2, i + 1);
//    //    }
//    //    var inner_tick = function(n1, n2, i) {
//    //        process.nextTick(function() { inner(n1, n2, i); });
//    //    }
//    //    if (n == 1 || n == 2) {
//    //        callback(null, 1);
//    //    } else {
//    //        inner(1, 1, 3);
//    //    }
//    //}
//    //
//    //app.get('/:n', function(req, res) {
//    //    fibonacci(req.params.n, function(err, number) {
//    //        res.send(''+number);
//    //    });
//    //});
//    //
//    //
//    //app.listen(3000);
//};
//function say(word) {
//    console.log(word);
//}
//
//function execute(someFunction, value) {
//    someFunction(value);
//}
//
//execute(say, "Hello");
//function execute1(someFunction, value) {
//    someFunction(value);
//}
//
//execute1(function(word){ console.log(word) }, "Hello");
//const start1 = process.hrtime();
//// do op
//const end = process.hrtime(start1);
//console.info("Время исполнения (hr): %ds %dms", end[0], end[1]/1000000);
//console.time('first test');
////тестируемый код
//console.timeEnd('first test');
//var start = Date.now();
//
//for (i=0; i < 1000000; i++) {
//    packer.pack({abc: 123, cde: 5});
//}
//
//console.log(Date.now() - start);